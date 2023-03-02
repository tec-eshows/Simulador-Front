import {
  Box,
  Button,
  Flex,
  Divider,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
} from '@chakra-ui/react'
import Image from 'next/image'
import EshowsLogo from '../../assets/eshows.svg'
import MenuIcon from '../../assets/menubar.svg'
import FacebookIcon from '../../assets/Facebook.svg'
import InstagramIcon from '../../assets/Instagram.svg'
import MenuIconAuth from '../../assets/menu-icon-logado.svg'
import LinkedinIcon from '../../assets/Linkedin.svg'
import YoutubeIcon from '../../assets/Youtube.svg'
import { useAuth } from '../../contexts/AuthContext'
import { useUrlFilter } from '../../contexts/FilterUrlContext'
import { useRouter } from 'next/router'
import { SocialIcons } from '../SocialIcons'
import Link from 'next/link'
export function MenuOpen() {
  const router = useRouter()
  const { user, signOut } = useAuth()
  const { urlFilter, setUrlFilter } = useUrlFilter()
  function getFavoriteAtractions() {
    setUrlFilter(`favorite/${user.user_id}`)
  }

  function handleGoHome() {
    router.push('/')
  }
  function handleLogout() {
    signOut()
  }

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            p="0"
            isActive={isOpen}
            as={Button}
            bg="transparent"
            colorScheme={false}
          >
            <Stack minH="40px" minW="40px">
              {!user.user_id ? (
                <Image src={MenuIcon} width={40} height={40} />
              ) : (
                <Image src={MenuIconAuth} width={60} height={60} />
              )}
            </Stack>
          </MenuButton>
          <MenuList pb={0}>
            <Box
              h="237px"
              w="240px"
              px="24px"
              mt="4"
              bg="white.900"
              rounded="md"
              shadow="md"
            >
              {user.full_name && (
                <>
                  <Text mr="24px" fontWeight="bold">
                    Olá, {user?.full_name}
                  </Text>
                  <Divider />
                </>
              )}

              <Flex justify="space-between">
                <Box>
                  {!!user.user_id && router.pathname !== '/favoritos' ? (
                    <Text
                      cursor="pointer"
                      pt="10px"
                      onClick={() => router.push('/favoritos')}
                    >
                      Meus Favoritos
                    </Text>
                  ) : router.pathname === '/favoritos' ? (
                    <Text pt="10px" onClick={handleGoHome} cursor="pointer">
                      Home
                    </Text>
                  ) : (
                    <Text pt="10px">
                      {' '}
                      <Link href="/cadastro">Cadastrar-se </Link>
                    </Text>
                  )}
                  {!!user.user_id && (
                    <Text pt="10px">
                      <Link href="/minha-conta">Minha conta </Link>
                    </Text>
                  )}
                  {user.user_id ? (
                    <Text cursor="pointer" pt="10px" onClick={handleLogout}>
                      Logout
                    </Text>
                  ) : (
                    <Text
                      pt="10px"
                      cursor="pointer"
                      onClick={() => router.push('/login')}
                    >
                      Entrar
                    </Text>
                  )}
                </Box>
                <Image src={EshowsLogo} />
              </Flex>

              <Divider mt="24px" />

              <Text pt="10px">
                <Link href="/sobre">Sobre nós </Link>
              </Text>
              <SocialIcons />
            </Box>
          </MenuList>
        </>
      )}
    </Menu>
  )
}
