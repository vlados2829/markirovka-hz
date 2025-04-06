'use client';

import { Box, Container, Heading, Text, SimpleGrid, VStack, Button, useColorModeValue, List, ListItem, ListIcon, Image, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { CheckCircleIcon, InfoIcon, WarningIcon, StarIcon, RepeatIcon, TimeIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function MarkingPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  // Этапы создания маркировок
  const steps = [
    {
      id: 1,
      title: 'Регистрация в системе "Честный знак"',
      description: 'Регистрация в системе "Честный знак" и получение доступа к личному кабинету',
      icon: InfoIcon
    },
    {
      id: 2,
      title: 'Получение электронной подписи',
      description: 'Получение электронной подписи для работы с системой "Честный знак"',
      icon: LockIcon
    },
    {
      id: 3,
      title: 'Подключение программного обеспечения',
      description: 'Подключение программного обеспечения для работы с системой "Честный знак"',
      icon: RepeatIcon
    },
    {
      id: 4,
      title: 'Создание маркировок',
      description: 'Создание маркировок для товаров через систему "Честный знак"',
      icon: StarIcon
    },
    {
      id: 5,
      title: 'Нанесение маркировок на товары',
      description: 'Нанесение маркировок на товары с использованием специального оборудования',
      icon: TimeIcon
    }
  ];

  // Часто задаваемые вопросы
  const faqs = [
    {
      id: 1,
      question: 'Что такое маркировка "Честный знак"?',
      answer: 'Маркировка "Честный знак" - это система цифровой маркировки товаров, которая позволяет отслеживать их движение от производителя до конечного потребителя. Она помогает бороться с контрафактом и повышает прозрачность товарооборота.'
    },
    {
      id: 2,
      question: 'Какие товары подлежат обязательной маркировке?',
      answer: 'К товарам, подлежащим обязательной маркировке, относятся: одежда, обувь, лекарства, табачные изделия, молочная продукция, вода, шины и автопокрышки, фотоаппараты и лампы-вспышки, товары легкой промышленности и другие категории, определенные законодательством.'
    },
    {
      id: 3,
      question: 'Сколько стоит создание маркировок?',
      answer: 'Стоимость создания маркировок зависит от категории товара, объема производства и других факторов. Для получения точной информации о стоимости, воспользуйтесь нашим калькулятором или свяжитесь с нами для консультации.'
    },
    {
      id: 4,
      question: 'Какое оборудование нужно для нанесения маркировок?',
      answer: 'Для нанесения маркировок требуется специальное оборудование: принтеры для печати маркировок, сканеры для считывания кодов, программное обеспечение для работы с системой "Честный знак". Мы можем помочь вам с выбором и настройкой необходимого оборудования.'
    }
  ];

  return (
    <Box bg={bgColor} minH="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" py={10}>
            <Heading as="h1" size="2xl" mb={4}>
              Создание маркировок через "Честный знак"
            </Heading>
            <Text fontSize="xl" color={textColor} mb={6}>
              Профессиональное создание и нанесение маркировок на товары
            </Text>
          </Box>

          <Box py={6}>
            <Heading as="h2" size="xl" mb={6} textAlign="center">
              Этапы создания маркировок
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {steps.map((step) => (
                <Box
                  key={step.id}
                  p={6}
                  bg={cardBg}
                  borderRadius="lg"
                  boxShadow="md"
                  transition="transform 0.3s"
                  _hover={{ transform: 'translateY(-5px)' }}
                >
                  <Box
                    as={step.icon}
                    w={10}
                    h={10}
                    color="blue.500"
                    mb={4}
                  />
                  <Heading as="h3" size="md" mb={2}>
                    {step.title}
                  </Heading>
                  <Text color={textColor}>
                    {step.description}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          <Box py={6}>
            <Heading as="h2" size="xl" mb={6} textAlign="center">
              Преимущества работы с нами
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md" textAlign="center">
                <Box
                  as={CheckCircleIcon}
                  w={10}
                  h={10}
                  color="green.500"
                  mx="auto"
                  mb={4}
                />
                <Heading as="h3" size="md" mb={3}>
                  Опыт
                </Heading>
                <Text color={textColor}>
                  Более 5 лет опыта в создании и нанесении маркировок на товары
                </Text>
              </Box>
              <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md" textAlign="center">
                <Box
                  as={WarningIcon}
                  w={10}
                  h={10}
                  color="orange.500"
                  mx="auto"
                  mb={4}
                />
                <Heading as="h3" size="md" mb={3}>
                  Гарантия
                </Heading>
                <Text color={textColor}>
                  100% гарантия соответствия требованиям законодательства
                </Text>
              </Box>
              <Box p={6} bg={cardBg} borderRadius="lg" boxShadow="md" textAlign="center">
                <Box
                  as={TimeIcon}
                  w={10}
                  h={10}
                  color="blue.500"
                  mx="auto"
                  mb={4}
                />
                <Heading as="h3" size="md" mb={3}>
                  Скорость
                </Heading>
                <Text color={textColor}>
                  Быстрое создание и нанесение маркировок на товары
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box py={6}>
            <Heading as="h2" size="xl" mb={6} textAlign="center">
              Часто задаваемые вопросы
            </Heading>
            <Accordion allowMultiple>
              {faqs.map((faq) => (
                <AccordionItem key={faq.id}>
                  <h2>
                    <AccordionButton py={4}>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {faq.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
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
              Готовы начать работу с маркировками?
            </Heading>
            <Text color={textColor} mb={6}>
              Наши специалисты помогут вам настроить процесс создания и нанесения маркировок на товары
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