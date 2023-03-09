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
import { PainelFrequency } from "../../components/PainelFrequency";

export function Frequency() {

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
        <PainelFrequency />

      </Flex>
    </>
  )
}