import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const newProduct = (p, key) => {
    setProduct({ ...product, [key]: p.target.value });
  };

  const newProductAdd = () => {
    axios
      .post("https://fakestoreapi.com/products", {
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      })
      .then((response) => {
        console.log(response, "============res");
      })
      .catch((error) => {
        console.log(error, "============ERROR");
      });
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid>
          <h1>ADD PRODUCT</h1>
        </Grid>

        <Grid item md={12}>
          <div>
            <p>Product Name: </p>
            <input
              value={product.title}
              onChange={(p) => newProduct(p, "title")}
              placeholder="Product Name"
            ></input>
          </div>

          <div>
            <p>Product Description: </p>
            <input
              value={product.price}
              onChange={(p) => newProduct(p, "price")}
              placeholder="Product Description"
            ></input>
          </div>

          <div>
            <p>Product Price: </p>
            <input
              value={product.description}
              onChange={(p) => newProduct(p, "description")}
              placeholder="Product Price"
            ></input>
          </div>

          <div>
            <p>Product Category: </p>
            <input
              value={product.category}
              onChange={(p) => newProduct(p, "category")}
              placeholder="Product Category"
            ></input>
          </div>

          <div>
            <p>Product image </p>
            <input
              value={product.image}
              onChange={(p) => newProduct(p, "image")}
              placeholder="Product image"
            ></input>
          </div>

          <button onClick={newProductAdd()}>Add Product</button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AddProduct;
