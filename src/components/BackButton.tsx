'use client';

import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <HStack spacing={4} mb={4}>
      <Button
        leftIcon={<ChevronLeftIcon />}
        onClick={() => router.back()}
        variant="ghost"
        size="sm">
        Назад
      </Button>
    </HStack>
  );
} 