//section
import { createStore } from 'redux'
import reducer from './reducers';
import { nanoid } from '@reduxjs/toolkit'

let preloadedState;
let products;
let categories;
// categories = [
//   { _id: '1', name: 'Food' },
//   { _id: '2', name: 'Household Supplies' },
//   { _id: '3', name: 'Electronics' },
//   { _id: '4', name: 'Books' },
//   { _id: '5', name: 'Toys' }
// ]

// products = [
//   {
//     _id: nanoid(),
//     name: 'Tin of Cookies',
//     category:  {_id: '1'},
//     description:
//       'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
//     image: 'cookie-tin.jpg',
//     price: 2.99,
//     quantity: 500
//   },
//   {
//     _id: nanoid(),
//     name: 'Canned Coffee',
//     category: {_id: '1'},
//     description:
//       'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
//     image: 'canned-coffee.jpg',
//     price: 1.99,
//     quantity: 500
//   },
//   {
//     _id: nanoid(),
//     name: 'Toilet Paper',
//     category:  {_id: '2'},
//     description:
//       'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
//     image: 'toilet-paper.jpg',
//     price: 7.99,
//     quantity: 20
//   },
//   {
//     _id: nanoid(),
//     name: 'Handmade Soap',
//     category:  {_id: '2'},
//     description:
//       'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
//     image: 'soap.jpg',
//     price: 3.99,
//     quantity: 50
//   },
//   {
//     _id: nanoid(),
//     name: 'Set of Wooden Spoons',
//     category:  {_id: '2'},
//     description:
//       'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
//     image: 'wooden-spoons.jpg',
//     price: 14.99,
//     quantity: 100
//   },
//   {
//     _id: nanoid(),
//     name: 'Camera',
//     category:  {_id: '3'},
//     description:
//       'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
//     image: 'camera.jpg',
//     price: 399.99,
//     quantity: 30
//   },
//   {
//     _id: nanoid(),
//     name: 'Tablet',
//     category:  {_id: '3'},
//     description:
//       'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
//     image: 'tablet.jpg',
//     price: 199.99,
//     quantity: 30
//   },
//   {
//     _id: nanoid(),
//     name: 'Tales at Bedtime',
//     category:  {_id: '4'},
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
//     image: 'bedtime-book.jpg',
//     price: 9.99,
//     quantity: 100
//   },
//   {
//     _id: nanoid(),
//     name: 'Spinning Top',
//     category:  {_id: '5'},
//     description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
//     image: 'spinning-top.jpg',
//     price: 1.99,
//     quantity: 1000
//   },
//   {
//     _id: nanoid(),
//     name: 'Set of Plastic Horses',
//     category: {_id: '5'},
//     description:
//       'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
//     image: 'plastic-horses.jpg',
//     price: 2.99,
//     quantity: 1000
//   },
//   {
//     _id: nanoid(),
//     name: 'Teddy Bear',
//     category:  {_id: '5'},
//     description:
//       'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
//     image: 'teddy-bear.jpg',
//     price: 7.99,
//     quantity: 100
//   },
//   {
//     _id: nanoid(),
//     name: 'Alphabet Blocks',
//     category:  {_id: '5'},
//     description:
//       'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
//     image: 'alphabet-blocks.jpg',
//     price: 9.99,
//     quantity: 600
//   }
// ]

// if (products !== undefined || categories !== undefined) {
  preloadedState = {
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  }
// }


export const store = createStore(reducer, preloadedState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());

export default store;