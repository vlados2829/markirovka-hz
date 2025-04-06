'use client';

import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <HStack spacing={4} mb={4} justify="space-between" width="100%">
      <Button
        leftIcon={<ChevronLeftIcon />}
        onClick={() => router.back()}
        variant="ghost"
        size="sm">
        Назад
      </Button>
      <Button
        as="a"
        href="https://t.me/gilman_188"
        target="_blank"
        leftIcon={<ExternalLinkIcon />}
        colorScheme="blue"
        size="sm">
        Получить консультацию
      </Button>
    </HStack>
  );
} 