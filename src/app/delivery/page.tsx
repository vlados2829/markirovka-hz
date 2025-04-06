'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, Button, useColorModeValue, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import { CheckCircleIcon, TimeIcon, StarIcon, RepeatIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import HomeButton from '@/components/HomeButton';

export default function DeliveryPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  // Информация о доставке
  const deliveryInfo = [
    {
      id: 1,
      title: 'Доставка почтой России',
      description: 'Стандартная доставка маркировок через Почту России',
      price: 'от 300 ₽',
      time: '3-7 дней',
      features: [
        'Отслеживание отправления',
        'Страховка груза',
        'Уведомление о доставке',
        'Возможность получения в отделении'
      ]
    },
    {
      id: 2,
      title: 'Курьерская доставка',
      description: 'Быстрая доставка маркировок курьерской службой',
      price: 'от 500 ₽',
      time: '1-3 дня',
      features: [
        'Доставка до двери',
        'Отслеживание в реальном времени',
        'Страховка груза',
        'Возможность выбора времени доставки'
      ]
    },
    {
      id: 3,
      title: 'Экспресс-доставка',
      description: 'Срочная доставка маркировок в день заказа',
      price: 'от 1000 ₽',
      time: 'В день заказа',
      features: [
        'Доставка в течение нескольких часов',
        'Приоритетная обработка заказа',
        'Персональный курьер',
        'Гарантия своевременной доставки'
      ]
    }
  ];

  // Преимущества доставки
  const advantages = [
    {
      icon: TimeIcon,
      title: 'Быстрая доставка',
      description: 'Доставляем маркировки в кратчайшие сроки в любой регион России'
    },
    {
      icon: StarIcon,
      title: 'Надежность',
      description: 'Гарантируем сохранность и целостность маркировок при транспортировке'
    },
    {
      icon: RepeatIcon,
      title: 'Регулярность',
      description: 'Возможность настройки регулярной доставки маркировок по расписанию'
    }
  ];

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" py={10}>
            <Heading as="h1" size="2xl" mb={4}>
              Доставка маркировок
            </Heading>
            <Text fontSize="xl" color={textColor} mb={6}>
              Быстрая и надежная доставка маркировок в любой регион России
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {deliveryInfo.map((info) => (
              <Box
                key={info.id}
                p={6}
                bg={cardBg}
                borderRadius="lg"
                boxShadow="md"
                transition="transform 0.3s"
                _hover={{ transform: 'translateY(-5px)' }}
              >
                <Heading as="h3" size="lg" mb={2}>
                  {info.title}
                </Heading>
                <Text fontSize="xl" color="blue.500" fontWeight="bold" mb={2}>
                  {info.price}
                </Text>
                <Text fontSize="md" color="green.500" fontWeight="bold" mb={4}>
                  Срок доставки: {info.time}
                </Text>
                <Text color={textColor} mb={4}>
                  {info.description}
                </Text>
                <List spacing={2}>
                  {info.features.map((feature, index) => (
                    <ListItem key={index} display="flex" alignItems="center">
                      <ListIcon as={CheckCircleIcon} color="green.500" mr={2} />
                      <Text>{feature}</Text>
                    </ListItem>
                  ))}
                </List>
                <Button colorScheme="blue" mt={6} width="100%">
                  Заказать доставку
                </Button>
              </Box>
            ))}
          </SimpleGrid>

          <Box py={10}>
            <Heading as="h2" size="xl" mb={6} textAlign="center">
              Преимущества нашей доставки
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
              Нужна помощь с выбором способа доставки?
            </Heading>
            <Text color={textColor} mb={6}>
              Наши специалисты помогут вам выбрать оптимальный способ доставки маркировок
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
      <HomeButton />
    </Box>
  );
} 