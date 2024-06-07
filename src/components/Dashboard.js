import React, { useState, useEffect } from 'react';
import { fetchData } from '../service';
import Table1 from './Table1';
import Table2 from './Table2';
import { mergeData } from '../utils/mergeData';

function Dashboard() {
    const [table1Data, setTable1Data] = useState([]);
    const [table2Data, setTable2Data] = useState([]);
    const [mergedData, setmergedData] = useState([]);
    

    useEffect(() => {
        fetchData('table1').then(response => {
            setTable1Data(response.table1Data);
        });
        fetchData('table2').then(response => {
            setTable2Data(response.table2Data);
        });
    }, []);

    const handleMerge = () => {
        const merged = mergeData(table1Data, table2Data);
        setmergedData(merged);
    };

    return (
        <div className='container'>
            
            <div className='d-flex flex-row justify-content-around'>
                <Table1 data={table1Data} />
                <Table2 data={table2Data} />
            </div>
            <div>
                <center><button onClick={handleMerge} className='btn btn-primary'>Merge Tables</button></center>
            </div>
           
            {mergedData.length > 0 && (
                <div>
                    <center><h2 className='fw-bold mt-3'>Extra Record</h2>
                    <table className='table table-striped table-bordered' style={{"width":300}}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mergedData.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </center>
                </div>
            )}
        </div>
    );
}

export default Dashboard;
