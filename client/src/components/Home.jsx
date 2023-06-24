import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, completeTodo, deleteTodoItem } from '../State/todoSlice';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
    const todoList = useSelector((state) => state.todoList);

    const [newItem, setNewItem] = useState('');
    const dispatch = useDispatch();

    const deleteItem = (id) => {
        dispatch(
            deleteTodoItem(id)
        )
    }

    const isFinished = (id) => {
        dispatch(
            completeTodo(id)
        )
    }

    const addNewItem = () => {
        if (newItem === '') {
            return;
        }
        const id = uuidv4();

        dispatch(
            addTodo({
                id: id,
                content: newItem
            })
        )

        setNewItem('');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            addNewItem();
        }
    }

    return (
        <Flex flexDir='column' w='100%' h='80vh'>
            <Flex flexDir='column' w='80%' mt='4%' ml='10%'>
                <Flex w='100%' align='center' justify='space-between'>
                    <Input
                        w='89%'
                        placeholder="Enter a new item"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        onKeyPress={handleKeyPress}
                        border={'1px solid black'}
                        bg='white'
                    />
                    <Flex ml={1}>
                        <Button borderRadius={'lg'} onClick={addNewItem} bg='green' color='white' _hover={{ bg: '#035703' }}>
                            Add
                            <AddIcon ml={2} />
                        </Button>
                    </Flex>
                </Flex>

                <Flex w='100%' h='57.5vh' overflowY={'scroll'} flexDir='column' mt='6%' pt='4' px='1' bg='white' borderRadius={'lg'}>
                    {todoList && todoList.map(todo => (
                        <Flex key={todo.id}
                            w='100%'
                            align='center'
                            justify='space-between'
                            mx='auto'
                            borderRadius='md'
                            mb={3.5}
                            textDecoration={todo.completed ? 'line-through' : 'none'}
                            textColor={todo.completed ? 'white' : 'black'}
                            bg={!todo.completed ? '#9cfe9c' : '#5c5656'}
                            onClick={() => isFinished(todo.id)}
                            cursor={'pointer'}
                        >
                            <Text ml={5} p={3}>
                                {todo.content}
                            </Text>

                            <DeleteIcon mr={10} _hover={{ color: 'red' }} onClick={() => deleteItem(todo.id)} />
                        </Flex>
                    ))}

                </Flex>
            </Flex>
        </Flex>
    )
}

export default Home