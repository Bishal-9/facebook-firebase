import React from 'react'
import './Sidebar.css'
import SidebarRow from "./SidebarRow"
import LocalHospitalRoundedIcon from '@material-ui/icons/LocalHospitalRounded'
import EmojiFlagsRoundedIcon from '@material-ui/icons/EmojiFlagsRounded'
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded'
import ChatRoundedIcon from '@material-ui/icons/ChatRounded'
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded'
import VideoLibraryRoundedIcon from '@material-ui/icons/VideoLibraryRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import {useStateValue} from "./StateProvider";

function Sidebar() {

    const [{user}, dispatch] = useStateValue()

    return <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={LocalHospitalRoundedIcon} title={'COVID-19 Information Center'} />
        <SidebarRow Icon={EmojiFlagsRoundedIcon} title={'Pages'} />
        <SidebarRow Icon={PeopleRoundedIcon} title={'Friends'} />
        <SidebarRow Icon={ChatRoundedIcon} title={'Messenger'} />
        <SidebarRow Icon={StorefrontRoundedIcon} title={'Marketplace'} />
        <SidebarRow Icon={VideoLibraryRoundedIcon} title={'Videos'} />
        <SidebarRow Icon={ExpandMoreRoundedIcon} title={'Marketplace'} />
    </div>
}

export default Sidebar