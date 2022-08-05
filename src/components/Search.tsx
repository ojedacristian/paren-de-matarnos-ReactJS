import {
  Box, Input, InputGroup, InputLeftAddon, InputRightAddon, Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import api from '../services/api';

export function Search() {
  console.log(import.meta.env.MODE);
  console.log(import.meta.env.VITE_APIKEY);

  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => {
    api.list('Maria');
    setIsDisabled(true);
  };
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
        />
        {/* <InputRightAddon children="💡" /> */}
        <InputRightAddon>
          <Button onClick={handleClick} disabled={isDisabled}>
            💡
          </Button>
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
}

export default Search;
