import { Box, Heading, Text } from '@chakra-ui/react';

export function Title() {
  return (
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
  );
}

export default Title;
