import { memo } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { category } from "../../data/category";

const ProductsFilter = ({search, handleSearch,handleCategory}) => {
  return (
    <main>
       <InputGroup className="mb-4">
        <Form.Control value={search} onChange={handleSearch} placeholder="Search product..."/>
        <InputGroup.Text>
      <Form.Select onChange={handleCategory}>
        <option value="all">All</option>
        {category.map((ct) => <option key={ct} value={ct}>{ct}</option>)}
      </Form.Select>
      </InputGroup.Text>
      </InputGroup>
    </main>
  )
}
 
ProductsFilter.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
  handleCategory: PropTypes.func,
}

const MemoProductsFilter = memo(ProductsFilter);
export default MemoProductsFilter;