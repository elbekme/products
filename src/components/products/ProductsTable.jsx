import { Table } from "react-bootstrap";
import PropTypes from 'prop-types';
import { memo } from "react";

const ProductsTable = ({products}) => {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
        {products.length ? (products.map((product,i) => (
                  <tr key={product.id}>
                    <td>{i + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.category}</td>
                    <td>{product.quantify}</td>
                </tr>
            )))
        : (
            <tr>
                <td colSpan={5} className="text-center">No products</td>
            </tr>
        )
        }
    </tbody>
  </Table>
    );
}

ProductsTable.propTypes = {
    products: PropTypes.array,
}

const MemoProductsTable = memo(ProductsTable);
export default MemoProductsTable;