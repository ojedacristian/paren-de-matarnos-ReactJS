import React from 'react'
import { Image, Stack, Text, AspectRatio, Heading, Box, Link } from '@chakra-ui/react';
import parse from 'html-react-parser';

interface Props {
    title: string,
    image: string,
    description: string,
    fecha: string,
    epigraph: string,
    link: string,
    id: string
}


export const NewspaperArticle: React.FC<Props> = ({ title, image, description, fecha, epigraph, link, id}) => {
    const regexSinId = '/hallada|muerta|asesinada|desaparecida|muerte|sin vida|violación|violada|asesinos|';
    const regex = new RegExp( regexSinId + id , 'gi')
    return (
            <Box 
                display='inline-block'
            color='black' borderRight='1px solid #333' padding='1rem'
            className='article'
            >
                <Stack spacing={0} textAlign='center'>
                    <Heading as='h2' size='lg' paddingBottom='1rem'>{ parse(
                        title.replace(regex, 
                                        (match)=> `<span class="resaltar">${match}</span>`   
                            )
                        )
                    }
                    </Heading>
                    <Link href={link} isExternal>
                        <AspectRatio ratio={4/3} maxWidth='400px'>
                            <Image src={ image } filter='grayscale(100%)' _hover= {{ filter: 'unset' }} />
                        </AspectRatio>
                    </Link>
                        <Box textAlign='left' fontSize='sm' marginTop={0}>{ epigraph} </Box>
                    <Text padding='0.5rem' fontSize='sm' textAlign='justify' >{ parse(description) }</Text>
                    <Box
                    padding='0 2em'
                    >
                        <Text as ='h4' fontSize='lg'
                            borderTop='1px solid black'
                            borderBottom='1px solid black'
                            margin='0.5em'
                            padding='0.5em'
                        >{ fecha }</Text>
                    </Box>
                </Stack>
            </Box>
  )
}
