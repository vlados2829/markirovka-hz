'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Select,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Divider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import Link from 'next/link';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export default function CalculatorPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const [productType, setProductType] = useState('');
  const [quantity, setQuantity] = useState(100);
  const [deliveryType, setDeliveryType] = useState('');
  const [edo, setEdo] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const productTypes = [
    { value: 'clothing', label: 'Одежда', price: 0.5 },
    { value: 'shoes', label: 'Обувь', price: 0.7 },
    { value: 'medicine', label: 'Лекарства', price: 1.2 },
    { value: 'tobacco', label: 'Табачные изделия', price: 0.8 },
  ];

  const deliveryTypes = [
    { value: 'post', label: 'Почта России', price: 300 },
    { value: 'courier', label: 'Курьерская доставка', price: 500 },
    { value: 'express', label: 'Экспресс-доставка', price: 1000 },
  ];

  const calculatePrice = () => {
    let price = 0;

    // Цена маркировок
    const selectedProduct = productTypes.find((type) => type.value === productType);
    if (selectedProduct) {
      price += selectedProduct.price * quantity;
    }

    // Цена доставки
    const selectedDelivery = deliveryTypes.find((type) => type.value === deliveryType);
    if (selectedDelivery) {
      price += selectedDelivery.price;
    }

    // Цена ЭДО
    if (edo) {
      price += 2000; // Базовая цена за ЭДО
    }

    setTotalPrice(price);
  };

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" py={10}>
            <Heading as="h1" size="2xl" mb={4}>
              Калькулятор стоимости маркировок
            </Heading>
            <Text fontSize="xl" color={textColor} mb={6}>
              Рассчитайте стоимость маркировок и дополнительных услуг
            </Text>
          </Box>

          <Box
            p={8}
            bg={cardBg}
            borderRadius="lg"
            boxShadow="md"
            borderWidth="1px"
            borderColor={borderColor}
          >
            <VStack spacing={6} align="stretch">
              <FormControl>
                <FormLabel>Тип товара</FormLabel>
                <Select
                  placeholder="Выберите тип товара"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                >
                  {productTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Количество маркировок</FormLabel>
                <NumberInput
                  min={1}
                  max={1000000}
                  value={quantity}
                  onChange={(_, value) => setQuantity(value)}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl>
                <FormLabel>Способ доставки</FormLabel>
                <Select
                  placeholder="Выберите способ доставки"
                  value={deliveryType}
                  onChange={(e) => setDeliveryType(e.target.value)}
                >
                  {deliveryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Электронный документооборот (ЭДО)</FormLabel>
                <Select
                  placeholder="Выберите опцию"
                  value={edo ? 'yes' : 'no'}
                  onChange={(e) => setEdo(e.target.value === 'yes')}
                >
                  <option value="yes">Да</option>
                  <option value="no">Нет</option>
                </Select>
              </FormControl>

              <Button colorScheme="blue" size="lg" onClick={calculatePrice}>
                Рассчитать стоимость
              </Button>

              {totalPrice > 0 && (
                <Box
                  p={6}
                  bg="blue.50"
                  borderRadius="md"
                  borderWidth="1px"
                  borderColor="blue.200"
                >
                  <Heading as="h3" size="md" mb={2}>
                    Итоговая стоимость:
                  </Heading>
                  <Text fontSize="2xl" fontWeight="bold" color="blue.600">
                    {totalPrice.toLocaleString()} ₽
                  </Text>
                  <Text fontSize="sm" color={textColor} mt={2}>
                    * Цены указаны приблизительно и могут меняться в зависимости от объема заказа и других факторов
                  </Text>
                </Box>
              )}

              <Divider />

              <Alert status="info" borderRadius="md">
                <AlertIcon />
                <Box>
                  <AlertTitle>Нужна помощь с расчетом?</AlertTitle>
                  <AlertDescription>
                    Наши специалисты помогут вам рассчитать точную стоимость маркировок и подобрать оптимальные условия для вашего бизнеса.
                  </AlertDescription>
                </Box>
              </Alert>

              <Button
                as="a"
                href="https://t.me/gilman_188"
                target="_blank"
                colorScheme="blue"
                variant="outline"
                width="100%"
                leftIcon={<ExternalLinkIcon />}>
                Получить консультацию
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 