import {
  Box, Input, InputGroup, InputLeftAddon, InputRightAddon, Button,
} from '@chakra-ui/react';

const handleClick = () => {
  console.log('click');
};

export function Search() {
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
          <Button onClick={handleClick}>
            💡
          </Button>
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
}

export default Search;
