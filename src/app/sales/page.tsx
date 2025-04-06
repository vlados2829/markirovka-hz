'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, Button, useColorModeValue, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import HomeButton from '@/components/HomeButton';

export default function SalesPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  // Примеры товаров для продажи
  const products = [
    {
      id: 1,
      title: 'Маркировка одежды',
      description: 'Готовые маркировки для одежды различных категорий',
      price: 'от 5 ₽/шт',
      features: [
        'Соответствие требованиям "Честного знака"',
        'Быстрая доставка',
        'Гибкие условия оплаты',
        'Техническая поддержка'
      ]
    },
    {
      id: 2,
      title: 'Маркировка обуви',
      description: 'Маркировки для обуви всех размеров и типов',
      price: 'от 7 ₽/шт',
      features: [
        'Высокое качество печати',
        'Устойчивость к внешним воздействиям',
        'Индивидуальный дизайн',
        'Консультация специалиста'
      ]
    },
    {
      id: 3,
      title: 'Маркировка лекарств',
      description: 'Специальные маркировки для фармацевтической продукции',
      price: 'от 10 ₽/шт',
      features: [
        'Соответствие требованиям Росздравнадзора',
        'Защита от подделок',
        'Высокая точность нанесения',
        'Полное сопровождение'
      ]
    },
    {
      id: 4,
      title: 'Маркировка табака',
      description: 'Маркировки для табачной продукции',
      price: 'от 8 ₽/шт',
      features: [
        'Соответствие требованиям ЕАЭС',
        'Быстрое нанесение',
        'Долговечность',
        'Индивидуальный подход'
      ]
    }
  ];

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" py={10}>
            <Heading as="h1" size="2xl" mb={4}>
              Продажа маркировок
            </Heading>
            <Text fontSize="xl" color={textColor} mb={6}>
              Готовые маркировки для различных категорий товаров
            </Text>
            <Link href="/calculator" passHref>
              <Button colorScheme="blue" size="lg">
                Рассчитать стоимость
              </Button>
            </Link>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {products.map((product) => (
              <Box
                key={product.id}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                transition="transform 0.3s"
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <Heading as="h3" size="lg" mb={2}>
                  {product.title}
                </Heading>
                <Text fontSize="xl" color="blue.500" fontWeight="bold" mb={4}>
                  {product.price}
                </Text>
                <Text color={textColor} mb={4}>
                  {product.description}
                </Text>
                <List spacing={2}>
                  {product.features.map((feature, index) => (
                    <ListItem key={index} display="flex" alignItems="center">
                      <ListIcon as={CheckCircleIcon} color="green.500" mr={2} />
                      <Text>{feature}</Text>
                    </ListItem>
                  ))}
                </List>
                <Button colorScheme="blue" mt={6} width="100%">
                  Заказать
                </Button>
              </Box>
            ))}
          </SimpleGrid>

          <Box textAlign="center" py={10}>
            <Heading as="h2" size="xl" mb={4}>
              Почему выбирают нас?
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mt={6}>
              <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md">
                <Heading as="h3" size="md" mb={3}>
                  Качество
                </Heading>
                <Text color={textColor}>
                  Мы используем только качественные материалы и современное оборудование для создания маркировок.
                </Text>
              </Box>
              <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md">
                <Heading as="h3" size="md" mb={3}>
                  Скорость
                </Heading>
                <Text color={textColor}>
                  Быстрое производство и доставка маркировок в любой регион России.
                </Text>
              </Box>
              <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md">
                <Heading as="h3" size="md" mb={3}>
                  Поддержка
                </Heading>
                <Text color={textColor}>
                  Полное сопровождение и техническая поддержка на всех этапах сотрудничества.
                </Text>
              </Box>
            </SimpleGrid>
          </Box>
        </VStack>
      </Container>
      <HomeButton />
    </Box>
  );
} 