import React from 'react'
import idea from '../images/idea.png'
import logo from '../images/logo.jpg'



function Home() {
  return (

    
    <div className='container' >

      <div className='text-center  idea'>
        <img className='w-100'src={idea}/>
      </div>

      <div className='  maintext text-center'>

        <h1 className='title w-100'>Welcome to my page!</h1>        
        <h3 className='subtitle w-100'>professional designs</h3>   
            

      </div>
      <div>
      <div className="card">
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

      </div>


      

      
    </div>
    
  )
  
}

export default Home