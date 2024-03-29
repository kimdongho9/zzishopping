import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
const ProductDetail = () => {
    let {id} = useParams()
    const[product,setProduct]=useState(null);
    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/kimdongho9/zzishopping/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }
    useEffect(() => {
        getProductDetail();
    }, [])
    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img}/>
                </Col>
                <Col>
                    <div>{product?.title}</div>
                    <div>\{product?.price}</div>
                    <div>{product?.choice == true ? "Conscious choice":""}</div>
                    <DropdownButton id="dropdown-basic-button" title="사이즈선택">
                        <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;