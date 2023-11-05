import React, { useEffect, useReducer } from 'react'

const itemsPerPage = 5 ;

const paginationReducer = (state,action) => {
  switch(action.type){
    case 'SET_CURRENT_PAGE':
    return {...state,currentPage:action.payload}
    case 'SET_TOTAL_ITEMS':
      return {...state,totalItem:action.payload}
      default:
        return state
  }
}

export default function TwentyThree() {

   const [paginationState,dispatch] = useReducer(paginationReducer,{
    currentPage:1,
    totalItem:0
   })

  const data = Array.from({length:25},(_,index)=> `Item ${index+1}`);

  useEffect(()=> {
    dispatch({type:'SET_TOTAL_ITEMS',payload:data.length})
  },[data]);

  const startIndex = (paginationState.currentPage-1)*itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedItems = data.slice(startIndex,endIndex);


  const handlePageClick = (newPage)=> {
    dispatch({type:'SET_CURRENT_PAGE',payload:newPage})
  }
  
  return (
    <div>
     <h1>Pagination Example</h1>
     <ul>
      {displayedItems.map((item,index)=> (
        <li key={index}>
          {item}
        </li>
))}
     </ul>
     <div>
      <button onClick={()=> handlePageClick(paginationState.currentPage -1)} disabled={paginationState.currentPage ===1}>Previous</button>
      <button onClick={()=> handlePageClick(paginationState.currentPage+1)} disabled={endIndex>=data.length}>Next</button>
     </div>
    </div>
  )
}
