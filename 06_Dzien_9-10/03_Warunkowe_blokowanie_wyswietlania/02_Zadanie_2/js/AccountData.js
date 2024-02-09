import React, {useState} from 'react';
import FakeAPI from "./data/fakeAPI.js";

const AccountData = () => {
    const [data, setData] = useState([]);
    FakeAPI.then(data => {
        setData( prev => {
            return data;
        })
    });

    console.log(data);

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>day</th>
                    <th>balance</th>
                    <th>change</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map( (elem, index) => {
                        return <tr key={index}>
                            <td>{elem.day}</td>
                            <td>{elem.balance}</td>
                            <td>{elem.change}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default AccountData;