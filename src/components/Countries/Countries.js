import React from 'react';

const countries = (props) => {
    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <table className={"table table-striped"}>
                    <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Continent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.countries.map((country) => {
                            return (
                                <tr key={country.id}>
                                    <td>{country.name}</td>
                                    <td>{country.continent}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default countries;