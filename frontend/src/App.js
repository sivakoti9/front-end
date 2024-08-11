
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

import { AuthPage } from './components/authpage/authpage';
import { ForgotPassword } from './components/forgetpassword/forgetpassword';
import LandingPage from './components/landing/landing';
// import { Education } from './components/education/education';
// import { Personal } from './components/personal/personal';
// import  { SignIn } from './components/signin/signin';
// import { SignUp } from './components/signup/signup';
// import { Skills } from './components/skills/skills';
// import { UseStateFunction } from './components/usestate&useeffect/usestate@useeffect';

function App() {
  return (
    <>
    <LandingPage/>
    {/* <SignUp/> */}
    {/* <SignIn/> */}
   {/* <ForgotPassword/> */}
   {/* <AuthPage/> */}
 {/* <UseStateFunction/>
    <Personal/>
    <Skills/>
    <Education/>
     */}

    </>
  );
}

export default App;
