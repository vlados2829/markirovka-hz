'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useColorModeValue,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { FaCheck } from 'react-icons/fa';

export default function Services() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  const services = [
    {
      title: 'Маркировка товаров',
      description: 'Профессиональная маркировка товаров по требованиям Честного знака',
      features: [
        'Создание маркировок для всех типов товаров',
        'Интеграция с системой Честный знак',
        'Консультации по требованиям маркировки',
      ],
    },
    {
      title: 'Автоматизация учета',
      description: 'Внедрение систем автоматизации учета маркированных товаров',
      features: [
        'Настройка системы учета',
        'Интеграция с 1С и другими системами',
        'Обучение персонала',
      ],
    },
    {
      title: 'Техническая поддержка',
      description: 'Комплексная техническая поддержка и сопровождение',
      features: [
        '24/7 поддержка по вопросам маркировки',
        'Регулярные обновления системы',
        'Помощь в решении проблем',
      ],
    },
  ];

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={12}>
          <Box textAlign="center">
            <Heading as="h1" size="2xl" mb={4}>
              Наши услуги
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Полный комплекс услуг по маркировке товаров
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="100%">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </SimpleGrid>

          <Box textAlign="center" w="100%">
            <Button
              colorScheme="blue"
              size="lg"
              as="a"
              href="/calculator"
            >
              Рассчитать стоимость
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}

function ServiceCard({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) {
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Box
      p={6}
      bg={cardBg}
      borderRadius="lg"
      boxShadow="md"
    >
      <VStack spacing={4} align="stretch">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
        <List spacing={2}>
          {features.map((feature, index) => (
            <ListItem key={index}>
              <ListIcon as={FaCheck} color="green.500" />
              {feature}
            </ListItem>
          ))}
        </List>
      </VStack>
    </Box>
  );
} 