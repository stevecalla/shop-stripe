import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import CartItem from "../CartItem";
import Auth from "../../utils/auth";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../../utils/actions";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
// const stripePromise = loadStripe("pk_test_51M6fjwEBZh4a6wqZ8CDy0BW1HZ4Cxp2Dghgl7cq1GTVB0iRp2HCE806Kqh7PZhNkHhDRHcQGHDR7Yirqflkyv97300MntRKWsx");

const Cart = () => {
  const [ test, setTest ] = useState();
  const [ getCheckout, { data } ] = useLazyQuery(QUERY_CHECKOUT);

  const { cart, cartOpen } = useSelector((state) => state);
  
  let dispatch = useDispatch();
  
  useEffect(() => {
    // section
    console.log('useeffect')
    console.log(data);
    
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });

        // section
        console.log(res.redirectToCheckout({ sessionId: data.checkout.session }));
      });
      
    }
  // }, [data]);
  }, [test]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!cart.length) {
      getCart();
    }
  }, [cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  async function submitCheckout() {

    //section
    console.log(`submitCheckout`);

    const productIds = [];

    cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    // getCheckout({
    //   variables: { products: productIds },
    // });

    //section
    console.log(`submitCheckout`, cart);

    let basket =  await getCheckout({
      variables: { products: productIds },
    });

    console.log({basket})
    console.log(basket.checkout)

    setTest(basket)

    // if (basket) {
    //   stripePromise.then((res) => {
    //     res.redirectToCheckout({ sessionId: basket.data.checkout.session });

    //     // section
    //     console.log(res.redirectToCheckout({ sessionId: basket.data.checkout.session }));
    //   });
    // }
  }

  if (!cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="close" onClick={toggleCart}>
        [close]
      </div>
      <h2>Shopping Cart</h2>
      {cart.length ? (
        <div>
          {cart.map((item) => (
            <CartItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          `You haven't added anything to your cart yet!`
        </h3>
      )}
    </div>
  );
};

export default Cart;
