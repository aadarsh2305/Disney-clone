import React from 'react'

function HeaderItem(props) {
  return (
    <div className='text-white'>
      <props.Icon />
      <h2>{props.name}</h2>
    </div>
  )
}

export default HeaderItem
