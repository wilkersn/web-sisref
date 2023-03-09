import React, { useState, useEffect } from "react";
import {
  Flex,
  useColorModeValue,
  Box,
  ButtonGroup,
  Button,
  Stack,
  Heading
} from '@chakra-ui/react';

import SideBar from "../../components/SideBar";
import { Painel } from "../../components/Painel";

export function Home() {

  const [date, setDate] = useState(new Date().toLocaleTimeString())

  const [initInterval, setInterval] = useState('00:00:00')

  function clock() {
    setDate(new Date().toLocaleTimeString())
  }

  useEffect(() => {
    setTimeout(() => {
      clock()
    }, 1000)
  })


  return (
    <>
      <SideBar />
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        flexDirection={'column'}
      >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            {date}
          </Heading>
        </Stack>

        <Painel iniciarintervalo={'12:03:00'} />
        <ButtonGroup padding={5}>
          <Button
            bg={'blue.400'}
            color={'white'}
          >Frequencia do mes</Button>
          <Button
            bg={'blue.400'}
            color={'white'}
          >Sair do Sisref</Button>
        </ButtonGroup>
      </Flex>
    </>
  )
}