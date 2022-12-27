import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from './Preloader';
import SearchCountry from './Filter/Filter';
import Navbar from './Navbar/Navbar';
import Scroll from './scroll/Scroll';

const List = () => {
    const countryList = useSelector((state) => state.countryList.countryList)
    const filteredContent = useSelector((state) => state.countryList.filteredContent)

    let data = filteredContent.length === 0 ? countryList : filteredContent

    const [loader, setLoader] = useState(undefined);

    setTimeout(() => {
        setLoader(true)
    }, 2000)

    return (
        <>
          <Navbar/>
            {Object.keys(data).length === 0 ? (
                <div>
                    <Preloader />
                </div>
            )

                : (<Container fluid style={{ marginTop: '3rem' }}>
                    <Scroll/>
                    <Row>
                        <Col>
                            <SearchCountry />
                        </Col>
                    </Row>


                    <Row className='list'>
                        {data.map((item, index) => {
                            return (<Col md={3} xs={10} sm={4} lg={3} key={index} className='list-item'>
                                <Link to={`/country/${item.name}`} className='country-link' >
                                    <img className='image' src={item.flags.svg} alt="count" />
                                    <div className='list-text'>
                                    
                                        <h4>{item.name}</h4>
                                        <p><span className='features'>Population:</span> {item.population}</p>
                                        <p><span className='features'>Region:</span> {item.region}</p>
                                        <p><span className='features'>Capital:</span> {item.capital}</p>
                                    </div>
                                </Link>

                            </Col>)
                        })}
                    </Row>
                </Container>)
            }
        </>
    )
}

export default List