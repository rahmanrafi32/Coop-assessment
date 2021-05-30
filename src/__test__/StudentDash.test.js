import { render, screen } from '@testing-library/react';
import StudentSms from '../components/studentDashboard.js/StudentSMS';
test('renders home component', () => {
    render(<StudentSms/>);
    const HomeElement = screen.getByText('TOMORROW\'S TIMETABLE');
    expect(HomeElement).toBeInTheDocument();
  });
  