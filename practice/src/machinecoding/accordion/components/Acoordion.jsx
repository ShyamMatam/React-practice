import React, { useState } from 'react'
import {FaChevronDown, FaChevronUp} from "react-icons/fa"

const Acoordion = ({items}) => {

    const [openIndex, setOpenIndex] = useState(null);
const handleToggle = (index) => {
//  if it is clicked item already open  ? close : else open the current index
    setOpenIndex(openIndex === index ? null : index )
}

  return !items || (items.length === 0) ? "No Items Available" : (
    <div className='accordian-container'>
      {items.map((item, index) => {
        return <>
        <button onClick={() => handleToggle(index)}>{item.title}{openIndex === index ? <FaChevronDown/> : <FaChevronUp/>}</button>
         {openIndex === index && <div>{item.content}</div>}
        </>
      })}
    </div>
  )
}

export default Acoordion
