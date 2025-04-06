'use client';

import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, VStack, Button, useColorModeValue, Icon, List, ListItem, ListIcon } from '@chakra-ui/react';
import { CheckCircleIcon, StarIcon, TimeIcon, LockIcon, RepeatIcon, InfoIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function ServicesPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  const services = [
    {
      id: 1,
      title: 'Продажа маркировок',
      description: 'Готовые маркировки для различных категорий товаров',
      icon: StarIcon,
      features: [
        'Маркировки для одежды и обуви',
        'Маркировки для лекарств',
        'Маркировки для табачных изделий',
        'Маркировки для других категорий товаров',
      ],
      href: '/sales',
    },
    {
      id: 2,
      title: 'Доставка маркировок',
      description: 'Удобная доставка маркировок по всей России',
      icon: TimeIcon,
      features: [
        'Доставка почтой России',
        'Курьерская доставка',
        'Экспресс-доставка',
        'Отслеживание отправлений',
      ],
      href: '/delivery',
    },
    {
      id: 3,
      title: 'Электронный документооборот',
      description: 'Автоматизация документооборота для работы с маркировками',
      icon: LockIcon,
      features: [
        'Товарные накладные',
        'Счета-фактуры',
        'Акты приема-передачи',
        'Отчеты о розничных продажах',
      ],
      href: '/edo',
    },
    {
      id: 4,
      title: 'Создание маркировок',
      description: 'Профессиональное создание маркировок через систему "Честный знак"',
      icon: RepeatIcon,
      features: [
        'Регистрация в системе "Честный знак"',
        'Получение электронной подписи',
        'Подключение программного обеспечения',
        'Нанесение маркировок на товары',
      ],
      href: '/marking',
    },
  ];

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" py={10}>
            <Heading as="h1" size="2xl" mb={4}>
              Наши услуги
            </Heading>
            <Text fontSize="xl" color={textColor} mb={6}>
              Полный спектр услуг по работе с маркировками товаров через систему "Честный знак"
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {services.map((service) => (
              <Box
                key={service.id}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                transition="transform 0.3s"
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <Box
                  as={service.icon}
                  w={10}
                  h={10}
                  color="blue.500"
                  mb={4}
                />
                <Heading as="h3" size="lg" mb={2}>
                  {service.title}
                </Heading>
                <Text color={textColor} mb={4}>
                  {service.description}
                </Text>
                <List spacing={2} mb={6}>
                  {service.features.map((feature, index) => (
                    <ListItem key={index} display="flex" alignItems="center">
                      <ListIcon as={CheckCircleIcon} color="green.500" mr={2} />
                      {feature}
                    </ListItem>
                  ))}
                </List>
                <Link href={service.href} passHref>
                  <Button colorScheme="blue" width="100%">
                    Подробнее
                  </Button>
                </Link>
              </Box>
            ))}
          </SimpleGrid>

          <Box
            p={8}
            bg={cardBg}
            borderRadius="lg"
            boxShadow="md"
            textAlign="center"
            mt={8}
          >
            <Heading as="h2" size="lg" mb={4}>
              Нужна помощь с выбором услуги?
            </Heading>
            <Text color={textColor} mb={6}>
              Наши специалисты помогут вам выбрать наиболее подходящую услугу для вашего бизнеса
            </Text>
            <Link href="/sales" passHref>
              <Button colorScheme="blue" size="lg">
                Получить консультацию
              </Button>
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 