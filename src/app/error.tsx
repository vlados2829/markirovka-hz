'use client';

import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Логирование ошибки в сервис аналитики
    console.error(error);
  }, [error]);

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={8} textAlign="center">
        <Heading as="h1" size="2xl">
          Что-то пошло не так
        </Heading>
        <Text fontSize="xl">
          Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте еще раз.
        </Text>
        <Button colorScheme="blue" size="lg" onClick={reset}>
          Попробовать снова
        </Button>
        <Button variant="outline" size="lg" as="a" href="/">
          Вернуться на главную
        </Button>
      </VStack>
    </Container>
  );
} 