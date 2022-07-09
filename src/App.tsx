import { Box } from '@chakra-ui/react';
import { HomeScreen } from './HomeScreen';

function App() {
  return (
    <Box
      backgroundImage="linear-gradient(90deg, #270652 0%, #3f285e 100%)"
      color="white"
      width="full"
      minHeight="100vh"
      display="flex"
      justifyContent="center"
    >
      <HomeScreen />
    </Box>
  );
}

export default App;
