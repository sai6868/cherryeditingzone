import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function Contact() {
  return (
    <div className='container'>
      <h1 className='text-center'>contact</h1>  


      <ul className='nav'>

        <li className='nav-item'>
          <Link className='nav-link active' to='gmail'>Gmail</Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link active' to='whatsapp'>Whatsapp</Link>
        </li>
        </ul>

        <Outlet/>

    </div>
  )
}

export default Contact