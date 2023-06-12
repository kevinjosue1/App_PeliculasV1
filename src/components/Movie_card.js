import { Button, Modal,  } from 'react-bootstrap';
import React, { useState } from 'react'
const API_URL = "https://image.tmdb.org/t/p/w500";




const Movie_card = ({title, poster_path, vote_average, release_date, overview}) => {
  const [show, setShow]= useState(false);

  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

    return (
    <div className='card text-center bg-light mb-3'>
        <div className='card-body'>
        <img className='card-img-top'  alt='' src={API_URL+ poster_path} />
        </div>
        <div className='card-body'>
        <button type='button' className='btn btn-secondary' onClick={handleShow}>Ver Más</button>
        </div>
        <Modal show = {show} onHide={handleClose}>
            <Modal.Body closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Body>
            <Modal.Body>
            <img className='card-img-top' alt='' src={API_URL+ poster_path} />
            <h3>{title}</h3>
            <h4>Calificación:{vote_average}</h4>
            <h5>Fecha de estreno: {release_date}</h5>
            <br/>
            <h6>overview</h6>
            <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Volver</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Movie_card