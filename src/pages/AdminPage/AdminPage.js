import React from 'react';
import Card from './../../components/AdminDashboard/Card/Card';
import Chart from './../../components/AdminDashboard/chart/Chart';
import BarchartPichart from './../../components/AdminDashboard/chart/BarchartPichart';
import AnnouncementsCard from './../../components/AdminDashboard/Card/AnnouncementsCard';


const AdminPage = () => {
    return (
        <div>
            <Card></Card>
            <Chart></Chart>
            <BarchartPichart></BarchartPichart>
            <AnnouncementsCard></AnnouncementsCard>
        </div>
    );
};

export default AdminPage;