import React, { useState } from 'react'

const Courseentry = () => {
    var [title,setTitle]=useState("")
    var [duration,setDuration]=useState("")
    var [venue,setVenue]=useState("")
    var [description,setDescription]=useState("")
    var [date,setDate]=useState("")
  


    const Adddata =()=>{
        const data={"title":title,"duration":duration,"description":description,"date":date,"venue":venue}
        console.log(data)

    }
  return (
    <div><div> 

    <div className="container">
 <div className="row">
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">COURSE TITLE</label>
                <input onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter Name" type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">DURATION</label>
                <input onChange={(e)=>{setDuration(e.target.value)}} placeholder="Enter Name" type="text" className="form-control"/>
            </div>

            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">DESCRIPTION</label>
                <textarea onChange={(e)=>{setDescription(e.target.value)}} name="" id="" cols="30" rows="10" class="form-control"></textarea>    
            
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">VENUE</label>
                <input onChange={(e)=>{setVenue(e.target.value)}} placeholder="Enter RollNo" type="text" className="form-control"/>
            </div>

            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">DATE</label>
                <input onChange={(e)=>{setDate(e.target.value)}}  placeholder="Enter Addmission No" type="text" className="form-control"/>
            </div>
            
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={Adddata} className="btn btn-success">REGISTER</button>
            </div>

        </div>
    </div>
</div>
</div>




</div></div>
  )
}

export default Courseentry