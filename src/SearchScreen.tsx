import { Box, SimpleGrid, GridItem, Image, Text, Container } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import api from './services/api';
import { GSearchRes } from './interfaces/interfaces';
import parse from 'html-react-parser'

export const SearchScreen:React.FC = () => {
    const { id = '' } = useParams()
    const [data, setData] = useState<GSearchRes[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        api
        .list(id)
        .then( res => {
            setData(res)
            console.log(res)
        }) 
    }, [])
    
  
    return (
        <Box
            display='flex'
            justifyContent='center'
        >

        <Container    
        maxWidth='container.xl'
        >
            <SimpleGrid columns={3} spacing={2}>
            {
                data.map( (item, i) => (
                    <Box key={i}>
                    <Image src={item.pagemap.cse_image[0].src} /> 
                    <Text as='h2'>
                        {
                            parse( item.htmlTitle || item.pagemap.metatags[0]["og:title"] )
                        }
                    </Text>
                    <Text>
                        {item.link + i}
                    </Text>
                </Box>
              ))
            }
            </SimpleGrid>
        </Container>
        </Box>
  )
}
