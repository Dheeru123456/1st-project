import '../App.css';
import React from 'react';
import ForgotPassword from "./ForgotPassword";

import { Route, Routes , Link } from "react-router-dom";

class CustomerLogIn extends React.Component{

    render()
    {
        return(
        <>
        <div className='parent-customer'>
            <div className='customer-img'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-6">
                            <h1 className="travel-head">Traveller Login</h1>
                        </div>
                        <div className="col-6 txt d-flex justify-content-end">
                           <div className='home-travel d-flex'>
                            <div>
                                <ul className='list-items'>
                                    <li><a href="#">Home</a></li>
                                    </ul>
                                    </div>
                                    <div>
                                        <ul>
                                    <li>Traveller Login</li>
                                    </ul>
                                    </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="traveller-log container">
                <div>
                    <p><b>Traveller Login</b></p>
                    <p>Enter the email of your account to reset password. Then you will receive a link to email to reset the password.If you have any issue about reset password <a href="#">contact us</a></p>
                </div>
                <div>
                    <div className="user-div">
                        <label>
                        Your User ID
                        </label>
                    </div>
                    <div className="input-box">
                        <i className="pi pi-mobile"></i>
                        <input type="text" id="user-id" placeholder="e.g. 9876543210"></input>
                    </div>
                    <div className="user-div">
                        <label>
                        Your Password
                        </label>
                    </div>
                    <div className="input-box">
                    <i className="pi pi-lock"></i>
                        <input type="password" id="user-pas" placeholder="my secret code"></input>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <div>
                    <button type="button" class="btn btn-primary log-btn">Login</button>
                    </div>
                    <div className="log-for">
                        <Link to="/ForgotPassword">Forget Password?</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>


</>

)

        
    }
}

export default CustomerLogIn;