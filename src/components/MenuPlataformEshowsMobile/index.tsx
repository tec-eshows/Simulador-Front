import {
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import LogoAtractions from '../../assets/logo-artistas.svg'
import { ModalMobile } from '../ModalMobile'
import { MdArrowForwardIos } from 'react-icons/md'
import { useAuth } from '../../contexts/AuthContext'
export function MenuPlataformEshowsMobile({ onClose, isOpen }) {
  return (
    <ModalMobile onClose={onClose} isOpen={isOpen} footer={false}>
      <Flex
        h="60px"
        borderRadius="8px"
        bg="white.900"
        as="a"
        href="https://artistas.eshows.com.br/login"
        target="_blank"
        w="100%"
        gridGap="10px"
        align="center"
        justify="space-between"
      >
        <Flex w="100%" px="20px" gridGap="20px">
          <Image src={LogoAtractions} width="28px" height="28px" />
          <Text>Plataforma para Artistas</Text>
        </Flex>
        <Stack
          justify="center"
          align="center"
          bg="orange.900"
          h="100%"
          w="35px"
          borderRadius=" 0px 8px 8px 0"
        >
          <Icon
            as={MdArrowForwardIos}
            color="white.900"
            width="30px"
            height="30px"
          />
        </Stack>
      </Flex>

      <Flex
        h="60px"
        borderRadius="8px"
        bg="white.900"
        as="a"
        href="https://empresas.eshows.com.br/"
        target="_blank"
        w="100%"
        gridGap="10px"
        align="center"
      >
        <Flex w="100%" px="20px" gridGap="20px">
          <Image src={LogoAtractions} width="28px" height="28px" />
          <Text>Plataforma para Bares</Text>
        </Flex>
        <Stack
          justify="center"
          align="center"
          bg="orange.900"
          h="100%"
          w="35px"
          borderRadius=" 0px 8px 8px 0"
        >
          <Icon
            as={MdArrowForwardIos}
            color="white.900"
            width="30px"
            height="30px"
          />
        </Stack>
      </Flex>
    </ModalMobile>
  )
}
