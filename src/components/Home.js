import React, { Component } from 'react'
import { Link } from 'react-router-dom';



export class Home extends Component {
    render(){
        return(
            <div>
  {/* header
   ================================================== */}
  <header>
    <div className="row">
      <div className="logo">
        <a href="index.html">NGO eXchange</a>
      </div>
      <div className="social-links">
        <ul>
          <li><a href target="_blank"><i className="fa fa-facebook" /></a></li>
          <li><a href="https://twitter.com/home" target="_blank"><i className="fa fa-twitter" /></a></li>
          <li><a href="https://www.linkedin.com/in/raj-valand-477658139/" target="_blank"><i className="fa fa-linkedin" /></a></li>
          <li><a href="mailto:ngo.blockchain@gmail.com" target="_blank"><i className="fa fa-mail-reply" /></a></li>
        </ul>
      </div>
    </div>
  </header> {/* /header */}
  {/* home
   ================================================== */}
  <section id="home" className="home-particles">
  <canvas className="pg-canvas" style={{display: 'block'}} width={1440} height={800} />

    <div className="shadow-overlay" />
    <div className="content-wrap-table">
      <div className="main-content-tablecell">
        <div className="row">
          <div className="col-twelve">
            <br /> <br /> <br /> <br /> <br /> <br />
            &lt;<br /><br/><br /><br /><br /><br /><br /><br /> <h1 align="right">Block-Chain for NGO </h1><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
           </div>
           <div className="col-thirteen"> <h1 align="right">
              <Link to="/login"> LOGIN </Link>
            </h1>
            <div className="bottom-text">
              {/* <h1>Click <a href="https://meet.google.com/khi-uhuf-pqm" target="_blank">here</a> to join our live Q/A sesstion with the Founder, Cameron Nelson.</h1> ––>

			  			</div>

			   	</div> <!-- /twelve */}
              <div className="scroll-icon">
                <p className="scroll-text">Scroll For More Info</p>
                <a href="#info" className="smoothscroll">
                  <div className="mouse" />
                </a>
                <div className="end-top" />
              </div> {/* /scroll-icon */}
            </div> {/* /row */}
          </div> {/* /main-content */}
        </div> {/* /content-wrap */}
      </div></div></section> {/* /home */}
  
        )
    }
}
export default Home