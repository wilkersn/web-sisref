import React, { useState } from "react"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Button,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export function PainelFrequency() {

  const [teste, setTeste] = useState('');

  let ar = "asf"

  setTeste(ar)

  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.900')}>
      <Box
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'lg'}
        p={8}
        width={700}
      >


      </Box>
    </Flex>
  )
}
