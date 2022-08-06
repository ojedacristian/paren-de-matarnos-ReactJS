import { Container } from '@chakra-ui/react';
import Search from './components/Search';
import Title from './components/Title';
import DataSub from './components/DataSub';
import { Link } from 'react-router-dom';

const HomeScreen: React.FC = () => {
  return (
    <>  
    <Title />
    <Search />
    <DataSub />
    </>
  )
};

export default HomeScreen;
