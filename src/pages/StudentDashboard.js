import React from 'react';
import StudentCard from '../components/StudentCard';
import StudentSMS from '../components/StudentSMS';

const StudentDashboard = () => {
    return (
        <div>
           
            <StudentCard></StudentCard>
            <StudentSMS></StudentSMS>
        </div>
    );
};

export default StudentDashboard;