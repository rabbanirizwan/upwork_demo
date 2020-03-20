import React from 'react';
import '../css/Navbar.css';
import {
    HomeOutlined,
    InstagramFilled,
    FacebookFilled,
    TwitterSquareFilled,
    CodeSandboxCircleFilled,
    UserOutlined
    
  } from '@ant-design/icons';
class Navbar extends React.Component{
    render(){
        return(
            <nav className="navP">
               <div className="navA">
               <HomeOutlined className="three"/>
                <p>Who are we</p>
                <p>get involved</p>
                <p>news</p>
                <p>resources</p>
                <p>contact</p>
                <p>order item</p>
               </div>
               <div>
               <InstagramFilled className="one" />
               <TwitterSquareFilled className="one"/>
               <FacebookFilled className="one" />
               <CodeSandboxCircleFilled className="one" />
               </div>
               <div>
               <UserOutlined className="two" />
               </div>
            </nav>
        )
    }
}
export default Navbar;