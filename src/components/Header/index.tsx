import {
  Flex,
  Icon,
  IconButton,
  Input,
  useBreakpointValue,
  Text,
  Button,
  Box,
  useFocusEffect,
  VStack,
} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { useState, useEffect } from 'react'
import { Logo } from './Logo'

import { StyleFilter } from './StyleFilter'

import { RegionFilter } from './RegionFilter'
import Search from '../../assets/search.svg'
import Image from 'next/image'
import MenuIcon from '../../assets/menubar.svg'
import { SearchBox } from './SearchBox'
import { MenuOpen } from './Menu'
import { useAuth } from '../../contexts/AuthContext'
import { useUrlFilter } from '../../contexts/FilterUrlContext'
import { MenuPlataformEshows } from '../MenuPlataformEshows'
import Link from 'next/link'
interface HeaderProps {
  isOpen?: boolean
  setIsOpen?: (state) => void
  styles?: {
    ID?: string
    title: string
    icon: string
  }[]
}

export function Header({ isOpen, setIsOpen, styles }: HeaderProps) {
  const {
    setUrlFilter,
    setAtractionNameFilter,
    setRegionFilter,
    setStylesFilter,
  } = useUrlFilter()
  const [activeFilter, setActiveFilter] = useState<
    'style' | 'region' | 'default' | 'input'
  >('default')

  const isWideVersion = useBreakpointValue({
    base: false,
    xl: true,
  })

  useEffect(() => {
    if (!isOpen) {
      setActiveFilter('default')
    }
  }, [isOpen])
  const { user } = useAuth()

  function handleClearFilter() {
    setUrlFilter('')
    setAtractionNameFilter('')
    setRegionFilter('')
    setStylesFilter('')
  }

  return (
    <Flex
      zIndex="30"
      as="header"
      w="100%"
      h={isOpen ? '210px' : '104px'}
      mx="auto"
      transition="height 0.200s linear"
      background="white"
      pt="31px"
      mb="31px"
      boxShadow={!isOpen ? '0 8px 22px -6px #cbcbcb' : ''}
    >
      <Flex
        justify="space-between"
        w="90%"
        align="center"
        maxW="1920px"
        mb="30px"
        mx="auto"
      >
        <a href="/" style={{ marginBottom: 30 }}>
          <Logo />
        </a>
        <Flex flexDir="column">
          <Flex
            mx="auto"
            background="white.900"
            onClick={() => setIsOpen(true)}
            transform={isOpen ? 'translateY(70px)' : ''}
            transition="transform 0.250s ease"
            border={activeFilter === 'default' ? '1px solid #CBCBCB' : ''}
            borderRadius="8px"
            justify="center"
            align="center"
            height="50"
            backgroundColor={
              activeFilter === 'default' ? 'white.900' : 'gray.300'
            }
          >
            <StyleFilter
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              styles={styles}
            />
            <RegionFilter
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

            <SearchBox
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />
          </Flex>
          <Text
            textAlign="right"
            cursor="pointer"
            fontSize={'12px'}
            textDecor="underline"
            onClick={handleClearFilter}
            transform={isOpen ? 'translateY(70px)' : ''}
          >
            Limpar filtro
          </Text>
        </Flex>
        <Flex justify="center" align="center" gridGap="10px">
          <MenuPlataformEshows />
          <MenuOpen />
        </Flex>
      </Flex>
    </Flex>
  )
}
