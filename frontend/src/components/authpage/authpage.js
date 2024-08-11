

import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button, VStack, Box, Center, Heading, Text } from '@chakra-ui/react';

// Main Component
export const AuthPage = () => {
    const [page, setPage] = useState('start'); // To manage the current page

    // Inline styles for the background image on the start page
    const backgroundImageStyle = {
        backgroundImage: 'url("https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg?w=1060&t=st=1723349897~exp=1723350497~hmac=dcf98c9fe42e516829ad4ee36a41e7c2692c672feea630d445a3317bda0ce419")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    };

    // Render the Start page
    const StartPage = () => (
        <Center style={backgroundImageStyle}>
            <VStack spacing={4} align="center">
                <Button
                    colorScheme="red"
                    width="150px"
                    onClick={() => setPage('signIn')}
                >
                    Get Started
                </Button>
                <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    width="100%"
                    p={4}
                    bg="rgba(0, 0, 0, 0.6)"
                    color="white"
                    borderRadius="md"
                    textAlign="center"
                    boxShadow="md"
                >
                    <Heading as="h3" size="md">About Us</Heading>
                    <Text mt={2}>
                        We are a leading car company dedicated to bringing you the best driving experience.
                        Our cars combine cutting-edge technology with luxurious comfort. 
                        Explore our range of high-performance vehicles and join our community of enthusiasts.
                    </Text>
                </Box>
            </VStack>
        </Center>
    );

    // Render the SignIn page
    const SignIn = () => (
        <Center bg="black" height="100vh">
            <VStack spacing={4} align="stretch" width={{ base: '90%', sm: '80%', md: '400px', lg: '400px' }} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
                <Heading as="h2" size="lg" textAlign="center" color="white">
                    Sign In
                </Heading>
                <FormControl isRequired>
                    <FormLabel color="gray.300">Email address</FormLabel>
                    <Input type='email' placeholder='Enter your email' color="white" bg="gray.700" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel color="gray.300">Password</FormLabel>
                    <Input type='password' placeholder='Enter your password' color="white" bg="gray.700" />
                </FormControl>
                <Button colorScheme="red" width="full">
                    Sign In
                </Button>
                <Text textAlign="center" mt={2} color="blue.500" cursor="pointer" onClick={() => setPage('forgotPassword')}>
                    Forgot Password?
                </Text>
                <Text textAlign="center" mt={2} color="gray.300">
                    Don't have an account?{' '}
                    <Text as="span" color="blue.500" cursor="pointer" onClick={() => setPage('signUp')}>
                        Sign Up
                    </Text>
                </Text>
            </VStack>
        </Center>
    );

    // Render the SignUp page
    const SignUp = () => (
        <Center bg="black" height="100vh">
            <VStack spacing={4} align="stretch" width={{ base: '90%', sm: '80%', md: '400px', lg: '400px' }} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
                <Heading as="h2" size="lg" textAlign="center" color="white">
                    Sign Up
                </Heading>
                <FormControl isRequired>
                    <FormLabel color="gray.300">Name</FormLabel>
                    <Input type='text' placeholder='Enter your name' color="white" bg="gray.700" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel color="gray.300">Phone Number</FormLabel>
                    <Input type='tel' placeholder='Enter your phone number' color="white" bg="gray.700" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel color="gray.300">Email address</FormLabel>
                    <Input type='email' placeholder='Enter your email' color="white" bg="gray.700" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel color="gray.300">New Password</FormLabel>
                    <Input type='password' placeholder='Enter your new password' color="white" bg="gray.700" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel color="gray.300">Confirm Password</FormLabel>
                    <Input type='password' placeholder='Confirm your password' color="white" bg="gray.700" />
                </FormControl>
                <Button colorScheme="red" width="full">
                    Sign Up
                </Button>
                <Text textAlign="center" mt={2} color="gray.300">
                    Already have an account?{' '}
                    <Text as="span" color="blue.500" cursor="pointer" onClick={() => setPage('signIn')}>
                        Sign In
                    </Text>
                </Text>
            </VStack>
        </Center>
    );

    // Render the ForgotPassword page
    const ForgotPassword = () => {
        const [step, setStep] = useState(1);
        const [email, setEmail] = useState('');
        const [otp, setOtp] = useState('');
        const [newPassword, setNewPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');

        const handleSendOtp = () => {
            // Handle sending OTP logic here
            setStep(2);
        };

        const handleVerifyOtp = () => {
            // Handle OTP verification logic here
            setStep(3);
        };

        const handleResetPassword = () => {
            // Handle password reset logic here
            alert('Password reset successfully');
            setPage('signIn');
        };

        return (
            <Center bg="black" height="100vh">
                <VStack spacing={4} align="stretch" width={{ base: '90%', sm: '80%', md: '400px', lg: '400px' }} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
                    {step === 1 && (
                        <>
                            <Heading as="h2" size="lg" textAlign="center" color="white">
                                Forgot Password
                            </Heading>
                            <FormControl isRequired>
                                <FormLabel color="gray.300">Email address</FormLabel>
                                <Input
                                    type='email'
                                    placeholder='Enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    color="white"
                                    bg="gray.700"
                                />
                            </FormControl>
                            <Button colorScheme="red" width="full" onClick={handleSendOtp}>
                                Send OTP
                            </Button>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <Heading as="h2" size="lg" textAlign="center" color="white">
                                Enter OTP
                            </Heading>
                            <FormControl isRequired>
                                <FormLabel color="gray.300">OTP</FormLabel>
                                <Input
                                    type='text'
                                    placeholder='Enter OTP'
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    color="white"
                                    bg="gray.700"
                                />
                            </FormControl>
                            <Button colorScheme="red" width="full" onClick={handleVerifyOtp}>
                                Verify OTP
                            </Button>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <Heading as="h2" size="lg" textAlign="center" color="white">
                                Reset Password
                            </Heading>
                            <FormControl isRequired>
                                <FormLabel color="gray.300">New Password</FormLabel>
                                <Input
                                    type='password'
                                    placeholder='Enter new password'
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    color="white"
                                    bg="gray.700"
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel color="gray.300">Confirm Password</FormLabel>
                                <Input
                                    
                                    type='password'
                                    placeholder='Confirm your password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    color="white"
                                    bg="gray.700"
                                />
                            </FormControl>
                            <Button colorScheme="red" width="full" onClick={handleResetPassword}>
                                Reset Password
                            </Button>
                        </>
                    )}
                </VStack>
            </Center>
        );
    };

    // Main render based on the current page state
    return (
        <>
            {page === 'start' && <StartPage />}
            {page === 'signIn' && <SignIn />}
            {page === 'signUp' && <SignUp />}
            {page === 'forgotPassword' && <ForgotPassword />}
        </>
    );
};

// import React, { useState } from 'react';
// import { FormControl, FormLabel, Input, Button, VStack, Box, Center, Heading, Text } from '@chakra-ui/react';

// // Main Component
// export const AuthPage = () => {
//     const [page, setPage] = useState('start'); // To manage the current page

//     // Inline styles for the background image
//     const backgroundImageStyle = {
//         backgroundImage: 'url("https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         height: '100vh',
//         display: 'flex',
//         flexDirection: 'row', // Changed to row to position the container on the left
//         alignItems: 'center',
//         justifyContent: 'center'
//     };

//     // Render the Start page
//     const StartPage = () => (
//         <Center style={backgroundImageStyle}>
//             <Box
//                 width="300px"
//                 height="300px"
//                 bg="rgba(0, 0, 0, 0.6)"
//                 borderRadius="md"
//                 p={4}
//                 display="flex"
//                 flexDirection="column"
//                 alignItems="center"
//                 justifyContent="center"
//                 position="absolute"
//                 left="10%" // Positioned to the left side of the page
//             >
//                 <Heading as="h1" size="lg" color="white" mb={4}>
//                     Car Companion
//                 </Heading>
//                 <Button
//                     colorScheme="red"
//                     onClick={() => setPage('signIn')}
//                 >
//                     Get Started
//                 </Button>
//             </Box>
//             <VStack spacing={4} align="center" />
//         </Center>
//     );

//     // Render the SignIn page
//     const SignIn = () => (
//         <Center bg="black" height="100vh">
//             <VStack spacing={4} align="stretch" width={{ base: '90%', sm: '80%', md: '400px', lg: '400px' }} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
//                 <Heading as="h2" size="lg" textAlign="center" color="white">
//                     Sign In
//                 </Heading>
//                 <FormControl isRequired>
//                     <FormLabel color="gray.300">Email address</FormLabel>
//                     <Input type='email' placeholder='Enter your email' color="white" bg="gray.700" />
//                 </FormControl>
//                 <FormControl isRequired>
//                     <FormLabel color="gray.300">Password</FormLabel>
//                     <Input type='password' placeholder='Enter your password' color="white" bg="gray.700" />
//                 </FormControl>
//                 <Button colorScheme="red" width="full">
//                     Sign In
//                 </Button>
//                 <Text textAlign="center" mt={2} color="blue.500" cursor="pointer" onClick={() => setPage('forgotPassword')}>
//                     Forgot Password?
//                 </Text>
//                 <Text textAlign="center" mt={2} color="gray.300">
//                     Don't have an account?{' '}
//                     <Text as="span" color="blue.500" cursor="pointer" onClick={() => setPage('signUp')}>
//                         Sign Up
//                     </Text>
//                 </Text>
//             </VStack>
//         </Center>
//     );

//     // Render the SignUp page
//     const SignUp = () => (
//         <Center bg="black" height="100vh">
//             <VStack spacing={4} align="stretch" width={{ base: '90%', sm: '80%', md: '400px', lg: '400px' }} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
//                 <Heading as="h2" size="lg" textAlign="center" color="white">
//                     Sign Up
//                 </Heading>
//                 <FormControl isRequired>
//                     <FormLabel color="gray.300">Email address</FormLabel>
//                     <Input type='email' placeholder='Enter your email' color="white" bg="gray.700" />
//                 </FormControl>
//                 <FormControl isRequired>
//                     <FormLabel color="gray.300">New Password</FormLabel>
//                     <Input type='password' placeholder='Enter your new password' color="white" bg="gray.700" />
//                 </FormControl>
//                 <FormControl isRequired>
//                     <FormLabel color="gray.300">Confirm Password</FormLabel>
//                     <Input type='password' placeholder='Confirm your password' color="white" bg="gray.700" />
//                 </FormControl>
//                 <Button colorScheme="red" width="full">
//                     Sign Up
//                 </Button>
//                 <Text textAlign="center" mt={2} color="gray.300">
//                     Already have an account?{' '}
//                     <Text as="span" color="blue.500" cursor="pointer" onClick={() => setPage('signIn')}>
//                         Sign In
//                     </Text>
//                 </Text>
//             </VStack>
//         </Center>
//     );

//     // Render the ForgotPassword page
//     const ForgotPassword = () => {
//         const [step, setStep] = useState(1);
//         const [email, setEmail] = useState('');
//         const [otp, setOtp] = useState('');
//         const [newPassword, setNewPassword] = useState('');
//         const [confirmPassword, setConfirmPassword] = useState('');

//         const handleSendOtp = () => {
//             // Handle sending OTP logic here
//             setStep(2);
//         };

//         const handleVerifyOtp = () => {
//             // Handle OTP verification logic here
//             setStep(3);
//         };

//         const handleResetPassword = () => {
//             // Handle password reset logic here
//             alert('Password reset successfully');
//             setPage('signIn');
//         };

//         return (
//             <Center bg="black" height="100vh">
//                 <VStack spacing={4} align="stretch" width={{ base: '90%', sm: '80%', md: '400px', lg: '400px' }} p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
//                     {step === 1 && (
//                         <>
//                             <Heading as="h2" size="lg" textAlign="center" color="white">
//                                 Forgot Password
//                             </Heading>
//                             <FormControl isRequired>
//                                 <FormLabel color="gray.300">Email address</FormLabel>
//                                 <Input
//                                     type='email'
//                                     placeholder='Enter your email'
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     color="white"
//                                     bg="gray.700"
//                                 />
//                             </FormControl>
//                             <Button colorScheme="red" width="full" onClick={handleSendOtp}>
//                                 Send OTP
//                             </Button>
//                         </>
//                     )}
//                     {step === 2 && (
//                         <>
//                             <Heading as="h2" size="lg" textAlign="center" color="white">
//                                 Enter OTP
//                             </Heading>
//                             <FormControl isRequired>
//                                 <FormLabel color="gray.300">OTP</FormLabel>
//                                 <Input
//                                     type='text'
//                                     placeholder='Enter OTP'
//                                     value={otp}
//                                     onChange={(e) => setOtp(e.target.value)}
//                                     color="white"
//                                     bg="gray.700"
//                                 />
//                             </FormControl>
//                             <Button colorScheme="red" width="full" onClick={handleVerifyOtp}>
//                                 Verify OTP
//                             </Button>
//                         </>
//                     )}
//                     {step === 3 && (
//                         <>
//                             <Heading as="h2" size="lg" textAlign="center" color="white">
//                                 Reset Password
//                             </Heading>
//                             <FormControl isRequired>
//                                 <FormLabel color="gray.300">New Password</FormLabel>
//                                 <Input
//                                     type='password'
//                                     placeholder='Enter new password'
//                                     value={newPassword}
//                                     onChange={(e) => setNewPassword(e.target.value)}
//                                     color="white"
//                                     bg="gray.700"
//                                 />
//                             </FormControl>
//                             <FormControl isRequired>
//                                 <FormLabel color="gray.300">Confirm Password</FormLabel>
//                                 <Input
//                                     type='password'
//                                     placeholder='Confirm new password'
//                                     value={confirmPassword}
//                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                     color="white"
//                                     bg="gray.700"
//                                 />
//                             </FormControl>
//                             <Button colorScheme="red" width="full" onClick={handleResetPassword}>
//                                 Reset Password
//                             </Button>
//                         </>
//                     )}
//                 </VStack>
//             </Center>
//         );
//     };

//     // Main render based on the current page state
//     return (
//         <>
//             {page === 'start' && <StartPage />}
//             {page === 'signIn' && <SignIn />}
//             {page === 'signUp' && <SignUp />}
//             {page === 'forgotPassword' && <ForgotPassword />}
//         </>
//     );
// };
