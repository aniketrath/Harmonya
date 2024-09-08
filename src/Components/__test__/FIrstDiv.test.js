import { render } from '@testing-library/react';
import RenderComp from '../FirstDiv'

test('renders correctly', () => {
  const { asFragment } = render(<RenderComp />);
  expect(asFragment()).toMatchSnapshot();
});