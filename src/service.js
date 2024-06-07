export async function fetchData(endpoint) {
    try {
        const response = await fetch(`http://localhost:8080/api/tables`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
