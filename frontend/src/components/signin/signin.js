import React from 'react';
import { FormControl, FormLabel, FormHelperText, Input, Button, VStack, Box, Center, Heading } from '@chakra-ui/react';
import axios from 'axios'

export const SignIn =async () => {
    const Signin=()=>{
        axios.post(api+"/signin",{name,password})
        .then((res)=>{
            if(res.data.message){
                console.log(res?.data?.values)
                alert("login sucessfully")
            } else {
                alert("user not found")
                window.location.href="/signup"
            }
        }            
    )
        .catch((e)=>console.log(e))
    }
    return (
        <Center height="100vh">
            <Box
                width={{ base: '90%', sm: '80%', md: '400px', lg: '400px' }} // Fixed width
                height="400px" // Fixed height to make it a square
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
                        Sign In
                    </Heading>

                    <FormControl isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' placeholder='Enter your email' onChange={(e)=>setName(e.target.value) }/>
                        
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value) }/>
                        
                    </FormControl>

                    <Button colorScheme="blue" width="full">
                        Sign In
                    </Button>
                </VStack>
            </Box>
        </Center>
    );
};
