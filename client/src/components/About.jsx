import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Flex flexDir='column' align='center' w='35%'>
            <Box w='90%' h='70vh' mt='12%' bg='white' borderRadius={'lg'} align='center  '>
                <Text mt={10} fontWeight={'bold'} fontSize='xl'>PLAN EFFECTIVELY WITH US</Text>
                <Text mt={10} fontWeight={'bold'} fontSize='xl'>ADD TARGETS</Text>
                <Text mt={10} fontWeight={'bold'} fontSize='xl'>TRACK</Text>
                <Text mt={10} fontWeight={'bold'} fontSize='xl'>COMPLETE</Text>
                <Text mt={10} fontWeight={'bold'} fontSize='xl'>RESET</Text>
                <Text mt={10} fontWeight={'bold'} fontSize='xl'>"PLAN YOUR WORK AND WORK YOUR PLAN."</Text>
            </Box>
        </Flex>
    )
}

export default About