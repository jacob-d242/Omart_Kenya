import React from 'react';
import './dashboard.css';
import {LineStyle, Timeline,TrendingUp} from '@material-ui/icons'
const dashboard = () => {
    return (
            < >
            <div className="container">
                <div className="Dashside">
                    <div className="sidebarWrapper">
                        <div className="sidebarMenu">
                            <h3 className="sideTittle">Dashboard</h3>
                                <ul className="sidebarList">
                                    <li className="sidebarListItem active" >
                                        <LineStyle className="sidebarIcon" /> Home
                                    </li>
                                    <li className="sidebarListItem">
                                        <Timeline className="sidebarIcon" />Analytics
                                    </li>
                                    <li className="sidebarListItem">
                                        <TrendingUp className="sidebarIcon" />Sales
                                    </li>
                                </ul>
                        </div>
                        <div className="sidebarMenu">
                            <h3 className="sideTittle">Manage</h3>
                            <ul className="sidebarList">
                                     <li className="sidebarListItem " >
                                        <LineStyle className="sidebarIcon" /> Users
                                    </li>
                                    <li className="sidebarListItem " >
                                        <LineStyle className="sidebarIcon" /> Products
                                    </li>
                                    <li className="sidebarListItem">
                                        <Timeline className="sidebarIcon" />Tranactions
                                    </li>
                                    <li className="sidebarListItem">
                                        <TrendingUp className="sidebarIcon" />Reports
                                    </li>
                                </ul>
                        </div>
                        <div className="sidebarMenu">
                            <h3 className="sideTittle">Quick Menu</h3>
                                <ul className="sidebarList">
                                    <li className="sidebarListItem " >
                                        <LineStyle className="sidebarIcon" /> Home
                                    </li>
                                    <li className="sidebarListItem">
                                        <Timeline className="sidebarIcon" />Analytics
                                    </li>
                                    <li className="sidebarListItem">
                                        <TrendingUp className="sidebarIcon" />Sales
                                    </li>
                                </ul>
                        </div>
                        
                        <div className="sidebarMenu">
                            <h3 className="sideTittle">Notifications</h3>
                                <ul className="sidebarList">
                                    <li className="sidebarListItem " >
                                        <LineStyle className="sidebarIcon" /> Messages
                                    </li>
                                    <li className="sidebarListItem">
                                        <TrendingUp className="sidebarIcon" />Mail
                                    </li>
                                </ul>
                        </div>
                       
                </div>
                </div>
            <div className="other">
                
            </div>
            </div>
            </>
    )
}

export default dashboard
