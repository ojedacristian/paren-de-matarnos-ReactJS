import { Box, SimpleGrid, GridItem, Image, Text, Container, Heading, Link } from '@chakra-ui/react';
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
        maxWidth='6xl'
        padding={0}
        >
          <Box
                  backgroundColor='#F9F7F1'
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
                data.map( (item, i) => {
                  if (i==9) return;
                  return <NewspaperArticle 
                      key={i} 
                      image={
                          item.pagemap?.cse_image[0]?.src ||
                          item.pagemap?.cse_thumbnail[0].src ||
                          item.pagemap?.cse_thumbnail[0]?.src
                      }
                      fecha={ item.htmlSnippet.split(" <b>...</b> ")[0] }
                      description={ item.pagemap.metatags[0]['og:description'] || item.htmlSnippet.split(" <b>...</b> ")[1] }
                      link={item.link}
                      title={ item.title || item.htmlTitle || item.pagemap.metatags[0]["og:title"]  }
                      epigraph={ item.pagemap.metatags[0]['og:site_name'] }
                      id={id}
                   />
                }
              )
            }
              </Box>
            </Box>
            <Box display='flex' justifyContent='space-around' alignItems='center' padding='1em'>
              <Box>
              <Link className="resp-sharing-button__link" 
              href="https://facebook.com/sharer/sharer.php?u=www.parendematarnos.com.ar" 
              target="_blank" rel="noopener" aria-label="Share on Facebook">
        <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"><div aria-hidden="true" className="resp-sharing-button__icon resp-sharing-button__icon--solid">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
          </div>Compartir en Facebook</div>
      </Link>
              </Box>
              <Box color='purple.600'>
                <Heading as='h4'>#ParenDeMatarnos</Heading>
                <Heading as='h4'>#NoTeQuedesCallada</Heading>
                <Heading as='h4'>#Linea144</Heading>
                <Heading as='h4'>{`#${id.toLocaleUpperCase()}SomosTodas`}</Heading>
                <Heading as='h4'>#NiUnaMenos</Heading>
              </Box>
            </Box>
        </Container>
        </Box>
  )
}
