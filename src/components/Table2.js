import React, { useState, useEffect } from 'react';
import { fetchData } from '../service';

function Table2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData('table2').then(response => {
            setData(response.table2Data);
        });
    }, []);

    return (
        <div>
            <h2 className='fw-bold mt-3'>Table 2</h2>
            <table className='table table-striped table-bordered' style={{"width":300}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table2;
