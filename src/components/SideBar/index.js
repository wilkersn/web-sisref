import React from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';




export default function SideBar() {

  return (
    <>
      <Box bg={'blue.400'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Sistema de Registro Eletrônico de Frequência – SISREF</Box>
        </Flex>
      </Box>
    </>
  );
}