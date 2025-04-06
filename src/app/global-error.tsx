'use client';

import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Container maxW="container.md" py={20}>
          <VStack spacing={8} textAlign="center">
            <Heading as="h1" size="2xl">
              Критическая ошибка
            </Heading>
            <Text fontSize="xl">
              Произошла непредвиденная ошибка. Пожалуйста, попробуйте перезагрузить страницу.
            </Text>
            <Button colorScheme="blue" size="lg" onClick={reset}>
              Попробовать снова
            </Button>
          </VStack>
        </Container>
      </body>
    </html>
  );
} 