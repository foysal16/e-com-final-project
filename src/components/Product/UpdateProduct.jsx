import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const UpdateProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const UpdateProduct = (p, key) => {
    setProduct({ ...product, [key]: p.target.value });
  };

  const UpdateNewProduct = () => {
    axios
      .put("https://fakestoreapi.com/products", {
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
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
          <h1>Update Product</h1>
        </Grid>

        <Grid item md={12}>
          <div>
            <p>Product Name: </p>
            <input
              value={product.title}
              onChange={(p) => UpdateProduct(p, "title")}
              placeholder="Product Name"
            ></input>
          </div>

          <div>
            <p>Product Description: </p>
            <input
              value={product.price}
              onChange={(p) => UpdateProduct(p, "price")}
              placeholder="Product Description"
            ></input>
          </div>

          <div>
            <p>Product Price: </p>
            <input
              value={product.description}
              onChange={(p) => UpdateProduct(p, "description")}
              placeholder="Product Price"
            ></input>
          </div>

          <div>
            <p>Product Category: </p>
            <input
              value={product.category}
              onChange={(p) => UpdateProduct(p, "category")}
              placeholder="Product Category"
            ></input>
          </div>

          <div>
            <p>Product image </p>
            <input
              value={product.image}
              onChange={(p) => UpdateProduct(p, "image")}
              placeholder="Product image"
            ></input>
          </div>

          <button onClick={UpdateNewProduct()}>Upadate Product</button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default UpdateProduct;
