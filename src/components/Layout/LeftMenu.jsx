import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


import '../../styles/LeftMenu.Module.css'

import React from 'react'
import { Link } from "react-router-dom";

const LeftMenu = () => {

    const { collapseSidebar } = useProSidebar();
    return (
        
        <Sidebar style={{ height: "100vh" }}>
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center" }}
            >
              {" "}
              <h2>Admin</h2>
            </MenuItem>
  
            <MenuItem icon={<HomeOutlinedIcon />}>
              <Link to="/categories">Home</Link>
            </MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>
              <Link to="/categories">Menu</Link>
            </MenuItem>
            <MenuItem icon={<ContactsOutlinedIcon />}>My Favourite</MenuItem>
            <MenuItem icon={<ReceiptOutlinedIcon />}>
            <Link to="/random">Random Meals</Link>
              </MenuItem>
            

            <MenuItem icon={<CalendarTodayOutlinedIcon />} className="bottom-0">About Us</MenuItem>
          </Menu>
          
        </Sidebar>
        
    );
}

export default LeftMenu