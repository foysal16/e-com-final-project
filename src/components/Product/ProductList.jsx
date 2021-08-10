import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { useHistory } from "react-router-dom";

const ProductList = () => {
  const history = useHistory();

  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductList(response.data);
      })
      .catch((error) => {
        console.log(error, "============ERROR");
      });
  }, []);

  const seeDetails = (id) => {
    history.push(`/product-details/${id}`);
  };

  console.log(seeDetails, "============seeDetails");
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Grid>
          <h1 className="text-center text-uppercase">Prodcut List</h1>
          <Grid>
            {productList.map((product, index) => (
              <Grid key={index}>
                <img src={product.image} style={{ width: "250px" }} alt="" />

                <p>{product.title}</p>
                <Button
                  onClick={() => seeDetails(product.id)}
                  variant="contained"
                  color="primary"
                >
                  Prodcut Details
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default ProductList;
