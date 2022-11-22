# MERN - Redux: Store - Stripe Ecommerce
[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Index

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technology](#technology)
6. [Contributing](#contributing)
7. [Resources](#resources)
8. [License](#license)

## Description

```
AS a senior engineer working on an e-commerce platform
I WANT my platform to use Redux to manage global state instead of the Context API
SO THAT my website's state management is taken out of the React ecosystem
```

```
This app is an ecommerce shopping engine that allows a user to select products, add items to a shopping cart and checkout of the cart using Stripe to make payment.

The objective of this project was to convert this e-commerce platform from using React's Context API to React Redux to manage global state. This project uses a MERN (Mongo, Express, React, Node) stack as well as GraphQL/Apollo and React Redux.

```

## Installation

Setup: 
- (1) Fork the repo, (2) Clone the forked repo locally, (3) Run `npm i` to install dependancies, and (4) "npm run develop" to build the app, deploy the local server and open the app.

## Usage

This app is deployed using Heroku. See the technology list below for more detail.

## Features

This app includes a variety of API routes (see list below). In addition, the following features exist.

1. `Single-page app` built using React.
2. `Component` based approach which breaks down each page and major component. For example, it includes components for the cart, cart items, nav, product item and product list.
3. `Redux API` includes a `store`, `actions`, and `reducers` while using `useDispatch` and `useSelector`.
4. `Search Book` and `Saved Book` pages. 
5. `Heroku` deployment.

## Conversion to Redux:
To convert this app from Reacts Context API to React Redux the following steps were taken:
1. Add `store.js` to manage global state.
2. Add the `<Provider>` compenent/wrapper to the `App.js` code.
3. Adjust each component or page to include useSelector (to get access to state) and/or useDispath (to execute actions).
4. Details.js (page), Cart (component)

## Technology

1. `React:` JavaScript transcompiler mainly used to convert ECMAScript 2015+ code into a backwards-compatible version of JavaScript.
2. `Git/Github:` Repo and version management.
3. `Mongo/Mongoose`: Database.
4. `React-Bootstrap`: For most of the CSS styling.
5. `Apollo/GraphQL`: For GraphQL database query.
6. `bcrypt`: To encrypt the user password.
7. `jsonwebtoken/jwt decode`: For user authentication and token decoding.
8. `Heroku`: Deployment.
9. `React Redux`: To manage global state.
---

## App Preview - WalkThrough Video

Video #1: Demonstrates all of the content, functional and technical acceptance criteria.

[Link to WalkThrough Video](https://youtu.be/XXe5NX0E9NM)

![Build & deploy video](./assets/demo-video.gif)

## Tests

No tests at this time.

## Contributing

Contributor Covenant Code of Conduct

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md)

## Resources

1. Project Manager: [Steve Calla - GitHub Profile](https://github.com/stevecalla)
2. GitHub Repo #1 - Deployed: [LINK](https://github.com/stevecalla/shop-stripe)
3. GitHub Repo #2 - Original: [LINK](https://github.com/stevecalla/store-stripe)
    * Note Repo #2 would not deploy to Heroku. After multiple attempts, repo was rebuilt in most recent version of create react as represented by Repo #1 above. Repo #2 includes the vast majority of the development commit information.
4. Deployed Site URL - Heroku: [LINK](https://shop-stripe.herokuapp.com/ )
5. Contact: [Email Steve](mailto:callasteven@gmail.com)

## License 

[![License:  MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project is licensed under the terms of the <span style="color:red">The MIT License</span>. Please click on the license badge for more information.