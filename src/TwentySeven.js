import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function TwentySeven() {
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            setData1(response.data)
        }
        )
        .catch(error=> {
            console.error('Error',error);
        });

        axios.get('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => {
            setData2(response.data)
        }
        )
        .catch(error=> {
            console.error('Error',error);
        });
        
    },[])

    console.log(data1,data2)
  return (
    <div>
      
    </div>
  )
}
