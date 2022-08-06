import { Box } from '@chakra-ui/react';
import AppRouter from './router/AppRouter';

const App: React.FC = () => {
  return (
    <Box
      backgroundImage="linear-gradient(90deg, #270652 0%, #3f285e 100%)"
      color="white"
      width="full"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
    >
      <AppRouter />
    </Box>
  );
}

export default App;
