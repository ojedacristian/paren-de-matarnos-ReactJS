import { Box, SimpleGrid, GridItem, Image, Text, Container, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import api from './services/api';
import { GSearchRes } from './interfaces/interfaces';
import Post from './components/Post';
import { NewspaperArticle } from './components/NewspaperArticle';

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

    const meses:any = {
        Ene: "Jan",
        Feb: "Feb",
        Mar: "Mar",
        Abr: "Apr",
        May: "May",
        Jun: "Jun",
        Jul: "Jul",
        Ago: "Aug",
        Sep: "Sep",
        Oct: "Oct",
        Nov: "Nov",
        Dic: "Dec"
      };

    const parsearFecha = (fecha: string) => {
        let partes = fecha.split(" ");
        partes[1] = meses[partes[1]];
        if (partes[1] === undefined) return " ";
        let fechaUnida = new Date(partes.join(" "));
        let day = fechaUnida.getDate();
        let month = fechaUnida.getMonth() + 1;
        let year = fechaUnida.getFullYear();
        let fechaFormateada;
        if (month < 10) {
          fechaFormateada = `${day}/0${month}/${year}`;
        } else {
          fechaFormateada = `${day}/${month}/${year}`;
        }
        return fechaFormateada;
      }
    
  
    return (
        <Box
            display='flex'
            justifyContent='center'
        >

        <Container    
        maxWidth='container.xl'
        backgroundColor='#F9F7F1'
        padding={0}
        >
          <Heading size='3xl' color='blackAlpha.900' textAlign='center' padding='0.5em' >DIARIO POPULAR</Heading>
          <Heading size='sm' color='blackAlpha.800' textAlign='center' padding='1em' 
          borderTop=   '2px solid black'
          borderBottom='2px solid black'
          >BUENOS AIRES, ARG - { new Date().toLocaleDateString('es-AR') }</Heading>
            <Box id='newspaper' padding='1em'
                    sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
            >
            {
                data.map( (item, i) => (
                <NewspaperArticle 
                    key={i} 
                    image={
                        item.pagemap?.cse_image[0].src ||
                        item.pagemap?.thumbnail[0].src ||
                        item.pagemap?.cse_thumbnail[0].src
                    }
                    fecha={ item.htmlSnippet.split(" <b>...</b> ")[0] }
                    description={ item.pagemap.metatags[0]['og:description'] || item.htmlSnippet.split(" <b>...</b> ")[1] }
                    link={item.link}
                    title={ item.title || item.htmlTitle || item.pagemap.metatags[0]["og:title"]  }
                    epigraph={ item.pagemap.metatags[0]['og:site_name'] }
                 />
              ))
            }
            </Box>
        </Container>
        </Box>
  )
}
