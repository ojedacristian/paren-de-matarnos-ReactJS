import {
  Box, Container, Heading, Input, Stack, Text,
} from '@chakra-ui/react';
import * as React from 'react';

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
      <Container
        minWidth="container.md"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Box>

          <Heading
            as="h1"
            color="pink.500"
            fontSize="1.5em"
            textAlign="center"
            paddingBottom="2em"
          >
            En Argentina, fue asesinada una mujer cada 23 horas durante este año.
          </Heading>
          <Text
            textAlign="center"
            fontSize="1.2em"
          >
            Una de ellas podría ser tu mamá, hija, hermana, pareja o vos... comprobalo:

          </Text>
        </Box>
        <Box display="flex">
          <Text>#</Text>
          <Input
            color="pink.200"
            placeholder="Ingresá un nombre"
            _placeholder={{
              color: 'inherit',
            }}
          />
          <Text> 💡 </Text>
        </Box>
        <Heading as="h2" color="pink.500" fontSize="xl" textAlign="center">3378 niños y niñas quedaron sin sus madres entre 2008 y 2017</Heading>
      </Container>
    </Box>
  );
}

export default App;
