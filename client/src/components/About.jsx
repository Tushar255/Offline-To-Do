import { Box, Flex, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import React from 'react';

const About = () => {
    return (
        <Flex flexDir='column' align='center' w={{ base: '90%', md: '35%' }} mx={{ base: 'auto', md: 'none' }}>
            <Box w='90%' h='70vh' mt='12%' bg='white' borderRadius={'lg'} align='center' overflow='auto'>
                <UnorderedList styleType='disc' textAlign='left' pl={5}>
                    <ListItem mt='10' fontWeight='bold' fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'lg' }}>
                        PLAN EFFECTIVELY WITH US
                    </ListItem>
                    <ListItem mt='10' fontWeight='bold' fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'lg' }}>
                        ADD TARGETS
                    </ListItem>
                    <ListItem mt='10' fontWeight='bold' fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'lg' }}>
                        TRACK
                    </ListItem>
                    <ListItem mt='10' fontWeight='bold' fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'lg' }}>
                        COMPLETE
                    </ListItem>
                    <ListItem mt='10' fontWeight='bold' fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'lg' }}>
                        RESET
                    </ListItem>
                    <ListItem mt='10' fontWeight='bold' fontSize={{ base: 'sm', sm: 'md', md: 'md', lg: 'lg' }}>
                        DELETE
                    </ListItem>
                    <ListItem mt='10' fontWeight='bold' fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}>
                        "PLAN YOUR WORK AND WORK YOUR PLAN."
                    </ListItem>
                </UnorderedList>
            </Box>
        </Flex>
    );
};

export default About;
