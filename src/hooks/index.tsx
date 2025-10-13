import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/default.theme';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default AppProvider;
