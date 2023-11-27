import React, { useState } from 'react';
import { Box, Button, Center, ChakraProvider, Text, Flex } from '@chakra-ui/react';

function ContadorResponsive() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <Box>
      <Flex align="center" justify="center"h="50vh">
      <Box p={4} bg="gray.200" borderRadius="md">
        <Center>
          <Text fontSize="4xl" fontWeight="bold" mb={4}>
            Contador: {contador}
          </Text>
        </Center>
        <Center>
          <Button boxShadow='md' p='6' rounded='md' bg='white'  onClick={incrementar} mr={2}>
            Incrementar
          </Button>
          <Button boxShadow='md' p='6' rounded='md' bg='white' onClick={decrementar}>
            Decrementar
          </Button>
        </Center>
        
      </Box>
      </Flex>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider>
      <ContadorResponsive />
    </ChakraProvider>
  );
}

export default App;

