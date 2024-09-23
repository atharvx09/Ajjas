import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/dummy.json'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Fetched Data</h1>
            {data.map((item, index) => (
                <div key={index} className="data-item">
                    <p>Start Date: {item.startDate ? new Date(item.startDate).toLocaleString() : 'N/A'}</p>
                    <p>Distance: {item.distance !== undefined ? item.distance.toFixed(2) : 'N/A'} meters</p>
                    <p>Duration: {item.duration !== undefined ? item.duration : 'N/A'} seconds</p>
                    <p>Average Speed: {item.averageSpeed !== undefined ? item.averageSpeed.toFixed(2) : 'N/A'} m/s</p>
                    <p>Top Speed: {item.topSpeed !== undefined ? item.topSpeed.toFixed(2) : 'N/A'} m/s</p>
                    <p>Score: {item.score !== undefined ? item.score.toFixed(2) : 'N/A'}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default DataFetcher;
