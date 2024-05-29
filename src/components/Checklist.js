import React, { useState } from 'react'
import Items from './Items';

/*const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },

];*/

const Checklist = ({items, onDeleteItem,ontoggle,onClearitem}) => {
  const [sortBy,setSortBy]=useState('input');
  let sortItem;
  if(sortBy=== 'input') {
    sortItem=items
  }
  
  if(sortBy === 'description')
    {
      sortItem=items.slice().sort((a,b)=>a.description.localeCompare(b.description))
    }

  if(sortBy === 'packed')
    {
      sortItem=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
    }

  return (
    <div className='list'>
        <ul>
            {sortItem.map((item)=><Items item={item} key={item.id} onDeleteItem={onDeleteItem} ontoggle={ontoggle}/>)}
        </ul>
        <div className='actions'>
           <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
             <option value="input">Sort By Input Order</option>
             <option value="description">Sort By Description Status</option>
             <option value="packed">Sort By Packed  Status</option>
           </select>
           <button onClick={onClearitem}>Clear list</button>
        </div>
    </div>
  )
}

export default Checklist
