import React from "react";

const Persons = ({ list }) => {
    let person = <tr><td>Loading...</td></tr>;
    if (list) {
        person = list;
    }
    return (
        person.map(person =>
            <tr key={ person.id }>
                <td scope="row">{ person.name }</td>
                <td>{ person.birthday }</td>
            </tr>
        )
    );
};

export default Persons;
