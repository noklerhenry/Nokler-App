// import { Router, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import { Home } from './Components/Home';
import {Box,  Flex, Button, useColorMode, FormControl, Input, useToast } from '@chakra-ui/react'
import { Fragment } from 'react';
//ThemeProvider, theme, CSSReset, ColorModeProvider, 

function App() {

  const toast = useToast();
  const {colorMode, toggleColorMode} = useColorMode();

  return (

    <Fragment>
      <NavBar />
      <Home />
      <Flex align='center' justify='center' height='100vh' direction='column' width='400px'>
        <Button size='lg' mt='20px' onClick={() => toggleColorMode()}>Cambiar Theme</Button>
        <FormControl mt='20px'>
          <Input placeholder='Password' size='lg' type='password' width='200px' mt='20px'/>
        </FormControl>
        <Button mt='20px' variantColor='green' size='lg' onClick={() => toast({
          isClosable: false,
          title: 'Entraste ok',
          description: 'sos un campeon',
          duration: 5000,
          position: 'bottom-right',
          status: 'success'
        }       )}>Access</Button>
        <Flex width='80%' mt='20px' padding='10px'>
          <Box bg='brand.primary' w='100%'>
          Hey Henry, soy un Box de Chakra
           </Box>
        </Flex>
      </Flex>



    </Fragment>
  );
};

export default App;
