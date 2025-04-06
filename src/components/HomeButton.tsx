import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { FaHome } from 'react-icons/fa';
import Link from 'next/link';

export default function HomeButton() {
  return (
    <HStack spacing={4} position="fixed" bottom={4} right={4} zIndex={1000}>
      <Link href="/" passHref>
        <Button
          colorScheme="blue"
          size="md"
          leftIcon={<FaHome />}
          boxShadow="md"
          _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
          transition="all 0.2s">
          Домой
        </Button>
      </Link>
    </HStack>
  );
} 