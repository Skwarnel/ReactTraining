import React, {useState} from 'react';
import FakeAPI from "./data/fakeAPI.js";

const AccountData = () => {
    const [data, setData] = useState(false);
    FakeAPI.then(data => {
        setData( (prevState) => {
            return {...prevState, data}
        })
    });


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
                    data && data.map( () => {

                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default AccountData;