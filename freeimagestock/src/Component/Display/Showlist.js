import react from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import style from './Showlist.module.css';
import Card from 'react-bootstrap/Card';


function Showlist() {
    const [data, setData] = useState([])
    

    useEffect(() => {
        axios.get('https://pixabay.com/api/?key=41966945-09f7acb6829811968eb4e6bf5&q=yellow+flowers&image_type=photo')
            .then((response) =>{
                console.log(response.data)
                setData(response.data.hits || []);
            })
            .catch((error) => console.log(error))
       
    }, [])

    return (
        <>
            <div className={style.card}>
            {data.map((d) => (
                    <div key={d.id}>
                        <Card style={{ width: '18rem' }} className={style.card}>
                            <Card.Img variant="top" src={d.largeImageURL} />
                            <Card.Body>
                                <Card.Title>{d.tags}</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Showlist;           