'use client';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Links = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/services' },
  { name: 'Продажи', href: '/sales' },
  { name: 'Доставка', href: '/delivery' },
  { name: 'ЭДО', href: '/edo' },
  { name: 'Создание маркировок', href: '/marking' },
  { name: 'О нас', href: '/about' },
  { name: 'Калькулятор', href: '/calculator' },
];

// ... existing code ... 