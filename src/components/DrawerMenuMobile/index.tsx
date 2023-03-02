import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import React from 'react'
import { Logo } from '../Header/Logo'
import { TbWorld, TbHandRock } from 'react-icons/tb'
import { IoIosLogOut, IoMdPersonAdd } from 'react-icons/io'
import { MdOutlineLogin } from 'react-icons/md'
import { BsCreditCard2FrontFill } from 'react-icons/bs'

import FacebookIcon from '../../assets/Facebook.svg'
import InstagramIcon from '../../assets/Instagram.svg'
import MenuIconAuth from '../../assets/menu-icon-logado.svg'
import LinkedinIcon from '../../assets/Linkedin.svg'
import YoutubeIcon from '../../assets/Youtube.svg'
import Link from 'next/link'
import Assinatura from '../../assets/assinatura.svg'
import Image from 'next/image'
import LogoAtractions from '../../assets/artistas-icon.svg'
import LogoBar from '../../assets/bar-icon.svg'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import MenuIcon from '../../assets/MenuIcon.svg'
import { useAuth } from '../../contexts/AuthContext'
interface DrawerMenuMobileProps {
  isOpen: boolean
  onClose: () => void
}

export function DrawerMenuMobile({ isOpen, onClose }: DrawerMenuMobileProps) {
  const { user, signOut } = useAuth()
  const { onOpen } = useSidebarDrawer()
  function handleOpenPlataformEshowsModal() {
    onClose()
    onOpen()
  }

  return (
    <>
      <Drawer size="full" isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p="0">
            <Flex w="100%" h="100%">
              <Flex
                bg="white.900"
                w="100%"
                pt="56px"
                flexDir="column"
                align="flex-start"
                p="40px"
                h="100%"
              >
                {user.user_id ? (
                  <Flex>
                    <Image src={MenuIconAuth} width={60} height={60} />
                    <Box>
                      <Text fontWeight="bold">{user.full_name}</Text>
                      <Text color="gray.500">{user.email}</Text>
                    </Box>
                  </Flex>
                ) : (
                  <Logo w={40} h={40} />
                )}

                <Flex flexDir="column" gridGap="38px" mt="8">
                  {!user.user_id && (
                    <Flex
                      align="center"
                      gridGap="24px"
                      onClick={handleOpenPlataformEshowsModal}
                    >
                      <Icon color="orange.900" as={TbWorld} w="25px" h="25px" />
                      <Text>Plataformas Eshows</Text>
                    </Flex>
                  )}

                  {!!user.user_id && (
                    <Link href="/favoritos">
                      <Flex align="center" gridGap="24px">
                        <Icon
                          color="orange.900"
                          as={IoMdPersonAdd}
                          w="25px"
                          h="25px"
                        />
                        <Text>Favoritos</Text>
                      </Flex>
                    </Link>
                  )}
                  {!!user.user_id && (
                    <Link href="/minha-conta">
                      <Flex align="center" gridGap="24px">
                        <Icon
                          color="orange.900"
                          as={BsCreditCard2FrontFill}
                          w="25px"
                          h="25px"
                        />
                        <Text>Minha conta</Text>
                      </Flex>
                    </Link>
                  )}
                  {!!user.user_id && (
                    <a
                      href="https://artistas.eshows.com.br/login"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Flex align="center" gridGap="24px">
                        <Image
                          src={LogoAtractions}
                          width="28px"
                          height="28px"
                        />
                        <Text>Plataforma para Artistas</Text>
                      </Flex>
                    </a>
                  )}
                  {!!user.user_id && (
                    <a
                      href="https://empresas.eshows.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Flex align="center" gridGap="24px">
                        <Image src={LogoBar} width="28px" height="28px" />
                        <Text>Plataforma para Bares</Text>
                      </Flex>
                    </a>
                  )}

                  {!user.user_id && (
                    <Link href="/cadastro">
                      <Flex align="center" gridGap="24px">
                        <Icon
                          color="orange.900"
                          as={IoMdPersonAdd}
                          w="25px"
                          h="25px"
                        />
                        <Text>Cadastrar-se</Text>
                      </Flex>
                    </Link>
                  )}
                  {!user.user_id && (
                    <Link href="/login">
                      <Flex align="center" gridGap="24px">
                        <Icon
                          color="orange.900"
                          as={MdOutlineLogin}
                          w="25px"
                          h="25px"
                        />
                        <Text>Login</Text>
                      </Flex>
                    </Link>
                  )}

                  <Link href="/sobre">
                    <Flex align="center" gridGap="24px">
                      <Icon
                        color="orange.900"
                        as={TbHandRock}
                        w="25px"
                        h="25px"
                      />
                      <Text>Sobre nos</Text>
                    </Flex>
                  </Link>

                  <Flex
                    target="_blank"
                    align="center"
                    gridGap="24px"
                    as="a"
                    href="https://rebrand.ly/politicas-de-privacidade-eshows"
                  >
                    <Image src={Assinatura} width={25} height={25} />
                    <Text> Políticas de Privacidade</Text>
                  </Flex>
                  <Flex
                    target="_blank"
                    align="center"
                    gridGap="24px"
                    as="a"
                    href="https://rebrand.ly/termos-de-uso-eshows"
                  >
                    <Image src={Assinatura} width={25} height={25} />
                    <Text> Termos de uso</Text>
                  </Flex>

                  {!!user.user_id && (
                    <Flex align="center" gridGap="24px" onClick={signOut}>
                      <Icon
                        color="orange.900"
                        as={IoIosLogOut}
                        w="25px"
                        h="25px"
                      />
                      <Text>Logout</Text>
                    </Flex>
                  )}

                  <Flex>
                    <Text
                      as="a"
                      href="https://pt-br.facebook.com/eshowsoficial/"
                      target="_blank"
                    >
                      <Image src={FacebookIcon} />
                    </Text>
                    <Text
                      as="a"
                      href="https://www.instagram.com/eshowsoficial/"
                      target="_blank"
                    >
                      <Image src={InstagramIcon} />
                    </Text>
                    <Text
                      as="a"
                      href="https://www.linkedin.com/company/eshowsoficial/"
                      target="_blank"
                    >
                      <Image src={LinkedinIcon} />
                    </Text>
                    <Text
                      as="a"
                      href="https://www.youtube.com/c/Eshows"
                      target="_blank"
                    >
                      <Image src={YoutubeIcon} />
                    </Text>
                  </Flex>
                  <Flex gridGap="10px"></Flex>
                </Flex>
              </Flex>
              <Flex justify="center" bg="orange.900" w="30%" h="100%" pt="56px">
                <Box h="50px" onClick={onClose}>
                  <Image src={MenuIcon} />
                </Box>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
