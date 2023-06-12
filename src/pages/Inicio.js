import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie_card from '../components/Movie_card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
const [list, setlist] = useState([]);





useEffect(() => {
const fetchData = async () => {
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=1bbc4fa27e742f1ed7ce2b28c9c3e74d'
try{
  const result = await axios.get(url);
  console.log('araund the word');
  console.log(result.data.results);
  setlist(result.data.results);
} catch(error){
  console.error('error:', error);
}
};

fetchData();
}, []);

  
return (
  <div className='container'>
    <div className='grid'>
    {list.map ((listDate ) => 
    // eslint-disable-next-line react/jsx-pascal-case
    <Movie_card key={listDate.id} {...listDate}/>)}
    </div>
     </div>
);
};

export default Inicio