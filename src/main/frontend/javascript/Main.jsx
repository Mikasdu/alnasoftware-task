import React, { Component } from "react";
import ReactDOM from 'react-dom';
import LiveSearch from './LiveSearch';

class Main extends Component {

    render() {
        return (
                <div className="input-group flex-nowrap">
                    <h3>Alna software task: person search by name or birthday</h3>
                    <LiveSearch />
                </div>
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('react-mountpoint')
)