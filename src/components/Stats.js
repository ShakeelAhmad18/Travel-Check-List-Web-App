import React from 'react'

const Stats = ({ item }) => {
  const numItems = item.length;
  const packing = item.filter((item) => item.packed).length;
  const percentage = Math.round((packing / numItems) * 100);

  if (numItems === 0) {
    return (
      <p className='stats'>
        Start Adding Some Items to your Packing List 🚀
      </p>
    );
  }


  return (
    <div>
      <footer className='stats'>
        <em>
          {percentage === 100 ? 'You Got Everything! Ready To Go 🛫' :`
             You have ${numItems} items in the list and You already packed ${packing}(${percentage})%`
          }
        </em>
      </footer>

    </div>
  )
}

export default Stats
