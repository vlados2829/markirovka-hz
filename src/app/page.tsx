'use client';

import React from 'react';
import { Box, Container, Heading, Text, Button, SimpleGrid, VStack, useColorModeValue, Image } from '@chakra-ui/react';
import Link from 'next/link';

export default function HomePage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Hero Section */}
      <Box py={20} bg="blue.500" color="white">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <VStack align="start" spacing={6}>
              <Heading as="h1" size="2xl">
                Маркировка товаров через "Честный знак"
              </Heading>
              <Text fontSize="xl">
                Профессиональные услуги по созданию, продаже и доставке маркировок для вашего бизнеса
              </Text>
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} width="100%">
                <Link href="/sales" passHref>
                  <Button size="lg" width="100%" bg="white" color="blue.500" _hover={{ bg: 'gray.100' }}>
                    Купить маркировки
                  </Button>
                </Link>
                <Link href="/marking" passHref>
                  <Button size="lg" width="100%" variant="outline" borderColor="white" color="white" _hover={{ bg: 'blue.600' }}>
                    Создать маркировки
                  </Button>
                </Link>
              </SimpleGrid>
            </VStack>
            <Box display={{ base: 'none', md: 'block' }}>
              <Image src="/images/hero-image.svg" alt="Маркировка товаров" />
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
              Наши услуги
            </Heading>
            <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
              Мы предлагаем полный спектр услуг по работе с маркировками товаров через систему "Честный знак"
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} width="100%">
            <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md" textAlign="center">
              <Heading as="h3" size="md" mb={4}>
                Продажа маркировок
              </Heading>
              <Text color={textColor} mb={4}>
                Готовые маркировки для различных категорий товаров: одежда, обувь, лекарства, табачные изделия и другие
              </Text>
              <Link href="/sales" passHref>
                <Button>Подробнее</Button>
              </Link>
            </Box>

            <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md" textAlign="center">
              <Heading as="h3" size="md" mb={4}>
                Доставка маркировок
              </Heading>
              <Text color={textColor} mb={4}>
                Удобная доставка маркировок по всей России: почтой России, курьером или экспресс-доставкой
              </Text>
              <Link href="/delivery" passHref>
                <Button>Подробнее</Button>
              </Link>
            </Box>

            <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md" textAlign="center">
              <Heading as="h3" size="md" mb={4}>
                Электронный документооборот
              </Heading>
              <Text color={textColor} mb={4}>
                Автоматизация документооборота для работы с маркировками: накладные, счета-фактуры, акты и отчеты
              </Text>
              <Link href="/edo" passHref>
                <Button>Подробнее</Button>
              </Link>
            </Box>
          </SimpleGrid>
        </VStack>
      </Container>

      {/* CTA Section */}
      <Box py={20} bg="gray.100">
        <Container maxW="container.xl">
          <Box
            p={10}
            bg="blue.500"
            color="white"
            borderRadius="lg"
            textAlign="center"
          >
            <Heading as="h2" size="xl" mb={4}>
              Готовы начать работу с маркировками?
            </Heading>
            <Text fontSize="lg" mb={8} maxW="2xl" mx="auto">
              Наши специалисты помогут вам настроить процесс создания и нанесения маркировок на товары
            </Text>
            <Link href="/sales" passHref>
              <Button size="lg" bg="white" color="blue.500" _hover={{ bg: 'gray.100' }}>
                Получить консультацию
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 