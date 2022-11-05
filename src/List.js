import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({ name }) => {
    return (
        <Container fluid style={{marginTop: '8rem'}}>
        <Row className='list'>
            {name.map((item, index) => {
                return <Col md={3} key={index} className='list-item'>
                    <img className='image' src={item.flags.svg} alt="count" />
                    <h4>{item.name.common}</h4>
                    <p><span className='features'>Population:</span> {item.population}</p>
                    <p><span className='features'>Region:</span> {item.region}</p>
                    <p><span className='features'>Capital:</span> {item.capital}</p>
                  
                </Col>
            })}
        </Row>
        </Container>
    )
}

export default List