<div style="text-align:center">
	<img alt="Shop-itMERN" width="50%" src="https://raw.githubusercontent.com/Infected-by-js/shop-it/82d5f3a52a41cc569e8b87750374fe534924d390/client/src/assets/images/logo.svg" />
<h1>MERN Art Store</h1>
</div>

<p style="text-align:center">
  <a href="#" target="_blank">
    <img alt="Demo on Heroku" src="#">
  </a>
</p>

## Screenshots

<div style="text-align:center">
<img  alt="Shop-itMERN" src="https://pandao.github.io/editor.md/examples/images/4.jpg" />
</div>
> Home page

<div style="display:flex;gap:20px; justify-content:center;">
<img alt="Shop-itMERN" width="40%" src="https://pandao.github.io/editor.md/examples/images/8.jpg" />
<img alt="Shop-itMERN" width="40%" src="https://pandao.github.io/editor.md/examples/images/6.jpg" />
</div>
> Auth page

---

## Features

- User Sign In & User Sign Up
- Use of React hooks and custom hooks
- Responsive layout
- Loading skeletons
- Route animations and micro-interactions (handled with Framer Motion)

## Technologies

#### Frontend:

- [ReactJS](https://reactjs.org/)
- [Axios](https://github.com/axios/axios)
- [Polished](https://polished.js.org/)
- [styled-components](https://www.styled-components.com/)
- [React-Icons](https://react-icons.netlify.com/)
- [react-loading-skeleton](https://github.com/dvtng/react-loading-skeleton)
  ...

#### Backend:

...

## How to use

#### 1. Clone repo

```
$ git clone https://github.com/Infected-by-js/shop-it.git
$ cd shop-it
```

#### 2. Setup MongoDB & .env file

- Create database at [https://cloud.mongodb.com](https://cloud.mongodb.com)
- Create .env file that include:

```
PORT=<Your_port_number>
MONGO_URL=<your_mongodb_connection_uri>
PASS_SEC=<your_password_key_for_encoded>
JWT_SEC=<jwt_secret_key>
```

### 3. Run Backend

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

##:tw-270f: Implementation plan

- [ ] Login with Google
- [ ] Login by Anonymous
- [ ] Paypal payment
