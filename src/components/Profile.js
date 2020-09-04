import React from 'react';
import {Button, Card, CardBody} from 'reactstrap';
import {Link} from 'react-router-dom';
import profilepic from '../images/profilepic.png';
import portfolio from '../images/portfolio.png';
import education from '../images/education.png';
import documents from '../images/documents.png';
import flag from '../images/flag.png';
import refer from '../images/refer.jpeg';

export default function Profile() {
    return (
        <div className="">

          
            {/* header div */}
            <div className="header">
                <br/>
            <table style={{width:'100%'}}>
                <tr>
                    <th>
                        <Button  style={{float:'left'}}>
                            Share Profile
                            <span className="fa fa-share-alt fa-lg"></span>
                        </Button>
                     
                    </th>
                    <th>
                    <Button>
                            <span className="fa fa-cog fa-lg"></span>
                        </Button>
                    </th>
                </tr>
            </table>
           
            </div>

            

            {/* profile card */}
            <div className="container" style={{marginTop:'-50px'}}>
            <Card className="profilecard">
       
        <CardBody>
          <table style={{width:'100%',alignContent:'center'}}>
              <tr>
                 <th>
                     <p style={{backgroundColor:'#deeff5'}}>
                         <span><img src={flag}/></span>
                         India
                         </p>
                 </th>
                 <th style={{alignItems:'center'}}>
                     <img src={profilepic} alt="pic" style={{display:'block',margin:'auto',borderRadius:'50%',marginTop:'-100px'}}/>
                     <p style={{textAlign:'center'}}>Mayank Tomar</p>
                     <p style={{textAlign:'center'}}>+919628495218</p>
                 </th>
                 <th>
                     <a>Edit</a>
                 </th>
              </tr>

              <tr>
                  <th>
                      <p id="subtitle">Job title</p>
                      <p id="desc">Plumber</p>
                  </th>
                  <th>
                      <p id="subtitle">Job locaion</p>
                      <p id="desc">Sharjhah, UAE</p>
                  </th>
                  <th>
                      <p id="subtitle">Last salary</p>
                      <p id="desc">2200 AED</p>
                  </th>
              </tr>

              <tr>
                  <th>
                      <p id="subtitle">Visa status</p>
                      <p id="desc">H1B</p>
                  </th>
                  <th>
                      <p id="subtitle">Years of experience</p>
                      <p id="desc">4 years</p>
                  </th>
                  <th>
                      <p id="subtitle">Industry</p>
                      <p id="desc">Oil and gas</p>
                  </th>
              </tr>
          </table>
        </CardBody>
      </Card>
            </div>



            {/* Other cards */}
            <div class="container">
                <div className="row">
                    <div className="col-sm-6">
                    <Card className="cards">
                    <CardBody>
                        <span style={{marginRight:'5px'}}>
                            <img src={portfolio}/>
                        </span>
                        <span style={{fontWeight:'bold'}}>
                            Work experience
                        </span>
                        <span>
                            <Button style={{float:'right'}}>EDIT</Button>
                        </span>

                        <p id="desc">Plumber</p>
                        <p id="subtitle">2 years and 4 months</p>
                       
                        <p id="desc">Residential Plumber</p>
                        <p id="subtitle">AI Residency</p>

                        <Button>+ Add experience</Button>
                        
                    </CardBody>
                </Card>
                    </div>

                    <div className="col-sm-6">
                    <Card className="cards">
                    <CardBody>
                        <span style={{marginRight:'5px'}}>
                            <img src={education}/>
                        </span>
                        <span style={{fontWeight:'bold'}}>
                            Education
                        </span>
                        <span>
                            <Button style={{float:'right'}}>EDIT</Button>
                        </span>

                        <p id="subtitle">qualification</p>
                        <p id="desc">Graduate</p>
                        
                        <p id="subtitle">Certification</p>
                        <p id="desc">Plumbing</p>
                        
                        
                        
                    </CardBody>
                </Card>
                    </div>



                    <div className="col-sm-6">
                    <Card className="cards">
                    <CardBody>
                        <span style={{marginRight:'5px'}}>
                            <img src={documents}/>
                        </span>
                        <span style={{fontWeight:'bold'}}>
                            Documents
                        </span>
                        <span>
                            <Button style={{float:'right'}}>EDIT</Button>
                        </span>

                        <p id="desc">Passport</p>
                        <p id="subtitle">Yes</p>
                        
                        <p id="desc">Aadhar Card</p>
                        <Button>Upload</Button>
                        
                        
                        
                        
                    </CardBody>
                </Card>
                    </div>

                    
                    <div className="col-sm-6">
                   <img src={refer}/>
                    </div>
                </div>
 
            </div>

            {/* Navbar */}
            <div class="navbar">
                <a href="#Jobs">
                <span className="fa fa-briefcase fa-lg"></span>
                <p>Jobs</p>
                </a>
                <a href="#Help">
                <span className="fa fa-phone fa-lg"></span>
                <p>Help</p>
                </a>
                <a href="#Profile" class="active">
                <span className="fa fa-user fa-lg"></span>
                <p>Profile</p>
                </a>
            </div>
        </div>
    )
}
