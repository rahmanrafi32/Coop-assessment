import { render, screen } from '@testing-library/react';
import Home from '../components/Home/HomeBanner/HomeBanner';

test('renders home component', () => {
  render(<Home/>);
  const HomeElement = screen.getByText('We Boost To Your Child');
  expect(HomeElement).toBeInTheDocument();
});
