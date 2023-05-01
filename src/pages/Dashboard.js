import { useEffect, useState } from "react";

const Dashboard = () => {
    const [data, setData] = useState(null);

    useEffect (() => {
        const getData = async (url) => {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `123456789`
                },
            });
            const data = await response.json();
            setData(data);
        }
        getData('http://localhost:3001/admin');
    }, []);


    return (
        <div>
        <h1>Dashboard</h1>
        {data && data.msg && <p>{data.msg}</p>}
        </div>
    );
}

export default Dashboard;
