import { StyleSheet } from 'react-native';
import { theme } from './src/theme/theme';
import Provider from './Provider';
import { Home } from './src/screens/Home';

export default function App() {

  return (
    <Provider>
      <Home />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1.4 * 16
  },
});
