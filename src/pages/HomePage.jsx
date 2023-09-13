import {useCallback, useMemo, useRef, useState} from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { v4 } from  'uuid';
import { toast } from 'react-toastify';
import ProductForm from "../components/form/ProductForm";
import ProductsTable from "../components/products/ProductsTable";
import ProductsFilter from "../components/filter/ProductsFilter";
import { category } from '../data/category';

const HomePage = () => {
  const productsJson = localStorage.getItem('products');
  const [validated, setValidated] = useState(false);
  const [products, setProducts] = useState(JSON.parse(productsJson) || []);
  const [product, setProduct] = useState({
    name:'',
    price:'',
    quantify:'',
    category:'fruit',
  });
  const [search, SetSearch] = useState("");
  const nameRef = useRef();


  const handleProduct = useCallback((e) => {
      setProduct({...product,[e.target.id]:e.target.value});
    },[product]);

  const handleSubmit = useCallback((event) => {
    const form = event.currentTarget;
    setValidated(true);
    event.preventDefault();
    // event.stopPropagation();
    
    if (form.checkValidity()) {
          toast.success("Nice Job");
        let newProducts = [...products,{...product,id: v4() }]
        setProducts(newProducts);
        localStorage.setItem("products", JSON.stringify(newProducts));
        nameRef.current.focus();
        setValidated(false);
        setProduct({
          name:'',
          price:'',
          quantify:'',
          category:'fruit',
        })
    }
  },[product,products]);

  const handleSearch = useCallback((e) => {
    SetSearch(e.target.value.trim().toLowerCase())
  },[]);

    // const[filterTextvalue,updateFilterText] = useState('All');

    // const filteredProductList = products.filter((category)=>{
    //   if(filterTextvalue  === 'technologies'){
    //     return products === 'technologies';
    //   }else if(filterTextvalue === 'fruit'){
    //     return category.fruit === true;
    //   }else{
    //     return category; 
    //   }
    // })

    const handleCategory = (e) => {
      console.log(e.target.value);
      // onFilterValueSelected(e.target.value)
    }
    // const onFilterValueSelected = (filterValue) => {
    //   updateFilterText(filterValue);
    // }

  const results = useMemo(()=> products.filter(el => el.name.toLowerCase().includes(search)),[products, search]);

  return (
    <Container className="container">
      <Row>
        <Col>
        <ProductForm ref={nameRef} product={product} handleSubmit={handleSubmit} handleProduct={handleProduct} validated={validated}/>
        </Col>
      </Row>
      <Row>
        <Col>
        <ProductsFilter  handleCategory={handleCategory} search={search} handleSearch={handleSearch} category={category}/>
        <ProductsTable products={results}/>
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage