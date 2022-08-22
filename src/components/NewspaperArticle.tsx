import React from 'react'
import { Image, Stack, Text, AspectRatio, Heading, Box } from '@chakra-ui/react';
import parse from 'html-react-parser';

interface Props {
    title: string,
    image: string,
    description: string,
    fecha: string,
    epigraph: string
}

export const NewspaperArticle: React.FC<Props> = ({ title, image, description, fecha, epigraph}) => {
  return (
    <Box >
        <Box position='relative' backgroundColor='white'>
            <Box color='black' padding='1rem' className='paper' >
                <Stack borderLeft='2px dashed #333' spacing={0} paddingLeft='1rem'>

                <Heading as='h2' size='lg' paddingBottom='1rem'>{ parse(title) }</Heading>
                <AspectRatio ratio={4/3} maxWidth='400px'>
                    <Image src={ image } filter='grayscale(100%)' _hover= {{ filter: 'unset' }} />
                </AspectRatio>
                    <Box backgroundColor='gray.800' color='white' fontSize='sm' marginTop={0}>{ fecha } - { epigraph} </Box>
                <Text padding='0.5rem' >{ parse(description) }</Text>
                </Stack>
            </Box>
        </Box>
    </Box>
  )
}
