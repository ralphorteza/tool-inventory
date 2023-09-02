import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from "@/app/page"
 
describe('Home Page - Rendering', () => {
  it('should have Home page text', () => {
    render(<Home />);
    const homepage = screen.getByText('New tool');
    // screen.getByText('Home Page')

    expect(homepage).toBeInTheDocument();
  });

  // it('should click on spoiler button to display new text', async () => {
  //     render(<Home />);

  //     expect(screen.queryByText("This is the text!")).not.toBeInTheDocument();
  //     const spoilerButton = screen.getByRole('button', { name: 'spoiler' });
  //     await userEvent.click(spoilerButton);

  //     // expect(screen.getByText("This is the text!")).toBeInTheDocument();
  //     // expect(await screen.findByText("This is the text!", {}, { timeout: 5000 })).toBeInTheDocument();
  //     await waitFor(() => {
  //       expect(screen.getByText("This is the text!")).toBeInTheDocument();
  //     }, { timeout: 1200 });
  //   })
});