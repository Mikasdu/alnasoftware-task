import React, { Component } from 'react';
import axios from 'axios';
import Persons from './Persons';

class LiveSearch extends Component {
    state = {
        persons: [],
        loading: false,
        value: ''
    };

    componentDidMount() {
        axios.get('http://localhost:8080/person/all').then(res => {
            this.setState({ persons: res.data });
        });
    };

    search = async val => {
        this.setState({ loading: true });
        const url = `http://localhost:8080/person/find?search=` + val;
        const res = await axios(url);
        const persons = await res.data;
        this.setState({ persons, loading: false });
    };

    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
    };

    get renderPersons() {
        let persons = <tr><td>No persons</td></tr>;
        if (this.state.persons) {
            persons = <Persons list={this.state.persons} />;
        }
        return persons;
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    value={this.state.value}
                    onChange={e => this.onChangeHandler(e)}
                    placeholder="name or birthday etc. 1988-05-19"
                />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Birthday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPersons}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LiveSearch;