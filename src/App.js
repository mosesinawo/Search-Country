import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import List from '../src/components/List';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchCountry from './components/Filter/Filter';
import { searchActions } from './store/search-slice';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const App = () => {

  const dispatch = useDispatch();
  const countryList = useSelector((state) => state.countryList.countryList)
  const filteredContent = useSelector((state) => state.countryList.filteredContent)
  console.log(filteredContent)
  console.log(countryList)

  const fetchData = async () => {
    await axios.get('https://restcountries.com/v2/all').then((res) =>{
      dispatch(searchActions.searchStore(res.data))
    }).catch((err) =>{
      console.log('err', err)
    })
  }
  useEffect(() => {
   fetchData()
}, [])


const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

return (
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/country/:name" element={<CountryDetails />} />
      </Routes>
    </Router>
  
  </div>
);
}

export default App;
