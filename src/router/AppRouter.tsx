import { Box } from '@chakra-ui/react';
import { Navigate, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from '../HomeScreen';
import { SearchScreen } from '../SearchScreen';

function AppRouter() {
  return (
    <>
    <Box width='full'>
      <Link to='/'>
       Logo
      </Link>
    </Box>
      
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/search/:id" element={<SearchScreen />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
    </>
  );
}

export default AppRouter;
