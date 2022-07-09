import { Container } from '@chakra-ui/react';
import Search from './components/Search';
import Title from './components/Title';
import DataSub from './components/DataSub';

export function HomeScreen() {
  return (
    <Container
      minWidth="container.md"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Title />
      <Search />
      <DataSub />
    </Container>
  );
}

export default HomeScreen;
