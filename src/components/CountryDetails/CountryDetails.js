import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { detailActions } from '../../store/details-slice'
import Details from '../Details';
import './CountryDetails.css'

const CountryDetails = () => {

 const [detail, setDetail] = useState({})
 //const detail = useSelector((state) => state.CountryDetails.detailStore)
  const { name } = useParams();
  console.log(name)
  const dispatch = useDispatch();

  const fetchDetails = async () => {
    await axios.get(`https://restcountries.com/v2/name/${name}`).then((res) => {

      setDetail(res.data[0])
      //dispatch(detailActions.getDetails(res.data[0]))
    });
  }

  useEffect(() => {
    fetchDetails()
  }, [name])

  console.log(detail.name)
  const { population, flag, region, callingCode, nativeName,
  subregion, capital, topLevelDomain, currencies, languages, borders} = detail

  return (
    <>
      <Container  style={{ marginTop: '5rem' }}>
      {Object.keys(detail).length === 0 ?
      (<div>...Loading</div>) : (
        <>
        <Link to='/' className='prev-btn'><p className='back-btn'> <i className="fas fa-arrow-left"></i> Back</p></Link>
        <Row className='details-container-1'>
          <Col className='image-container' >
            <img src={flag} alt='detail' className='detail-image' />
          </Col>

          <Col className='text-container'>
            <div className='details-container'>
              <h3 className='details-header'>{name}</h3>
              <div className='details-list'>
                <ul className='left-list'>
                  <li><span className='detail-item'>Native Name: </span> {nativeName}</li>
                  <li><span className='detail-item'>Population:  </span> {population}</li>
                  <li><span className='detail-item'>Region: </span> {region}</li>
                  <li><span className='detail-item'>Sub Region: </span> {subregion}</li>
                  <li><span className='detail-item'>Capital</span> {capital}</li>
                </ul>
                <ul className='right-list'>
                  <li><span className='detail-item'>Top Level Domain: </span> {topLevelDomain}</li>
                  <li><span className='detail-item'>Currency:  </span> {}</li>
                  <li><span className='detail-item'>Languages: </span> {}</li>
                </ul>
              </div>

              <div className='border'>
<ul>
  {/* {borders.madiv(item =>  <li>{item}</li>)} */}
</ul>
              </div>

            </div>
          </Col>
        </Row>
        </>
      )}

      </Container>

    </>
  )
}

export default CountryDetails