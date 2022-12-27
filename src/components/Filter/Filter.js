import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchActions } from '../../store/search-slice';
import axios from 'axios';
import './Filter.css';


const SearchCountry = () => {

  const regions = [
    {
      name: "Filter by region",
      desc: "All",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ]

  const dispatch = useDispatch();

  const handleSubmit = () => {
   
  }
  const fetchRegion = async (region) => {
    await axios.get(`https://restcountries.com/v2/region/${region}`).then((res) => {
      console.log(res.data)
      dispatch(searchActions.getRegion(res.data))
    }).catch((err) =>{
      console.log('err', err.messaage)
    })
   
  }

  useEffect(() => {
    fetchRegion()
  }, [dispatch])


  return (
    <Container className='filter-container'>
      <Row >
        <form onSubmit={handleSubmit} className='input-container'>
          <input type="text"
            className='input-country'
            placeholder="search for a country ..."
            onChange={(e) => dispatch(searchActions.getCountry(e.target.value))}
          />
          <select
            onChange={(e) =>fetchRegion(e.target.value)}
            id='select'
            name='select'
            className='input-region'
            value={regions.name}
          >
            <option value="all">Filter by region</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </form>
      </Row>
    </Container>
  )
}


export default SearchCountry