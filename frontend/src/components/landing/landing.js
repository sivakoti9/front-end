import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import { FormControl, FormLabel, Input, Button, VStack, Box, Center, Heading, Text } from '@chakra-ui/react';

// Main Component
const App = () => {
    const [page, setPage] = useState('landing'); // To manage the current page

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

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

    // Landing Page
    const LandingPage = () => (
        <LandingPageWrapper>
            <Header style={{ backgroundImage: `url("https://empiremotorworld.com.my/wp-content/uploads/2017/10/car-banner1.jpg")` }}>
                <div className="header-content">
                    <h1 data-aos="fade-down">Car Companion</h1>
                    <p data-aos="fade-up">Transforming Car Manual Interactions with AI</p>
                    <button className="button" data-aos="zoom-in" onClick={() => setPage('auth')}>
                        Get Started
                    </button>
                </div>
            </Header>

            <Section className="features" data-aos="fade-up">
                <h2>Features</h2>
                <div className="feature-cards">
                    <Card data-aos="fade-up" data-aos-delay="100">
                        <h3>AI-Driven Assistance</h3>
                        <p>Get detailed information and guidance about your car using our AI-driven assistant.</p>
                    </Card>
                    <Card data-aos="fade-up" data-aos-delay="200">
                        <h3>Image and Text Extraction</h3>
                        <p>Extract and interpret images, tables, and text from car manuals for quick answers.</p>
                    </Card>
                    <Card data-aos="fade-up" data-aos-delay="300">
                        <h3>Intelligent Query Handling</h3>
                        <p>Ask any question and receive the most relevant information instantly.</p>
                    </Card>
                </div>
            </Section>

            <Section className="about" data-aos="fade-up">
                <h2>About Us</h2>
                <p>
                    CarCompanion is your ultimate assistant for all car-related queries. Our AI-driven virtual assistant provides you with detailed information about your car, including user manuals, maintenance schedules, and more. Whether you're a new car owner or a seasoned driver, CarCompanion is here to help you every step of the way.
                </p>
            </Section>

            <Footer>
                <p>&copy; 2024 Car Companion. All rights reserved.</p>
            </Footer>
        </LandingPageWrapper>
    );

    // Authentication Page
    const AuthPage = () => {
        const [page, setPage] = useState('start'); // To manage the current page

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

    return (
        <>
            {page === 'landing' && <LandingPage />}
            {page === 'auth' && <AuthPage />}
        </>
    );
};

// Styled Components
const LandingPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Header = styled.header`
    text-align: center;
    padding: 100px 20px;
    background-size: cover;
    background-position: center;
    color: #fff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .header-content {
        position: relative;
        z-index: 2;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
        z-index: 1;
    }

    h1, p {
        position: relative;
        z-index: 2;
        margin: 0;
        font-size: 4em;
    }

    h1 {
        font-size: 4.5em;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
    }

    p {
        font-size: 2em;
        margin: 20px 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    }

    .button {
        background-color: #f00;
        color: #fff;
        padding: 15px 30px;
        border: none;
        cursor: pointer;
        font-size: 1em;
        margin: 20px 0;
        position: relative;
        z-index: 2;
        border-radius: 10px;
    }

    .button:hover {
        background-color: #c00;
    }
`;

const Section = styled.section`
    padding: 50px 20px;
    text-align: center;

    h2 {
        font-size: 2.5em;
        margin-bottom: 20px;
    }
`;

const Card = styled.div`
    background: #222;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    h3 {
        font-size: 1.5em;
        margin-bottom: 10px;
    }

    p {
        font-size: 1em;
        line-height: 1.6;
    }
`;

const Footer = styled.footer`
    background: #111;
    padding: 20px;
    text-align: center;

    p {
        margin: 0;
        font-size: 0.9em;
    }
`;

export default App;
