import React from 'react';
import '../Styles/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon/>
                </IconButton>
                <img src="https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png" alt=""/>

            </div>


            {/* middle */}
            <div className="header__middle">
                <SearchIcon/>
                <input placeholder="Search Mail" type="text"/>
                <ArrowDropDown className="header__inputCaret"/>
            </div>


            {/* right */}
            <div className="header__right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
