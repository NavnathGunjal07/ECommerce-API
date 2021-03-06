
# ECommerce API

Simple ECommerce API for creating,updating,deleting and Listing all products.
## Authors

- [Navnath Gunjal](https://github.com/NavnathGunjal07)


## Tools & Technologies Used

- Node js
- Mongo DB
- Postman
## Installation And Usage

To run this project run

```bash
  git clone https://github.com/NavnathGunjal07/ECommerce-API.git
```
Go to directory
```bash
  cd E-Commerce API
```
Install all dependecies
```bash
 npm install
```
Run Project
```bash
  npm start
```

Now you can access api's on localhost/postman

## API Reference

#### Get all products

```http
  GET /api/v1/products
```

#### Create Product

```http
  POST /api/v1/products/create
```

#### Delete Product

```http
  DELETE /api/v1/products/:id
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :--------------------------------     |
| `id`      | `Number` | **Required**. Id of product to delete |


#### Update Quantity

```http
  PUT /api/products/:id/update_quantity/?number
```

| Parameter | Type     | Description                                |
| :-------- | :------- | :--------------------------------          |
| `id`      | `Number` | **Required**. Id of product to delete      |
| `number`  | `Number` | **Required**. increment quantity by number |

## Folder Structure

|-- E-Commerce API  
   &nbsp; &nbsp; &nbsp; &nbsp; |-- index.js  
   &nbsp; &nbsp; &nbsp; &nbsp;  |-- package-lock.json  
    &nbsp; &nbsp; &nbsp; &nbsp; |-- package.json  
    &nbsp; &nbsp; &nbsp; &nbsp; |-- config  
   &nbsp; &nbsp; &nbsp; &nbsp;  |  &nbsp; &nbsp; &nbsp; &nbsp;  |-- mongoose.js  
    &nbsp; &nbsp; &nbsp; &nbsp; |-- controllers  
    &nbsp; &nbsp; &nbsp; &nbsp; |  &nbsp; &nbsp; &nbsp; &nbsp;  |-- api  
   &nbsp; &nbsp; &nbsp; &nbsp;  |  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      |-- v1  
   &nbsp; &nbsp; &nbsp; &nbsp;  |      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      |-- products_api.js  
    &nbsp; &nbsp; &nbsp; &nbsp; |-- models  
   &nbsp; &nbsp; &nbsp; &nbsp;  |   &nbsp; &nbsp; &nbsp; &nbsp; |-- products.js  
   &nbsp; &nbsp; &nbsp; &nbsp;  |-- routes  
     &nbsp; &nbsp; &nbsp; &nbsp;    &nbsp; &nbsp; &nbsp; &nbsp; |-- index.js  
     &nbsp; &nbsp; &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp;  |-- api  
      &nbsp; &nbsp; &nbsp; &nbsp;    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    |-- index.js  
     &nbsp; &nbsp; &nbsp; &nbsp;      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   |-- v1  
      &nbsp; &nbsp; &nbsp; &nbsp;          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  |-- index.js  
      &nbsp; &nbsp; &nbsp; &nbsp;        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;    |-- products.js  

