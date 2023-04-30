import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { IoIosBuild } from "react-icons/io";
 
 
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;
 
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarTitle = styled.div`
    text-decoration: none;
    color: white;
    margin-top: 10px;
`
 
const SidebarWrap = styled.div`
  width: 100%;
`;
 
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const [userRole, setUserRole] = useState(localStorage.getItem('user') || 'guest')
  console.log(userRole)
  

  function updateSidebarData() {
    const role = localStorage.getItem('user') || 'guest';
    if (role !== "guest") {
      let parsedUser = JSON.parse(role)
      setUserRole(parsedUser['Role'])
    }
  }


  
  useEffect(() => {
    const role = localStorage.getItem('user') || 'guest';
    if (role !== "guest") {
      let parsedUser = JSON.parse(role)
      setUserRole(parsedUser['Role'])
    } else {
      setUserRole(role)
    }
  }, [localStorage.getItem('user')])
  

   
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              {/* <AiIcons.AiFillHome onClick={showSidebar} /> */}
              {/* <Link to="/" style={{ textDecoration: 'none', color:'white' }}> */}
                <SidebarTitle>
                     Maintance
                </SidebarTitle>
                {/* </Link> */}
                {/* <SidebarTitle>Home</SidebarTitle> */}
            </NavIcon>
            {SidebarData.map((item, index) => {
                console.log(item.role);
                if (item.role.includes(userRole)) {
                    return <SubMenu item={item} key={index} />;
                }
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};
 
export default Sidebar;