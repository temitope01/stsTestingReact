import React from 'react';
import Header from '../../common/header';
import SideNav from '../../common/sideNav';
import './home.css';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div className="container-head">
                <div className="side-bar">
                    <SideNav/>
                </div>
                <div className="main_panel">
                    <Header/>
                </div>
            </div>

        )
    }

}

export default Dashboard;