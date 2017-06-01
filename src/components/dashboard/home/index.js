import React from 'react';
import Header from '../../common/header';
import SideNav from '../../common/sideNav';
import Exams from '../exams';
import './home.css';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            link: [
                {url: 'Exams', item: [{link: '/Exam', name: 'Present'}]},
                {url: 'Profile', item: [{link: '/Ongoing', name: 'Present'}]}
            ],
            match: props.match,
            component: ""

        }
    }

    componentWillMount() {
        const { history } = this.props;
        this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
        this.handleLocationChange(history.location);
    }

    componentWillUnmount() {
        if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
    }

    handleLocationChange = (location) => {

        if(location.pathname.indexOf('Exam') != -1) {
            this.setState({component: <Exams/>});
        }

        if(location.pathname.indexOf('Ongoing') != -1) {

        }
    };

    render () {
        return(
            <div className="container-head">
                <div className="side-bar">
                    <SideNav match={this.state.match} links={this.state.link}/>
                </div>
                <div className="main_panel">
                    <Header/>
                    {this.state.component}
                </div>
            </div>
        )
    }
}

export default withRouter(connect(null, null)(Dashboard));



