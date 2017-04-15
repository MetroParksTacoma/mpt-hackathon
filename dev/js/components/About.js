import React from 'react';

const About = () => (
<div className="contact-image">
  <div className="container-fluid ">
    <div className="row contact-box">
	    
	    <div className="col-sm-12 contact-message">
	    	<p>Have a comment, suggestion, or question? Please send them our way, we''d love you hear from you!</p>
	    	<hr className="hrGreen"/> 
	    </div>
    	
	    <div className="col-sm-12">
	        <input className="input" placeholder="Subject"></input>
	        <textarea className="textbox" placeholder="Please leave you comment here"></textarea>
	        <a className="btn btn-default btn-lg btn-comment" href="#" role="button">Send</a>
	    </div>
   	
   		{/*
        <div className="col-sm-12 contact-address well">
            <address><i className="fa fa-map-marker"></i>
                &nbsp;ParkPoints<br/>
                &nbsp;&nbsp;&nbsp; 111 Tacoma Ave<br/>
                &nbsp;&nbsp;&nbsp; Tacoma, WA 98409<br/>
            </address>
            <i className="fa fa-envelope-o"></i>&nbsp;Email: ParkPoints@metropark.com <br/>
            <i className="fa fa-phone"></i>&nbsp;Telephone: 253-253-2533
        </div>   
        */}
    </div>
  </div>
</div>

);

export default About;
