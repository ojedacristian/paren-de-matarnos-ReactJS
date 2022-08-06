import {
  Box, Input, InputGroup, InputLeftAddon, InputRightAddon, Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search: React.FC = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [value, setValue] = useState<string>('')
  const navigate = useNavigate()
  const handleClick = () => {
    setIsDisabled(true);
    navigate(`/search/${value}`)    
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> )=>{
    setValue(e.target.value)
  }
  return (
    <Box display="flex">
      <InputGroup>
        <InputLeftAddon children="#" color="purple.500" fontSize="2em" fontWeight="bold" />
        <Input
          color="purple.200"
          focusBorderColor="purple.500"
          borderColor="purple.300"
          placeholder="Ingresá un nombre"
          _placeholder={{
            color: 'inherit',
          }}
          value={value}
          onChange={ (e)=> handleChange(e) }
        />
        <InputRightAddon>
          <Button onClick={handleClick} disabled={isDisabled}>
            💡
          </Button>
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
};

export default Search;
