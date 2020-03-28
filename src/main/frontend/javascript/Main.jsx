import React, { Component } from "react";
import ReactDOM from 'react-dom';
import LiveSearch from './LiveSearch';

class Main extends Component {

    render() {
        return ( <LiveSearch /> )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('react-mountpoint')
)
