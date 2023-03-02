import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import LogoAtractions from '../../assets/logo-artistas.svg'
export function MenuPlataformEshows() {
  return (
    <Menu>
      <MenuButton as={Text} fontWeight="bold" cursor="pointer" mb="10px">
        Plataformas Eshows
      </MenuButton>
      <MenuList bg="white.900" p="12px" w="275px" zIndex="10">
        <MenuItem>
          <Flex
            as="a"
            href="https://artistas.eshows.com.br/login"
            target="_blank"
            w="100%"
            gridGap="10px"
            align="center"
          >
            <Image src={LogoAtractions} width="28px" height="28px" />
            <Text fontSize="14" fontWeight="light">
              Plataforma para Artistas
            </Text>
          </Flex>
        </MenuItem>
        <MenuItem>
          <Flex
            as="a"
            href="https://empresas.eshows.com.br/"
            target="_blank"
            w="100%"
            gridGap="10px"
            align="center"
          >
            <Image src={LogoAtractions} width="28px" height="28px" />
            <Text fontSize="14" fontWeight="light">
              Plataforma para Artistas
            </Text>
          </Flex>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
