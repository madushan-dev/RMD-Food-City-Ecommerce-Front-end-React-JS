import React, { useState, useEffect } from 'react';
import Container from "../../other/Container";
import SocialIcons from "../../other/SocialIcons";
import LoggedUser from "../../other/LoggedUser";
import { Select } from "antd";
import Link from "next/link";



export default function TopNavOne({ containerFluid }) {
  const [loggeduser, setloggeduser] = useState(0);
  const [loggedusername, setloggedusername] = useState(0);

  useEffect(() => {
    setloggeduser( localStorage.getItem('cus_id'));
    setloggedusername( localStorage.getItem('cus_name'));
  });


  return (
    <div className="top-nav-one">
      <Container fluid={containerFluid}>
        <div className="top-nav-one-wrapper">
          <div className="top-nav-one-left">
            <ul>
              <li>
                <i className="fas fa-envelope" />
                info@rmdfoocity@gmail.com
              </li>
              <li>
                <i className="fas fa-phone-alt" />
                +94 71 557 2723
              </li>
            </ul>
          </div>
          <div className="top-nav-one-right">
            <div className="top-nav-one-right__item">
            
            </div>

            <div className="top-nav-one-right__item">
              {

                  loggedusername ? <LoggedUser username={loggedusername}/> :     

                  <Link href={process.env.PUBLIC_URL + "/auth/login"}>
                  <a>
                    <i className="fas fa-user" />
                    Login
                  </a>
                </Link>
              }
       
        
            
            
         
            


       
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
