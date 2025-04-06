'use client';

import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          404 - Страница не найдена
        </Heading>
        <Text fontSize="xl">
          Извините, запрашиваемая страница не существует.
        </Text>
        <Link href="/" passHref>
          <Button colorScheme="blue" size="lg">
            Вернуться на главную
          </Button>
        </Link>
      </VStack>
    </Container>
  );
} 