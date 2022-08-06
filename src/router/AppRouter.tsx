import { Container } from '@chakra-ui/react';
import { Navigate, Route, Routes, Link } from 'react-router-dom';
import HomeScreen from '../HomeScreen';
import { SearchScreen } from '../SearchScreen';

function AppRouter() {
  return (
    <>
      <Link to='/'>
       Logo
      </Link>
      <Container
    minWidth="container.md"
    display="flex"
    flexDirection="column"
    justifyContent="space-around"
    >
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
      <Route path="/search/:id" element={<SearchScreen />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
    </Container>
    </>
  );
}

export default AppRouter;
