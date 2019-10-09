import { UIManager } from 'react-native';

import App from './src/components/App';
import metrics from './src/constants/metrics';

if (metrics.isAndroid) {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default App;
