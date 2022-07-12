import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const line1 = '3378 niños y niñas quedaron sin sus madres entre 2008 y 2017';
const line2 = '520 quedaron sin sus madres entre 2008 y 2017';
const line3 = '100 sin sus madres entre 2008 y 2017';

export function DataSub() {
  const [phrase, setPhrase] = useState(line1);

  useEffect(() => {
    setTimeout(() => {
      phrase === line1
        ? setPhrase(line2)
        : setPhrase(line3);
    }, 5000);
  }, [phrase]);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.03,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Heading
      as={motion.h2}
      variants={sentence}
      color="pink.500"
      fontSize="xl"
      textAlign="center"
      initial="hidden"
      animate="visible"
    >
      {
        phrase
        && phrase.split('').map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letter}
          >
            {char}
          </motion.span>
        ))
      }
    </Heading>
  );
}

export default DataSub;
