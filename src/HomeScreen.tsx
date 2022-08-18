import { Box, Container } from '@chakra-ui/react';
import Search from './components/Search';
import Title from './components/Title';
import DataSub from './components/DataSub';
import { Link } from 'react-router-dom';

const HomeScreen: React.FC = () => {
  return (
    <Box
    display='flex'
    justifyContent='center'
    alignItems='space-between'
    flex={1}
    >

      <Container
    minWidth="container.md"
    display="flex"
    flexDirection="column"
    justifyContent="space-around"
    alignItems='center'
    >
      <Title />
      <Search />
      <DataSub />
    </Container>
      </Box>
  )
};

export default HomeScreen;
