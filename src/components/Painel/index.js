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

export function Painel(props, iniciarIntervalo) {

  const [entrada, setEntrada] = useState(new Date().toLocaleTimeString());



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

        <Box padding={2} as='b'>
          <Text text>Servidor</Text>
        </Box>
        <Box bg={'blue.300'} rounded={'lg'} padding={3}>
          <Text>Antonio Wilker Sena</Text>
        </Box>
        <Box padding={2} as='b'>
          <Text text>Horário do Servidor</Text>
        </Box>
        <Flex bg={'blue.300'} rounded={'lg'} padding={3} justifyContent={'space-around'}>
          <Box textAlign={'center'}>
            <Text>
              Entrada
            </Text>
            <Text>
              07:30:00
            </Text>
          </Box>
          <Box textAlign={'center'}>
            <Text>
              Intervalo
            </Text>
            <Text>
              12:00:00 as 14:00:00
            </Text>
          </Box>
          <Box textAlign={'center'}>
            <Text>
              Saida
            </Text>
            <Text>
              18:00:00
            </Text>
          </Box>
        </Flex>

        <Box padding={2} as='b'>
          <Text text>Registro de comparecimento</Text>
        </Box>
        <Flex bg={'blue.300'} rounded={'lg'} padding={3} justifyContent={'space-around'}>
          <Box textAlign={'center'}>
            <Text>
              Entrada
            </Text>
            <Text>
              {entrada}
            </Text>
          </Box>
          <Box textAlign={'center'}>
            <Text>
              Intervalo
            </Text>
            <Text>
              12:02:00 as 14:03:00
            </Text>
            <Button colorScheme='teal' size='xs' >
              Iniciar Intervalo
            </Button>


          </Box>
          <Box textAlign={'center'}>
            <Text>
              Saida
            </Text>
            <Text>
              00:00:00
            </Text>
            <Button colorScheme='red' size='xs' >
              Sair
            </Button>
          </Box>
        </Flex>

      </Box>
    </Flex>
  )
}
