'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, Button, useColorModeValue, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { CheckCircleIcon, LockIcon, RepeatIcon, TimeIcon, ViewIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function EDOPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  // Типы документов ЭДО
  const documentTypes = [
    {
      id: 1,
      title: 'Товарные накладные',
      description: 'Электронные товарные накладные для маркированных товаров',
      icon: ViewIcon,
      features: [
        'Автоматическое формирование',
        'Юридическая значимость',
        'Интеграция с 1С',
        'Архивация документов'
      ]
    },
    {
      id: 2,
      title: 'Счета-фактуры',
      description: 'Электронные счета-фактуры для маркированных товаров',
      icon: ViewIcon,
      features: [
        'Соответствие требованиям ФНС',
        'Автоматическая отправка',
        'Подписание ЭЦП',
        'Хранение в облаке'
      ]
    },
    {
      id: 3,
      title: 'Акты приема-передачи',
      description: 'Электронные акты приема-передачи маркированных товаров',
      icon: ViewIcon,
      features: [
        'Шаблоны документов',
        'Массовое формирование',
        'Подписание всеми участниками',
        'Уведомления о подписании'
      ]
    },
    {
      id: 4,
      title: 'Отчеты о розничных продажах',
      description: 'Электронные отчеты о розничных продажах маркированных товаров',
      icon: ViewIcon,
      features: [
        'Автоматическое формирование',
        'Интеграция с ККТ',
        'Соответствие требованиям ЦРПТ',
        'Регулярная отправка'
      ]
    }
  ];

  // Преимущества ЭДО
  const advantages = [
    {
      icon: TimeIcon,
      title: 'Экономия времени',
      description: 'Сокращение времени на обработку документов до 80%'
    },
    {
      icon: LockIcon,
      title: 'Безопасность',
      description: 'Защита документов от подделки и несанкционированного доступа'
    },
    {
      icon: RepeatIcon,
      title: 'Автоматизация',
      description: 'Автоматическое формирование и отправка документов'
    }
  ];

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" py={10}>
            <Heading as="h1" size="2xl" mb={4}>
              Электронный документооборот
            </Heading>
            <Text fontSize="xl" color={textColor} mb={6}>
              Автоматизация формирования и обмена документами для маркированных товаров
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {documentTypes.map((doc) => (
              <Box
                key={doc.id}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                transition="transform 0.3s"
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <Box
                  as={doc.icon}
                  w={10}
                  h={10}
                  color="blue.500"
                  mb={4}
                />
                <Heading as="h3" size="lg" mb={2}>
                  {doc.title}
                </Heading>
                <Text color={textColor} mb={4}>
                  {doc.description}
                </Text>
                <List spacing={2}>
                  {doc.features.map((feature, index) => (
                    <ListItem key={index} display="flex" alignItems="center">
                      <ListIcon as={CheckCircleIcon} color="green.500" mr={2} />
                      <Text>{feature}</Text>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </SimpleGrid>

          <Box py={10}>
            <Heading as="h2" size="xl" mb={6} textAlign="center">
              Преимущества электронного документооборота
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {advantages.map((advantage, index) => (
                <Box
                  key={index}
                  p={6}
                  bg={cardBg}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                >
                  <Box
                    as={advantage.icon}
                    w={10}
                    h={10}
                    color="blue.500"
                    mx="auto"
                    mb={4}
                  />
                  <Heading as="h3" size="md" mb={3}>
                    {advantage.title}
                  </Heading>
                  <Text color={textColor}>
                    {advantage.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box
            p={8}
            bg={cardBg}
            borderRadius="lg"
            boxShadow="md"
            textAlign="center"
            mt={8}
          >
            <Heading as="h2" size="lg" mb={4}>
              Готовы автоматизировать документооборот?
            </Heading>
            <Text color={textColor} mb={6}>
              Наши специалисты помогут вам настроить электронный документооборот для вашего бизнеса
            </Text>
            <Button
              as="a"
              href="https://t.me/gilman_188"
              target="_blank"
              colorScheme="blue"
              variant="outline"
              size="lg"
              leftIcon={<ExternalLinkIcon />}>
              Получить консультацию
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 