import React from 'react'

const Stats = ({items}) => {
  if(!items.length) 
  return (
  <p className='stats'>
    <em>Start adding some item to your packing list😒😒</em>
  </p>
  ); 

  const NumItem = items.length;
  const NumPacked = items.filter((item) => item.packed).length;
  const persanteg = Math.round((NumPacked / NumItem)*100)
  return (
   <footer className='stats'>
    <em>
      {persanteg === 100 ? "You got everything ! Ready to go ✈️✈️" 
      :
       `💼 you have ${NumItem} item on your list, and you already packed ${NumPacked} (${persanteg}%)`}
        </em>


   </footer>
  )
}

export default Stats
