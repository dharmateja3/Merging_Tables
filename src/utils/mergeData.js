export function mergeData(table1Data, table2Data) {

const merged =[];

    if (!Array.isArray(table1Data)) {
        if (typeof table1Data === 'string') {
            table1Data = table1Data.split(',');
        } else if (typeof table1Data === 'object' && table1Data !== null) {
            table1Data = Object.values(table1Data);
        } else {
            console.error('table1Data is not convertible to an array');
            return [];
        }
    }

    if (!Array.isArray(table2Data)) {
        if (typeof table2Data === 'string') {
            table2Data = table2Data.split(',');
        } else if (typeof table2Data === 'object' && table2Data !== null) {
            table2Data = Object.values(table2Data);
        } else {
            console.error('table2Data is not convertible to an array');
            return [];
        }
    }

    for (let item of table1Data) {
        const found = table2Data.find(record => record.id === item.id);
        if (!found) {
            console.log(`Adding record from table1Data to table2Data: ${JSON.stringify(item)}`);
            merged.push(item);
        }
    }

    for (let item of table2Data) {
        const found = table1Data.find(record => record.id === item.id);
        if (!found) {
            console.log(`Adding record from table2Data to table1Data: ${JSON.stringify(item)}`);
            merged.push(item);
        }
    }

    return merged;
}


