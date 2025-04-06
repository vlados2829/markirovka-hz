'use client';

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { CheckCircleIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import BackButton from '@/components/BackButton';

export default function FAQPage() {
  return (
    <Box bg="gray.50" minH="100vh" py={10}>
      <Container maxW="container.xl">
        <BackButton />
        
        <VStack spacing={8} align="stretch">
          <Box textAlign="center" py={10}>
            <Heading as="h1" size="2xl" mb={4}>
              Маркировка товаров
            </Heading>
            <Text fontSize="xl" color="gray.600" mb={6}>
              Вся необходимая информация о системе маркировки товаров
            </Text>
          </Box>

          <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
            <VStack spacing={6} align="stretch">
              <Box>
                <Heading as="h2" size="lg" mb={4}>
                  Что такое маркировка товаров?
                </Heading>
                <Text>
                  Маркировка товаров - это система цифровой идентификации товаров, которая позволяет отслеживать их движение от производителя до конечного потребителя. Каждый товар получает уникальный цифровой код, который содержит информацию о производителе, дате производства, характеристиках товара и других параметрах.
                </Text>
              </Box>

              <Box>
                <Heading as="h2" size="lg" mb={4}>
                  На какие товары распространяется обязательная маркировка?
                </Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Одежда и обувь
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Лекарственные препараты
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Табачные изделия
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Фотокамеры и лампы-вспышки
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Шины и покрышки
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Heading as="h2" size="lg" mb={4}>
                  Какие документы нужны для маркировки?
                </Heading>
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Свидетельство о государственной регистрации юридического лица
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Документы, подтверждающие право на осуществление деятельности
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Договор с оператором системы маркировки
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Heading as="h2" size="lg" mb={4}>
                  Как происходит процесс маркировки?
                </Heading>
                <Text>
                  Процесс маркировки включает следующие этапы:
                </Text>
                <List spacing={3} mt={4}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Регистрация в системе маркировки
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Получение кодов маркировки
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Нанесение кодов на товар
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    Регистрация товара в системе
                  </ListItem>
                </List>
              </Box>

              <Box>
                <Heading as="h2" size="lg" mb={4}>
                  Часто задаваемые вопросы
                </Heading>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h3>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Обязательна ли маркировка для всех товаров?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel pb={4}>
                      Нет, маркировка обязательна только для определенных категорий товаров, которые включены в систему маркировки. Полный список товаров можно найти в 
                      <Link href="https://www.nalog.gov.ru/rn77/related_activities/clem/" color="blue.500" isExternal ml={1}>
                        на официальном сайте ФНС
                        <ExternalLinkIcon mx="2px" />
                      </Link>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h3>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Какие штрафы предусмотрены за отсутствие маркировки?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel pb={4}>
                      За реализацию товаров без маркировки предусмотрены штрафы:
                      <List spacing={2} mt={2}>
                        <ListItem>• Для должностных лиц - от 5 000 до 10 000 рублей</ListItem>
                        <ListItem>• Для юридических лиц - от 50 000 до 300 000 рублей</ListItem>
                        <ListItem>• За повторное нарушение - штрафы увеличиваются</ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h3>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Как проверить подлинность маркировки?
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel pb={4}>
                      Подлинность маркировки можно проверить:
                      <List spacing={2} mt={2}>
                        <ListItem>• Через мобильное приложение "Честный знак"</ListItem>
                        <ListItem>• На официальном сайте системы маркировки</ListItem>
                        <ListItem>• Через терминал сбора данных</ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 