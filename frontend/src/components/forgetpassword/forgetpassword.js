import React, { useState } from 'react';
import { FormControl, FormLabel, FormHelperText, Input, Button, VStack, Box, Center, Heading } from '@chakra-ui/react';

export const ForgotPassword = () => {
    const [step, setStep] = useState(1); // To manage steps
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSendOtp = () => {
        // Handle sending OTP logic here
        setStep(2); // Move to OTP verification step
    };

    const handleVerifyOtp = () => {
        // Handle OTP verification logic here
        setStep(3); // Move to password reset step
    };

    const handleResetPassword = () => {
        // Handle password reset logic here
        alert('Password reset successfully');
    };

    return (
        <Center height="100vh">
            <Box
                width={{ base: '90%', sm: '80%', md: '400px', lg: '400px' }} // Fixed width
                height={{ base: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }} // Auto height to accommodate content
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
                    {step === 1 && (
                        <>
                            <Heading as="h2" size="lg" textAlign="center">
                                Forgot Password
                            </Heading>
                            <FormControl isRequired>
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type='email'
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <FormHelperText>We’ll send an OTP to this email.</FormHelperText>
                            </FormControl>
                            <Button colorScheme="blue" width="full" onClick={handleSendOtp}>
                                Send OTP
                            </Button>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <Heading as="h2" size="lg" textAlign="center">
                                Enter OTP
                            </Heading>
                            <FormControl isRequired>
                                <FormLabel>OTP</FormLabel>
                                <Input
                                    type='text'
                                    placeholder='Enter OTP'
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                <FormHelperText>Enter the OTP sent to your email.</FormHelperText>
                            </FormControl>
                            <Button colorScheme="blue" width="full" onClick={handleVerifyOtp}>
                                Verify OTP
                            </Button>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <Heading as="h2" size="lg" textAlign="center">
                                Reset Password
                            </Heading>
                            <FormControl isRequired>
                                <FormLabel>New Password</FormLabel>
                                <Input
                                    type='password'
                                    placeholder='Enter new password'
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Confirm Password</FormLabel>
                                <Input
                                    type='password'
                                    placeholder='Confirm new password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </FormControl>
                            <Button colorScheme="blue" width="full" onClick={handleResetPassword}>
                                Reset Password
                            </Button>
                        </>
                    )}
                </VStack>
            </Box>
        </Center>
    );
};
