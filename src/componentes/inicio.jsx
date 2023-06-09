/*import React,{useEffect , useState } from 'react';
import axios  from "axios";

function Inicio() {
  const[data, setData] = useState ([{
    "platform": {
        "id": 0,
        "name": "",
        "slug": ""
    }}]);
  
    useEffect(() => {
      const fetchData = async () => {
        const url = 'https://api.rawg.io/api/games?key=7ede99316c4f4ffd927b072250e31d2f&dates=2019-09-01,2019-09-30&platforms=18,1,7';
        try {
          const result = await axios.get(url);
          console.log('hello word');
          console.log(result.data.results);
          setData(result.data.results);
        } catch (error) {
          console.error('Error:', error);
        }
      };
    
      fetchData();
    }, []);
    


  
  return (
   <div>
    {data.map((data) => (
      <li> 
          {data.name} - {data.slug}
      </li>
    ))}
   </div> 


  )
}

export default Inicio
*/