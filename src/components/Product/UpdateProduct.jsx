import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const history = useHistory();
  const { id } = useParams();

  const [product, setProductEdit] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const UpdateProduct = (p) => {
    setProductEdit({ ...product, [p.target.value]: p.target.value });
    console.log(p.target.value, "=======previous data");
  };

  /*const onSubmitsave = async (e) => {
    e.preventDefault();
    axios.put(`https://fakestoreapi.com/products/:id`).then((response) => {
      history.push("/");
    });
  };*/

  const UpdateNewProduct = async (p) => {
    p.preventDefault();
    axios
      .put(`https://fakestoreapi.com/products/${id}`, {
        title: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        category: product.category,
      })
      .then((response) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error, "============ERROR");
      });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async (p) => {
    const result = await axios.get(`https://fakestoreapi.com/products/${id}`);

    setProductEdit(result.data);

    console.log(result.data, "=======Data");
    // setUser(result.data.reverse());
    //setUser(result.data);
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

          <button onClick={(p) => UpdateNewProduct(p)}>Upadate Product</button>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default UpdateProduct;
