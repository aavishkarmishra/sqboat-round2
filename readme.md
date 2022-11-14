<hr/>
  <h1 align="center">Ecommerce</h1>
  <p align="center">
    <a href="https://nameless-ocean-66804.herokuapp.com/"><strong>Website : https://nameless-ocean-66804.herokuapp.com/</strong></a>
  </p>


<!-- ABOUT THE PROJECT -->

## About The Project

### Built With 💻

- [ReactJs](https://reactjs.org/)
- [Expressjs](https://expressjs.com/)
- [Mongodb](https://www.mongodb.com/)

## Getting Started ✅

To get a local copy up and running, follow these simple steps.

### Prerequisites 📖

These are the prerequisites required to run this application:

- Node
- npm
- mongo-uri

### Installation

1. Clone the repository form GitHub

```sh
  git clone https://github.com/Manthan933/Manthan.git
  cd Manthan
```

2. Create .env file in Manthan using format from [.env.example](./.env.example)

```sh
PORT = 5000
JWT_SECRET = mysecret
MONGO_URI = mongodb+srv//admin:squareboat@cluster0.ialp3yc.mongodb.net/ecommerce

```

3. To run the application in development server

```sh
  cd sqboat-round2/client
  npm install
  npm run start
```

In other terminal

```sh
  cd sqboat-round2
  npm install
  npm run start
```
For Docker 
```sh
docker build . -t ecommerce
docker run -p 5000:5000 ecommerce
```


## Author 👨‍💻

### [Aavishkar Mishra](https://github.com/aavishkarmishra)

