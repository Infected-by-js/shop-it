<p align="center">
  <img width="600" height="200" src="https://raw.githubusercontent.com/Infected-by-js/shop-it/cf873800bac0c9b21895b3cd1267340dc8e2bf06/client/src/assets/images/logo.svg" alt="Shop-it Logo">
</p>
<h1 align="center">Shop-it MERN Art Store</h1>

<p align="center" width="100%">
    <img width="70%" src="https://github.com/Infected-by-js/shop-it/blob/readme/home-video.gif?raw=true?raw=true" alt="main preview">
</p>

**Fullstack art store application built with the MERN stack, redux toolkit, styled-components, framer-motion**.
Includes registration/login with validation(server & client side), auto auth if the user is already logged in.
Redux Toolkit to manage the state of favourite items and the shopping cart. Protected Routes to prevent access to certain routes if the token does not exist or is invalid. This web app will be a full e-commerce application, many features will be added

## Demo

<p align="center" >
  <a href="#" target="_blank" >
    <img alt="Demo on Heroku"  width="15%" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjciIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAyNyAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+aGVyb2t1LWxvZ288L3RpdGxlPjxwYXRoIGQ9Ik0zIDBDMS4xMyAwIDAgMS4xMSAwIDIuOTAzdjI0LjE5NEMwIDI4Ljg4MyAxLjEzIDMwIDMgMzBoMjFjMS44NjMgMCAzLTEuMTEgMy0yLjkwM1YyLjkwM0MyNi45OTQgMS4xMSAyNS44NjMgMCAyNCAwSDN6bTIxLjA0MiAyYy41MDguMDA2Ljk1OC40NDguOTU4LjkyOVYyNy4wN2MwIC40ODctLjQ1LjkyOS0uOTU4LjkyOUgyLjk1OEMyLjQ1IDI4IDIgMjcuNTU4IDIgMjcuMDcxVjIuOTNjMC0uNDg4LjQ1LS45My45NTgtLjkzaDIxLjA4NHpNMjAgMjVoLTIuNzgxdi04LjUwNmMwLS43NzQtLjIzNy0xLjA0OC0uNDY4LTEuMjA4LTEuMzk2LS45NTktNS40MTQtLjA0Mi03LjgzNC45MTZMNyAxNy4wMTIgNy4wMDYgNWgyLjgxNnY3LjkxN2EyMC45OSAyMC45OSAwIDAgMSAxLjg4Mi0uNDgyYzIuOTg4LS42NDMgNS4xODQtLjQ3IDYuNjE2LjUwNS43ODcuNTM2IDEuNjggMS41OSAxLjY4IDMuNTU0VjI1em0tNi0xNWgzLjI5M0ExNi4xMDkgMTYuMTA5IDAgMCAwIDIwIDVoLTMuMjg3Yy0uNDkgMS4xODgtMS4zODUgMy4xODgtMi43MTMgNXpNNyAyNXYtN2wzIDMuNUw3IDI1eiIgZmlsbD0iIzc5NTg5ZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+">
  </a>
</p>

## 📱 Screenshots

### Homepage

![home](https://github.com/Infected-by-js/shop-it/blob/readme/home.jpeg?raw=true)

### Cart page

![cart](https://github.com/Infected-by-js/shop-it/blob/readme/cart.jpeg?raw=true)

### Product page

![product](https://github.com/Infected-by-js/shop-it/blob/readme/product.jpeg?raw=true)

### Mobile Registration

<p align="center">
  <img src="https://github.com/Infected-by-js/shop-it/blob/readme/mobile-register.jpeg?raw=true" width="30%" height="20%" />
</p>

## 🚀 Technologies Used

### Front-end:

- [ReactJS](https://reactjs.org/)
- [React Router Dom v.6](https://github.com/remix-run/react-router)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Icons](https://react-icons.netlify.com/)
- [React Loading Skeleton](https://github.com/dvtng/react-loading-skeleton)
- [Axios](https://github.com/axios/axios)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [Styled Components](https://www.styled-components.com/)
- [Polished](https://polished.js.org/)
- [Framer Motion](https://github.com/framer/motion)

### Back-end:

- [Express JS](https://github.com/expressjs/express)
- [Express Validator](https://express-validator.github.io/docs/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://github.com/auth0/node-jsonwebtoken)

## Features

- User Sign In & User Sign Up
- Auto auth by JWT
- Save products to favourites(available only logged in users)
- Cart functionality (except the payment. which will be added soon)
- Products pagination
- Use of React hooks and custom hooks
- Responsive layout
- Loading skeletons
- Route animations and micro-interactions handled with Framer Motion
- Database seeder (products & users)

## How to use

### Preparation:

#### 1. Clone repo

```
$ git clone https://github.com/Infected-by-js/shop-it.git
$ cd shop-it
```

#### 2. Setup MongoDB & .env file

- Create database at [MongoDB](https://cloud.mongodb.com/)
- Create .env file that include:

```
PORT=<Your_port_number>
MONGO_URL=<your_mongodb_connection_uri>
PASS_SEC=<your_password_key_for_encoded>
JWT_SEC=<jwt_secret_key>
```

#### 3. Import Seed Database

```
$ yarn data:import
```

### Run:

```
$ cd server
$ yarn
$ yarn start

```

### 4. Run Frontend

```
# open new terminal
$ cd client
$ yarn
$ yarn start
```

Sample login credentials:

```
Username: shopit
Password: 1234
```

# 🎯 Plans

- [ ] Admin dashboard
  - [ ] Add/edit products
  - [ ] Edit user data
  - [ ] Acceptance or rejection of user purchases
- [ ] Customer dashboard
  - [ ] Request to edit product
  - [ ] Edit user credentials
- [ ] Login with Google
- [ ] Login as Anonymous
- [ ] Refresh token
- [ ] Dark theme
- [ ] Move the user's cart data to the server
- [ ] Move the user's favourite products data to the server
- [ ] Payments
- [ ] Information popups(add/remove products to/from cart)
