
import React from 'react';
import { Link } from "react-router-dom";
import JerseyList from './JerseyList';



function NewArrivals() {  
  return (
    <>
    <div className='na1'>
      <h3 className='na3'>New Arrivals</h3>
      <Link to="/NewCollections" onClick={() => window.scrollTo(0,0)} className='na2'>View All</Link>
      
      <div>
      <JerseyList/>
      </div>
      
    </div>
    
    </>
    
  );
}

export default NewArrivals;