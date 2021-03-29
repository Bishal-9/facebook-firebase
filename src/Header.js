import React from 'react'
import './Header.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import EmojiFlagsRoundedIcon from '@material-ui/icons/EmojiFlagsRounded'
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded'
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded'
import SupervisedUserCircleRoundedIcon from '@material-ui/icons/SupervisedUserCircleRounded'
import {Avatar, IconButton} from "@material-ui/core";
import AddRoundedIcon from '@material-ui/icons/AddRounded'
import TextsmsRoundedIcon from '@material-ui/icons/TextsmsRounded'
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded'
import {useStateValue} from "./StateProvider";

function Header() {

    const [{user}, dispatch] = useStateValue()

    return <div className="header">
        <div className="header__left">
            <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" alt=""/>
            <div className="header__input">
                <SearchRoundedIcon />
                <input type="text" placeholder="Search Facebook" />
            </div>
        </div>

        <div className="header__center">
            <div className="header__option header__option--active">
                <HomeRoundedIcon fontSize="large" />
            </div>
            <div className="header__option">
                <EmojiFlagsRoundedIcon fontSize="large" />
            </div>
            <div className="header__option">
                <OndemandVideoRoundedIcon fontSize="large" />
            </div>
            <div className="header__option">
                <StorefrontRoundedIcon fontSize="large" />
            </div>
            <div className="header__option">
                <SupervisedUserCircleRoundedIcon fontSize="large" />
            </div>
        </div>

        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
            <IconButton>
                <AddRoundedIcon />
            </IconButton>
            <IconButton>
                <TextsmsRoundedIcon />
            </IconButton>
            <IconButton>
                <NotificationsRoundedIcon />
            </IconButton>
            <IconButton>
                <ArrowDropDownRoundedIcon />
            </IconButton>
        </div>
    </div>
}

export default Header