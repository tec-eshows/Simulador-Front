import { Box, Flex, Icon, Text, useDisclosure } from '@chakra-ui/react'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineMenu } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { useState } from 'react'
import { DrawerMenuMobile } from '../DrawerMenuMobile'
import { MenuPlataformEshowsMobile } from '../MenuPlataformEshowsMobile'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/AuthContext'
import Image from 'next/image'
import MenuIconAuth from '../../assets/menu-icon-logado.svg'
export function BottomMenu() {
  const { isOpen: isModalOpen, onClose: onCloseModal } = useSidebarDrawer()
  const { user } = useAuth()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  function handleOpenMenu() {
    onOpen()
  }
  return (
    <Flex
      borderTop="1px"
      borderColor="gray.300"
      bg="white.900"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      height="60px"
      zIndex={20}
      justify="space-around"
      align="center"
    >
      <Link href="/">
        <Flex flexDir="column" justify="center" align="center">
          <Icon
            as={AiOutlineSearch}
            w="24px"
            h="24px"
            color={router.asPath === '/' ? 'orange.900' : 'gray.300'}
          />

          <Text fontSize="xs" color="black.600">
            Explorar
          </Text>
        </Flex>
      </Link>
      <Link href="/favoritos">
        <Flex flexDir="column" justify="center" align="center">
          <Icon
            as={AiOutlineHeart}
            w="24px"
            h="24px"
            color={router.asPath === '/favoritos' ? 'orange.900' : 'gray.300'}
          />

          <Text fontSize="xs" color="black.600">
            Favoritos
          </Text>
        </Flex>
      </Link>
      {!user.user_id && (
        <Link href="/login">
          <Flex flexDir="column" justify="center" align="center">
            <Icon
              as={CgProfile}
              w="24px"
              h="24px"
              color={router.asPath === '/login' ? 'orange.900' : 'gray.300'}
            />

            <Text fontSize="xs" color="black.600">
              Entrar
            </Text>
          </Flex>
        </Link>
      )}

      <Flex
        flexDir="column"
        justify="center"
        align="center"
        onClick={handleOpenMenu}
      >
        {user.user_id ? (
          <Image src={MenuIconAuth} />
        ) : (
          <Icon as={AiOutlineMenu} w="24px" h="24px" />
        )}

        {!user.user_id && (
          <Text fontSize="xs" color="black.600" fontWeight="thin">
            Menu
          </Text>
        )}
      </Flex>
      <DrawerMenuMobile onClose={onClose} isOpen={isOpen} />
      <MenuPlataformEshowsMobile isOpen={isModalOpen} onClose={onCloseModal} />
    </Flex>
  )
}
