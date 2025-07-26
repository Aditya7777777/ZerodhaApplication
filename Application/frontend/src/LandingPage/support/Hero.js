import React from 'react';

function Hero() {
    return ( 
    <section className=" container-fluid p-5 pt-0" id = "supportHero">
      <div className="p-5 mt-5  ps-0 pb-2" id="supportWrapper">
        <h3 className="fs-2 ">Support Portal</h3>
        <a href='' style={{color:"white"}}>Track Tickets</a>
      </div>

      <div className="row  mt-2 ps-4 ms-5">
        <div className="col-6">
          <h1 className='fs-3'>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder='Eg:how do i activate F&O, why is my order getting rejected..' className="p-2 mt-3 mb-3" style={{display:'block', width:"100%", height:"4rem", borderRadius:"0.5rem" }}/>
          <a href="" className="ms-2"style={{color:"white"}}>Track account opening</a>
          <a href="" className="ms-2"style={{color:"white"}}>Track Segment activation</a>
          <a href="" className="ms-2"style={{color:"white"}}>Intraday</a>
          <br/>
          <a href="" className="ms-2"style={{color:"white"}}>margins</a>
          <a href="" className="ms-2"style={{color:"white"}}>Kite user manual</a>
        </div>

        <div className="col-6 p-5 mt-2 mb-2 pt-0 ps-5">
          <h1 className='fs-3'>Featured</h1>
          <a href='' style={{color:"white"}}>1.Current Takeovers and Delisting-January 2024</a>
          <br/>
          <br></br>
          <a href='' style={{color:"white"}}>2.Latest Intradayleverages - MIS & CO</a>
          
        </div>
          
      </div>
    </section>
     );
}

export default Hero;