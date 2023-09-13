// import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { category } from "../../data/category";
import PropTypes from 'prop-types';
import { forwardRef, memo } from 'react';

const ProductForm = forwardRef(({product, handleProduct, handleSubmit,validated},ref) => {
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}> 
       <Row>
         <Form.Group as={Col}  controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control ref={ref} value={product.name} onChange={handleProduct}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill !</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="price">
          <Form.Label>Price (UZS)</Form.Label>
          <Form.Control value={product.price} onChange={handleProduct}
            required
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill !</Form.Control.Feedback>
        </Form.Group>
        </Row> 

        <Row className="mt-3">
        <Form.Group as={Col}  controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Select value={product.category} onChange={handleProduct} >
            {category.map((ct) => <option key={ct} value={ct}>{ct}</option>)}
          </Form.Select>
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Please fill !</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="quantify">
          <Form.Label>Quantify</Form.Label>
          <Form.Control value={product.quantify} onChange={handleProduct}   
            required
            type="number"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">Please fill !</Form.Control.Feedback>
        </Form.Group>
        </Row> 
        <div className="d-flex justify-content-between">
            <div></div>
            <Button className="mt-3 mb-3 " type="submit">Add product</Button>
        </div>
    </Form>
  );
}
);

ProductForm.displayName = "ProductForm";

ProductForm.propTypes = {
    product:PropTypes.object, 
    handleProduct:PropTypes.func,
    handleSubmit:PropTypes.func,
    validated:PropTypes.bool
};

const MemoProductForm = memo(ProductForm);
export default MemoProductForm;