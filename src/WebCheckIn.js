import '../App.css';
import React from 'react';
import img from '../assets/images/indigo.png';
import img1 from '../assets/images/virtusa.png';
import img2 from '../assets/images/spicejet.png';
import img3 from '../assets/images/goAir.png';
import img4 from '../assets/images/AirAsia.png';
import img5 from '../assets/images/trujet.png';
import img6 from '../assets/images/flyBig.png';
import img7 from '../assets/images/airIndia.png';

class WebCheckIn extends React.Component{
    render(){
        return<div className="container-fluid pt-5 webcheck-in">
            <div className ="container-fluid px-5">
                <div className='row'>
                <div className="col-12 web-chec">
                    <h3>Web Check-In</h3>
                </div>
                </div>

                <div className='row' id="crd-img">
                <div className="col-lg-3 col-sm-12 web-check">
                    <div className="inner-card">
                    <img className="indigo-img" src={img}></img>
                    <a href="https://www.goindigo.in/how-to-check-in.html" target="_blank" className="ind-spice">Indigo ( 6E )</a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 web-check">
                    <div className="inner-card">
                    <img className="indigo-img" src={img1}></img>
                    <a href="https://www.airvistara.com/in/en" target="_blank" className="ind-spice">Air Vistara ( UK )</a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 web-check">
                <div className="inner-card"> 
                    <img className="indigo-img" src={img2}></img>
                    <a href="https://book.spicejet.com/SearchWebCheckin.aspx" target="_blank" className="ind-spice">SpiceJet ( SG )</a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 web-check">
                <div className="inner-card">
                    <img className="indigo-img" src={img3}></img>
                    <a href="https://www.flygofirst.com/plan-my-trip/web-check-in" target="_blank" className="ind-spice">GOAir ( G8 )</a>
                    </div>
                </div>
                </div>

                <div className='row' id="card-img">
                <div className="col-lg-3 col-sm-12 web-check">
                <div className="inner-card">
                    <img className="indigo-img" src={img4}></img>
                    <a href="https://www.airindiaexpress.in/checkin-home" target="_blank" className="ind-spice">Air Asia (I5 )</a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 web-check">
                <div className="inner-card">
                    <img className="indigo-img" src={img5}></img>
                    <a href="https://www.trujet.com/#/WebCheckin" target="_blank" className="ind-spice">Truejet ( 2T )</a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 web-check">
                <div className="inner-card">
                    <img className="indigo-img" src={img6}></img>
                    <a href="https://flybig.paxlinks.com/web-checkin" target="_blank" className="ind-spice">FlyBig ( S9 )</a>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 web-check">
                <div className="inner-card">
                    <img className="indigo-img" src={img7}></img>
                    <a href="https://icheck.sita.aero/iCheckWebAI/" target="_blank" className="ind-spice">Air India ( AI )</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    }
}

export default WebCheckIn; 