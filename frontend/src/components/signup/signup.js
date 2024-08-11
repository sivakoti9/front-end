import React from 'react';
import { FormControl, FormLabel, FormHelperText, Input, Button, VStack, Box, Center, Heading } from '@chakra-ui/react';

export const SignUp = () => {
    return (
        <Center height="100vh">
            <Box
                position="relative"
                width={{ base: '90vw', sm: '60vw', md: '40vw', lg: '30vw' }}
                p={6}
                borderWidth={1}
                borderRadius="lg"
                boxShadow="md"
                bg="white"
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <VStack spacing={4} align="stretch">
                    <Heading as="h2" size="lg" textAlign="center">
                        Sign Up
                    </Heading>

                    <FormControl isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input type='text' placeholder='Enter your name' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type='tel' placeholder='Enter your phone number' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' placeholder='Enter your email' />
                        
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>New Password</FormLabel>
                        <Input type='password' placeholder='Enter your new password' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input type='password' placeholder='Confirm your password' />
                    </FormControl>

                    <Button colorScheme="blue" width="full">
                        Sign Up
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};
