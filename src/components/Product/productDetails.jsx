import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const [ProductDetails, setProductDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((error) => {
        console.log(error, "============ERROR");
      });
  }, []);

  console.log(ProductDetails, "=========ProductDetails");

  const seeDetails = () => {};

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <img src={ProductDetails.image} style={{ width: "250px" }} alt="" />

        <p>{ProductDetails.title}</p>
        <p>{ProductDetails.description}</p>
        <p>Category: {ProductDetails.price}</p>
        <p>price: {ProductDetails.price}</p>
      </Container>
    </React.Fragment>
  );
};

export default ProductDetails;
