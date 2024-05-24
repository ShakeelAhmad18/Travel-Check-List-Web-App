import React from 'react'
import Items from './Items';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },

];

const Checklist = () => {
  return (
    <div className='list'>
        <ul>
            {initialItems.map((item)=><Items item={item}/>)}
        </ul>
    </div>
  )
}

export default Checklist
