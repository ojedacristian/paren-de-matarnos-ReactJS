import { Box, Stack, Wrap, Text, Avatar, WrapItem, Image, AspectRatio } from '@chakra-ui/react';
import parse from 'html-react-parser'

interface Props {
    fecha: string,
    image: string,
    description: string
    title: string,
    thumbnail: string
}

const Post: React.FC<Props> = ({image, description, thumbnail, title, fecha}) => {
  return (
    <Stack spacing={0}
    backgroundColor='gray.100'
    color='gray.900'
    >
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            padding='1rem'
            fontSize='sm'
        >
            <Wrap>
                <WrapItem>
                    <Avatar src={thumbnail}/>
                    <Box paddingLeft='1em'>
                        <Text>miss_taisia <b>• Following</b></Text>
                        <Text as='span' fontSize='xs'>Ufa, Russia</Text>
                    </Box>
                </WrapItem>
            </Wrap>
            <Text fontSize='2xl' fontWeight='bold' color='gray.600'>
                ...
            </Text>
        </Box>
        <AspectRatio maxWidth='400px' ratio={4/5} >
            <Image
            src={ image }
            objectFit='cover'
            />        
        </AspectRatio>
        <Box display='flex' padding='0.5rem'>
            <Box>❤️</Box>
            <Box paddingLeft='0.5rem'>🗯️</Box>
            <Box paddingLeft='0.5rem'>◀️</Box>
        </Box>
        <Box padding='0 1rem 1rem 1rem' fontSize='sm'>
            <Text fontWeight='bold' fontSize='md'>{fecha}</Text>
            <Text fontWeight='bold'>{ parse(title) }</Text>
            <Text>{ parse(description) }</Text>
        </Box>
    </Stack>
  )
}

export default Post;