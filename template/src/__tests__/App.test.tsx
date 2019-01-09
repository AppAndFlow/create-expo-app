import { render } from 'react-native-testing-library';

import App from '../components/App';

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
  });
});
