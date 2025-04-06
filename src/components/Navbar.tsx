'use client';

import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link as ChakraLink,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Link from 'next/link';

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Container maxW="container.xl">
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('blue.500', 'white')}
              fontWeight="bold"
              fontSize="xl">
              <Link href="/" passHref>
                <ChakraLink>Честный знак</ChakraLink>
              </Link>
            </Text>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <Stack direction={'row'} spacing={4}>
                {Links.map((link) => (
                  <Box key={link.name}>
                    <Link href={link.href} passHref>
                      <ChakraLink
                        p={2}
                        fontSize={'sm'}
                        fontWeight={500}
                        color={useColorModeValue('gray.600', 'gray.200')}
                        _hover={{
                          textDecoration: 'none',
                          color: useColorModeValue('blue.500', 'white'),
                        }}>
                        {link.name}
                      </ChakraLink>
                    </Link>
                  </Box>
                ))}
              </Stack>
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Link href="/sales" passHref>
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'blue.500'}
                href={'#'}
                _hover={{
                  bg: 'blue.400',
                }}>
                Купить маркировки
              </Button>
            </Link>
          </Stack>
        </Container>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          display={{ md: 'none' }}>
          {Links.map((link) => (
            <Stack key={link.name} spacing={4}>
              <Link href={link.href} passHref>
                <ChakraLink
                  py={2}
                  justify={'space-between'}
                  align={'center'}
                  _hover={{
                    textDecoration: 'none',
                  }}>
                  <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {link.name}
                  </Text>
                </ChakraLink>
              </Link>
            </Stack>
          ))}
          <Link href="/sales" passHref>
            <Button
              w="full"
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'blue.500'}
              _hover={{
                bg: 'blue.400',
              }}>
              Купить маркировки
            </Button>
          </Link>
        </Stack>
      </Collapse>
    </Box>
  );
}

const Links = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/services' },
  { name: 'О нас', href: '/about' },
  { name: 'Калькулятор', href: '/calculator' },
  { name: 'Продажи', href: '/sales' },
  { name: 'Доставка', href: '/delivery' },
  { name: 'ЭДО', href: '/edo' },
  { name: 'Создание маркировок', href: '/marking' },
]; 