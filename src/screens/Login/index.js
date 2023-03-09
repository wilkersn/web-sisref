import React from "react";
import {
  Flex,
  Stack,
  Heading,
} from '@chakra-ui/react';

import { FormSignIn } from "../../components/FormSignIn/index";
import SideBar from "../../components/SideBar";

export function Login() {
  return (
    <>
      <SideBar />
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        flexDirection={'column'}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sisref 2.0
            </Heading>
          </Stack>
        </Stack>
        <FormSignIn />
      </Flex>
    </>
  )
}