import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Add = () => {
  const [product, setProduct] = useState({
    ProductID: '',    
    ProductName: '',  
    
    Productprice: '',
    ProductRating: ''
  });
  
  const [errors, setErrors] = useState({});

  const fetchValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    
    if (!product.ProductID) {
      newErrors.ProductID = 'Product ID is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(product.ProductID)) {
      newErrors.ProductID = 'Product ID must contain only numbers and alphabets';
    }

    
    if (!product.ProductName) {
      newErrors.ProductName = 'Product Name is required';
    } else if (!/^[a-zA-Z\s]+$/.test(product.ProductName)) {
      newErrors.ProductName = 'Product Name must contain only alphabetic characters';
    }

   
    if (!product.Productprice || isNaN(product.Productprice) || product.Productprice <= 0) {
      newErrors.Productprice = 'Price must be a positive number';
    }

    
    if (!product.ProductRating || isNaN(product.ProductRating) || product.ProductRating < 0 || product.ProductRating > 5) {
      newErrors.ProductRating = 'Rate must be between 0 and 5';
    }

    return newErrors;
  };

  const sendData = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Product details:', product); 
      setErrors({}); 
    }
  };

  return (
    <div>
      <h2 style={{ paddingTop: "50px" }}>New Product</h2>
      <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Product ID"
          variant="outlined"
          name="ProductID"
          onChange={fetchValue}
          error={!!errors.ProductID}
          helperText={errors.ProductID}
        /><br />

        <TextField
          id="outlined-basic"
          label="Product Name"
          variant="outlined"
          name="ProductName"
          onChange={fetchValue}
          error={!!errors.ProductName}
          helperText={errors.ProductName}
        /><br />

        

        <TextField
          id="filled-basic"
          label="Product Price"
          variant="outlined"
          name="Productprice"
          onChange={fetchValue}
          error={!!errors.Productprice}
          helperText={errors.Productprice}
        /><br />

        <TextField
          id="standard-basic"
          label="Product Rating"
          variant="outlined"
          name="ProductRate"
          onChange={fetchValue}
          error={!!errors.ProductRating}
          helperText={errors.ProductRating}
        /><br />

        <Button
          style={{ backgroundColor: "#333333", color: "white" }}
          variant="contained"
          onClick={sendData}
        >
          Add
        </Button>
      </Box>
    </div>
  );
};

export default Add;
