import React from 'react'

const Items = ({ item ,onDeleteItem,ontoggle}) => {
    return (
        <div>
            <li>
                <input type="checkbox" value={item.packed} onChange={()=>ontoggle(item.id)} />
                <span style={item.packed ? {textDecoration:'line-through'}:{}}>{item.quantity} {item.description}</span>
                <button onClick={()=>onDeleteItem(item.id)}>❌</button>
            </li>
        </div>
    )
}

export default Items
