import react from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import style from './Searchbar.module.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import PopUPmodel from '../Popupmodel/PopUPmodel';




function Searchbar() {
    const [filedata, setData] = useState([])
    const [click, setClick] = useState(null)
    const [show , setshow]= useState(false)
    
    

    useEffect(() => {
        axios.get('https://pixabay.com/api/?key=41966945-09f7acb6829811968eb4e6bf5&q=yellow+flowers&image_type=photo')
            .then((response) =>{
                console.log(response.data)
                setData(response.data.hits || [])
            })
            .catch((error) => console.log(error))
       
    }, [])

    const handelFilter = (value) => {
        const res = filedata.filter(f => f.tags.toLowerCase().includes(value))
        setData(res)
    }

    const handelClickImage =(image)=>{
        console.log('Image clicked:', image);
        setClick(image)
       setshow(true)
       
    }
    const close =()=>{
        setshow(false)
    }

   

    return (
        <>
            <div className={style.body}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className={style.icon} />|
                <div>
                    <input type='search' placeholder='Search' className={style.inputbox} onChange={e => handelFilter(e.target.value)} />
                </div>
                <div>
                    <Button variant="outline-light">Go</Button>
                </div>
            </div>
          
            <div className={style.card}>
                {filedata.map((d) => (
                    <div key={d.id}> 
                  
                        <Card style={{ width: '18rem' }} className={style.card}>
                           <Card.Img variant="top" onClick={() => handelClickImage(d)} src={d.largeImageURL} />
                            <Card.Body>
                                <Card.Title>{d.tags}</Card.Title>
                            </Card.Body>
                        </Card>  
                        
                    </div>
                ))}
            </div>
            {click && (
        <PopUPmodel
          image={click}
          onRequestClose={() => {
            setClick(null)
          }}
          onOpen={show}
        />
      )}
           
        </>
    )
}

export default Searchbar;           