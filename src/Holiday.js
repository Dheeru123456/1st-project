import '../App.css';
import React from 'react';
// import { MDBIcon } from '@fortawesome/react-fontawesome';
// import "mdbreact/dist/css/mdb.css";
// import { FaBriefcase } from "react-icons/fa";

class Holiday extends React.Component {
    render() {

        return <div >
            <div className="holiday-img">
                <div className="d-flex justify-content-center holiday-content">
                    <i className="pi pi-briefcase"></i>
                    <p className="holiday-tour">Holiday Tour Packages</p>
                </div>
                <div class="d-flex flex-wrap justify-content-center parent-search">
                   <div class="searchboxouter">
                    <select class="textfield">
                        <option>Where you want to go?</option>
                        <option>Ahemdabad</option>
                        <option>Aligarh</option>
                        <option>Aurangabad</option>
                        <option>Bali</option>
                        <option>Bhuj</option>
                        <option>Cairo</option>
                        <option>Chamarajanagar</option>
                        <option>Chennai</option>
                        <option>Coorg</option>
                        <option>Dalhousie</option>
                        <option>Darjeeling</option>
                        <option>Dubai</option>
                        <option>Gangtok</option>
                        <option>Goa</option>
                        <option>Guwahati</option>
                        <option>Hamirpur</option>
                        <option>Haridwar</option>
                        <option>Hong Kong</option>
                        <option>HOSPET</option>
                        <option>Jaipur</option>
                        <option>Jammu</option>
                        <option>Jodhpur</option>
                        <option>Kaluk</option>
                        <option>Kathmandu</option>
                        <option>Kedarnath</option>
                        <option>Kodaikanal</option>
                        <option>Kuala Lumpur</option>
                        <option>Kutch</option>
                        <option>Ladakh</option>
                        <option>Lahul & Spiti</option>
                        <option>Leh</option>
                        <option>Maldives</option>
                        <option>Male</option>
                        <option>Manali</option>
                        <option>Munnar</option>
                        <option>New Delhi</option>
                        <option>North Sikkim</option>
                        <option>Ooty</option>
                        <option>Panna</option>
                        <option>Paris</option>
                        <option>Phuket</option>
                        <option>Port Blair</option>
                        <option>Pushkar </option>
                        <option>Ranthambhore</option>
                        <option>Shimla</option>
                        <option>Singapore</option>
                        <option>Srinagar</option>
                        <option>Thailand</option>
                        <option>Varanasi</option>
                        <option>Wayanad</option>
                        <option>Zurich</option>
                    </select>
                   </div>
                    <button class="search-btn">SEARCH</button>
                </div>
            </div>

            <div class="container text-center parent-tour">
                <div class="row">
                    <div class="col-12 group-tour">
                        <p>Group Tours</p>
                    </div>
                    <div class="col-12 group-tour">
                        <p>Budget Friendly</p>
                    </div>
                    <div class="col-12 group-tour">
                        <p>Honeymoon</p>
                    </div>
                    <div class="col-12 group-tour">
                        <p>Weekend Gateway</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Holiday;