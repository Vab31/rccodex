import React from 'react';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
// import InstagramEmbed from 'react-instagram-embed';
import Card from 'react-bootstrap/Card';
import './codeland.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';



export default function Bloglandingpage(){
 
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from backend when component mounts
    axios.get('http://localhost:5000/api/val')
      .then((response) => {
        // Update state with fetched data
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return(
   <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-5'>
   
    {data.map((o) => (
      <div>
    <Card className='mx-2 shadow-inner rounded'>
      <iframe  height={400} src={o.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         <Card.Body className='bg-purple-300'>
          <Card.Title > <b>{o.title}</b></Card.Title>
          <Card.Text>
            {o.description}
          </Card.Text>
        </Card.Body>
      </Card>
</div>
      ))}


    </div>
  )


}
