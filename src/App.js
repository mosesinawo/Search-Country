import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
// import Countries from './Countries';
import List from './List';
import Scroll from './Scroll';
import SearchCountry from './searchCountry';
// import Input from './Input';

const App = () => {
const [name, setName] = useState([]);
const [country, setCountry] = useState([])


  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        setName(data)
        console.log(data)  
      })
  }, [])


  const getCountry = (e) =>{
    // console.log(e.target.value)
    let keyword = e.target.value
    let filtered = name.filter((item) =>{
      return item.name.common.indexOf(keyword) > -1
    });
    setCountry(filtered)

    console.log(filtered)
  }

  return (
    <div>
      <SearchCountry keyword={getCountry}/>
     
        <List name={country.length === 0 ? name : country} />
      
    </div>
  );
}

export default App;
