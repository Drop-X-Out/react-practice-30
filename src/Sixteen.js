import React, { useState } from 'react'

export default function Sixteen({items,itemsPerPage}) {

    const [currentPage,setCurrentPage] = useState(1);
    
    const indexOfLastItem = currentPage*itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem,indexOfLastItem);

    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(items.length /itemsPerPage);i++){
        pageNumbers.push(i)
    }

  return (
    <div>
      <ul>
        {currentItems.map((item,index) => {
            return <li key={index}>{item}</li>
        })}
      </ul>
      {pageNumbers.map((number)=>(
        <li key={number} onClick={()=> setCurrentPage(number)}>
            {number}
        </li>
      ))}
    </div>
  )
}
