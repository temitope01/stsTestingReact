import React from 'react';
import Header from '../../common/header';
import SideNav from '../../common/sideNav';
import Exams from '../exams';
import Practice from '../exams/practice';
import ExamPanel from '../exams/examPanel';
import './home.css';
import {connect} from 'react-redux';
import * as examActions from '../../../actions/examActions';
import {bindActionCreators} from 'redux';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            link: [
                {url: 'Exams', item: [{link: '/Exam', name: 'Present'}]},
                {url: 'Profile', item: [{link: '/Ongoing', name: 'Present'}]}
            ],
            match: props.match,
            component: "",
            exams: []
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
        let that = this; // change this

        if(location.pathname.indexOf('Exam') !== -1) {
            this.props.actions.getExams().then(()=> {
                that.setState({component: <Exams scheduledExams={that.props.exams} match={that.props.match} />});
            }).catch(err => {

            });

        }

        if(location.pathname.indexOf('Ongoing') !== -1) {
            this.setState({component: <Practice/>});
        }

        if(location.pathname.indexOf('current') !== -1) {
            this.setState({component: <ExamPanel/>});
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

function mapDispatchToProps (dispatch)  {
    return {
        actions: bindActionCreators(examActions, dispatch)
    }
};

function mapStateToProps(state, ownProps) {
    return {
        exams: state.exams
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



