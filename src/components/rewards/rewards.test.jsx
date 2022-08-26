import { render, screen } from '@testing-library/react'
import RewardsPage from './rewards';

test ('rewards page', () => {
    render(<RewardsPage />);

    const container = screen.getByTestId('rewardsContainer');

    expect(container).toBeVisible();
})