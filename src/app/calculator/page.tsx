'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  useColorModeValue,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

export default function Calculator() {
  const [quantity, setQuantity] = useState<string>('');
  const [total, setTotal] = useState<number | null>(null);
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  const calculateTotal = () => {
    const num = parseInt(quantity);
    if (!isNaN(num) && num > 0) {
      setTotal(num * 10); // 10 рублей за маркировку
    } else {
      setTotal(null);
    }
  };

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.md">
        <VStack spacing={8}>
          <Heading as="h1" size="xl" textAlign="center">
            Калькулятор стоимости маркировок
          </Heading>
          
          <Box
            p={8}
            bg={cardBg}
            borderRadius="lg"
            boxShadow="md"
            w="100%"
          >
            <VStack spacing={6}>
              <FormControl>
                <FormLabel>Количество маркировок</FormLabel>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Введите количество"
                />
              </FormControl>

              <Button
                colorScheme="blue"
                size="lg"
                w="100%"
                onClick={calculateTotal}
              >
                Рассчитать стоимость
              </Button>

              {total !== null && (
                <Alert status="success">
                  <AlertIcon />
                  <Text>
                    Общая стоимость: {total} рублей
                    <Text as="span" fontSize="sm" ml={2}>
                      (10 рублей за маркировку)
                    </Text>
                  </Text>
                </Alert>
              )}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 