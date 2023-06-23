import React from 'react'
import Home from './components/Home'
import { NotAllowedIcon } from '@chakra-ui/icons'
import { useDispatch } from 'react-redux';
import { resetTodos } from './State/todoSlice';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import "./App.css"
import About from './components/About';

const App = () => {
  const dispatch = useDispatch();
  const reset = () => {
    dispatch(
      resetTodos()
    )
  }
  return (
    <div className='app'>

      <Flex w='100%'>
        <Text mx='auto' align='center' fontSize={{ base: "lg", sm: "2xl", md: "3xl" }} fontWeight={'bold'}>
          TO-DO LIST
        </Text>

        <Button colorScheme='red' size='sm' my='auto' onClick={reset} mr={5}>
          Reset
          <NotAllowedIcon ml={2} />
        </Button>
      </Flex>

      <Flex w='100%' h='100%'>
        <Flex w='100%' h='80vh' justify={'space-between'} >
          <About />
          <Home />
        </Flex>

      </Flex>
      <Text mt={5} align='center' fontSize={{ base: "sm", sm: "lg", md: "xl" }} fontWeight={'bold'}>
        "GOOD FORTUNE IS WHAT HAPPENS WHEN OPPURTUNITY MEETS WITH PLANNING."
      </Text>
      <Text align='center' color='red' fontSize={{ base: "sm", sm: "md", md: "lg" }} fontWeight={'bold'}>-THOMAS EDISON</Text>
    </div>
  )
}

export default App