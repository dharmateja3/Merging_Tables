import React, { useState, useEffect } from 'react';
import { fetchData } from '../service';

function Table1() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData('table1').then(response => {
            setData(response.table1Data);
        });
    }, []);

    return (
        <div className='d-flex flex-column justify-content-center'>
            <h2 className='fw-bold mt-2  justify-content-center'>Table 1</h2>
            <table className='table table-bordered table-striped' style={{"width":300}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => {
                         return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                            </tr>
                        )
                    } 
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table1;
