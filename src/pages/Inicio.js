import React, { useEffect, useState } from 'react'

const Inicio = () => {
const [list, setlist] = useState([])


useEffect(() => {
  const fetchData = async () => {
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=6d429c604f9c8aec354530298a83f754'
  
  }
})

  
  return (
    <div>Inicio</div>
  )
}

export default Inicio