'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';

export default function About() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              О нашей компании
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Профессиональные услуги по маркировке товаров
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
            <FeatureCard
              icon={FaShieldAlt}
              title="Гарантия качества"
              description="Мы гарантируем 100% соответствие требованиям Честного знака и законодательства"
            />
            <FeatureCard
              icon={FaChartLine}
              title="Опыт работы"
              description="Более 5 лет успешной работы на рынке маркировки товаров"
            />
            <FeatureCard
              icon={FaUsers}
              title="Команда экспертов"
              description="Профессиональная команда специалистов в области маркировки"
            />
          </SimpleGrid>

          <Box
            p={8}
            bg={cardBg}
            borderRadius="lg"
            boxShadow="md"
            w="100%"
          >
            <VStack spacing={4} align="stretch">
              <Heading as="h2" size="lg">
                Наша миссия
              </Heading>
              <Text>
                Мы помогаем бизнесу соответствовать требованиям законодательства
                в области маркировки товаров, предоставляя профессиональные
                услуги и решения для автоматизации учета.
              </Text>
              <Text>
                Наша цель - сделать процесс маркировки товаров максимально
                простым и эффективным для наших клиентов.
              </Text>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Box
      p={6}
      bg={cardBg}
      borderRadius="lg"
      boxShadow="md"
      textAlign="center"
    >
      <Icon as={icon} w={10} h={10} color="blue.500" mb={4} />
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </Box>
  );
} 