import { Box, Button, Flex, Highlight, Stack, Text } from '@chakra-ui/react'
import Bg from '../assets/Rectangle4.png'

import Link from 'next/link'

export default function NotFound() {
  return (
    <Box
      w="100vw"
      h="100vh"
      backgroundImage={`url(${Bg.src})`}
      backgroundSize="cover"
    >
      <Stack w="100%" h="100%" bg="black.100" justify="center" align="center">
        <Flex
          mx="auto"
          w="80%"
          h="100%"
          maxW="1250px"
          maxH="712px"
          borderRadius="22px"
          background="white.900"
          justify="center"
          align="center"
          flex="1"
          flexDir="column"
          position="relative"
        >
          <Box
            w="8rem"
            h="2rem"
            bg="yellow.300"
            position="absolute"
            right="-90px"
            borderRadius="22px"
            top="170"
          />

          <Box
            w="8rem"
            h="2rem"
            bg="orange.900"
            position="absolute"
            right="-60px"
            borderRadius="22px"
            top="100"
          />

          <Box
            w="8rem"
            h="2rem"
            bg="yellow.300"
            position="absolute"
            left="-90px"
            borderRadius="22px"
            bottom="170"
          />

          <Box
            w="8rem"
            h="2rem"
            bg="orange.900"
            position="absolute"
            left="-60px"
            borderRadius="22px"
            bottom="100"
          />

          <Text
            fontSize={['50', '70', '100', '140px']}
            fontWeight="bold"
            textAlign="center"
          >
            <Highlight
              query={['0']}
              styles={{ fontSize: ['100px', '140px', '180px', '200px'] }}
            >
              404
            </Highlight>
          </Text>
          <Text fontSize="2xl" fontWeight="bold">
            UH OH! PÁGINA NÃO ENCONTRADA
          </Text>
          <Text fontSize="xl" fontWeight="light" fontStyle="italic">
            A página que você procura não pode ser encontrada
          </Text>
          <Link href="/">
            <Button
              mt="2"
              w="180px"
              h="48px"
              bg="orange.900"
              color="white.900"
              borderRadius="24px"
            >
              Voltar para Home
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Box>
  )
}
