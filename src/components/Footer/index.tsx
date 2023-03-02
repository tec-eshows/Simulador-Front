import { Box, Divider, Flex, Text } from '@chakra-ui/react'

import Image from 'next/image'
import { SocialIcons } from '../SocialIcons'
export function Footer() {
  return (
    <Flex
      pb="2"
      bg="white.900"
      borderColor="gray.300"
      borderTopWidth="1px"
      position="fixed"
      left="0"
      right="0"
      bottom="0"
      gridGap="15px"
      flexWrap="wrap"
      w="100%"
      zIndex="20"
    >
      <Flex
        justifyContent="space-between"
        fontWeight="bold"
        align="center"
        w="90%"
        mx="auto"
      >
        <Text>© {new Date().getFullYear()}, Eshows LTDA</Text>
        <Flex flexWrap="wrap" justify="center" align="center" gridGap="30px">
          <Text
            as="a"
            href="/sobre"
            transition="width 250ms ease"
            _hover={{
              color: 'orange.900',
            }}
          >
            Sobre nós
          </Text>
          <Text
            as="a"
            href="https://contrate.eshows.com.br/"
            transition="width 250ms ease"
            _hover={{
              color: 'orange.900',
            }}
            target="_blank"
          >
            Contrate um Artista
          </Text>
          <Text
            as="a"
            href="http://blog.eshows.com.br"
            target="_blank"
            transition="width 250ms ease"
            _hover={{
              color: 'orange.900',
            }}
          >
            Para Artistas
          </Text>

          <Text
            as="a"
            href="https://api.whatsapp.com/send?phone=5511944775886&text=Ol%C3%A1,%20gostaria%20de%20excluir%20um%20projeto%20da%20plataforma!"
            transition="width 250ms ease"
            _hover={{
              color: 'orange.900',
            }}
          >
            Contato
          </Text>

          <Text
            as="a"
            href="http://vagas.eshows.com.br"
            target="_blank"
            transition="width 250ms ease"
            _hover={{
              color: 'orange.900',
            }}
          >
            Trabalhe conosco
          </Text>
        </Flex>
        <SocialIcons />
      </Flex>
    </Flex>
  )
}
