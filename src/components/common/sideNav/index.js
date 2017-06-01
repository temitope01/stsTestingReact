import React from 'react';
import './sideNav.css';
import Links from '../link';

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {links: props.links, url: 'dashboard', match: props.match}
    }

    render() {
        return (
            <div className="side-bar ">
                <div>
                    <h3>Candidate Starks</h3>
                </div>
                <div>
                    <span>
                        Welcome user
                    </span>
                </div>
                <div>
                    <ul>
                        {
                            this.state.links.map((link, index)=> {
                                return  <li key={index}>
                                        <Links name={link.url} target="#"/>
                                        <ul>
                                        {
                                            link.item.map((item, ind)=> {
                                                return  <li key={ind}>
                                                            <Links name={item.name} target={`${this.state.match.path}${item.link}`}/>
                                                        </li>
                                            })
                                        }
                                        </ul>
                                      </li>
                            })
                        }
                    </ul>
                </div>


            </div>
        )
    }
};

export default SideBar;