import { Box, Stack } from '@chakra-ui/react';
import AppRouter from './router/AppRouter';
import './globals.css'

const App: React.FC = () => {
  return (
    <Stack
      backgroundImage="linear-gradient(90deg, #270652 0%, #3f285e 100%)"
      color="white"
      width="full"
      minHeight="100vh"
      // display="flex"
      // flexDirection='column'
      // justifyContent="center"
    >
      <AppRouter />
    </Stack>    
  );
}

export default App;
