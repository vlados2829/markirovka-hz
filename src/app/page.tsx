'use client';

import { Box, Button, Container, Heading, Text, VStack, HStack, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

export default function Home() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box bg={bgColor} minH="100vh">
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8} align="stretch">
          {/* Hero Section */}
          <Box textAlign="center" py={20}>
            <Heading as="h1" size="2xl" mb={4}>
              Маркировка товаров "Честный знак"
            </Heading>
            <Text fontSize="xl" color={textColor} mb={8}>
              Профессиональные услуги по маркировке товаров и автоматизации учета
            </Text>
            <HStack spacing={4} justify="center">
              <Link href="/calculator" passHref>
                <Button colorScheme="blue" size="lg">
                  Рассчитать стоимость
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button colorScheme="green" size="lg">
                  Наши услуги
                </Button>
              </Link>
            </HStack>
          </Box>

          {/* Features Section */}
          <Box py={10}>
            <VStack spacing={8}>
              <Box textAlign="center">
                <Heading as="h2" size="xl" mb={4}>
                  Наши преимущества
                </Heading>
                <Text color={textColor}>
                  Полный комплекс услуг по маркировке товаров
                </Text>
              </Box>
              <HStack spacing={8} justify="center" wrap="wrap">
                <FeatureCard
                  title="Маркировка товаров"
                  description="Профессиональная маркировка товаров по требованиям Честного знака"
                />
                <FeatureCard
                  title="Автоматизация учета"
                  description="Внедрение систем автоматизации учета маркированных товаров"
                />
                <FeatureCard
                  title="Гарантия качества"
                  description="100% гарантия соответствия требованиям законодательства"
                />
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Box
      p={6}
      bg={cardBg}
      borderRadius="lg"
      boxShadow="md"
      maxW="300px"
      textAlign="center"
    >
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Text color={useColorModeValue('gray.600', 'gray.400')}>
        {description}
      </Text>
    </Box>
  );
} 