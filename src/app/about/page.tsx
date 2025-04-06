'use client';

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Button, useColorModeValue, Image, List, ListItem, ListIcon, Flex } from '@chakra-ui/react';
import { CheckCircleIcon, StarIcon, TimeIcon, LockIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function AboutPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  const teamMembers = [
    {
      id: 1,
      name: 'Александр Иванов',
      position: 'Генеральный директор',
      description: 'Более 15 лет опыта в сфере маркировки товаров и электронного документооборота',
    },
    {
      id: 2,
      name: 'Елена Петрова',
      position: 'Руководитель отдела продаж',
      description: 'Специалист по работе с клиентами и подбору оптимальных решений для бизнеса',
    },
    {
      id: 3,
      name: 'Дмитрий Сидоров',
      position: 'Технический директор',
      description: 'Эксперт по интеграции систем маркировки и электронного документооборота',
    },
  ];

  const values = [
    {
      id: 1,
      title: 'Качество',
      description: 'Мы гарантируем высокое качество всех наших услуг и продуктов',
      icon: StarIcon,
    },
    {
      id: 2,
      title: 'Надежность',
      description: 'Мы работаем только с проверенными партнерами и поставщиками',
      icon: LockIcon,
    },
    {
      id: 3,
      title: 'Скорость',
      description: 'Мы выполняем все заказы в кратчайшие сроки без потери качества',
      icon: TimeIcon,
    },
  ];

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          {/* Hero Section */}
          <Box textAlign="center" py={10}>
            <Heading as="h1" size="2xl" mb={4}>
              О компании "Честный знак"
            </Heading>
            <Text fontSize="xl" color={textColor} mb={6} maxW="3xl" mx="auto">
              Мы помогаем бизнесу соответствовать требованиям законодательства в сфере маркировки товаров
            </Text>
          </Box>

          {/* Mission Section */}
          <Box py={10}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
              <Box>
                <Heading as="h2" size="xl" mb={4}>
                  Наша миссия
                </Heading>
                <Text fontSize="lg" color={textColor} mb={6}>
                  Мы стремимся сделать процесс маркировки товаров максимально простым и эффективным для наших клиентов. Наша цель - помочь бизнесу соответствовать требованиям законодательства и повысить прозрачность товарооборота.
                </Text>
                <Text fontSize="lg" color={textColor}>
                  Мы верим, что честный бизнес - это основа процветающей экономики, и мы гордимся тем, что помогаем нашим клиентам соответствовать высоким стандартам качества и прозрачности.
                </Text>
              </Box>
              <Box
                p={6}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                textAlign="center"
              >
                <Image
                  src="/images/mission-image.svg"
                  alt="Миссия компании"
                  mx="auto"
                  mb={6}
                />
                <Heading as="h3" size="md" mb={4}>
                  Наши ценности
                </Heading>
                <List spacing={3} textAlign="left">
                  {values.map((value) => (
                    <ListItem key={value.id} display="flex" alignItems="center">
                      <ListIcon as={value.icon} color="blue.500" mr={2} />
                      <Box>
                        <Text fontWeight="bold">{value.title}</Text>
                        <Text fontSize="sm" color={textColor}>
                          {value.description}
                        </Text>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Team Section */}
          <Box py={10}>
            <Box textAlign="center" mb={10}>
              <Heading as="h2" size="xl" mb={4}>
                Наша команда
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="3xl" mx="auto">
                Профессионалы с многолетним опытом работы в сфере маркировки товаров и электронного документооборота
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {teamMembers.map((member) => (
                <Box
                  key={member.id}
                  p={6}
                  bg={cardBg}
                  borderRadius="lg"
                  boxShadow="md"
                  textAlign="center"
                >
                  <Box
                    w={20}
                    h={20}
                    bg="blue.100"
                    borderRadius="full"
                    mx="auto"
                    mb={4}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text fontSize="2xl" fontWeight="bold" color="blue.500">
                      {member.name.charAt(0)}
                    </Text>
                  </Box>
                  <Heading as="h3" size="md" mb={1}>
                    {member.name}
                  </Heading>
                  <Text color="blue.500" mb={3}>
                    {member.position}
                  </Text>
                  <Text color={textColor}>
                    {member.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* CTA Section */}
          <Box
            p={10}
            bg="blue.500"
            color="white"
            borderRadius="lg"
            textAlign="center"
          >
            <Heading as="h2" size="xl" mb={4}>
              Готовы начать работу с нами?
            </Heading>
            <Text fontSize="lg" mb={8} maxW="2xl" mx="auto">
              Свяжитесь с нами, чтобы узнать больше о наших услугах и получить персональное предложение
            </Text>
            <Link href="/sales" passHref>
              <Button size="lg" bg="white" color="blue.500" _hover={{ bg: 'gray.100' }}>
                Связаться с нами
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 