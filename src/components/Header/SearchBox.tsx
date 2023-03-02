import { Box, Button, Flex, Icon, Input, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { RiContactsBookLine, RiSearchLine } from 'react-icons/ri'
import Search from '../../assets/search.svg'
import { useAuth } from '../../contexts/AuthContext'
import { useUrlFilter } from '../../contexts/FilterUrlContext'
interface SearchBoxProps {
  activeFilter: 'default' | 'style' | 'region' | 'input'
  setActiveFilter: (activeFilter) => void
}
export function SearchBox({ activeFilter, setActiveFilter }: SearchBoxProps) {
  const [inputAtraction, setInputAtraction] = useState('')
  const router = useRouter()
  const { user } = useAuth()
  const {
    atractionNameFilter,
    setAtractionNameFilter,
    setUrlFilter,
    regionFilter,
    urlFilter,
    styleFilter,
  } = useUrlFilter()

  async function handleFilter(filterName) {
    setAtractionNameFilter(`${filterName}`)

    setUrlFilter(
      `filter?regiao=${regionFilter || ''}&atracao=${
        inputAtraction || ''
      }&estilo=${styleFilter || ''}`,
    )
    if (router.asPath !== '/') {
      router.push(
        `/?regiao=${regionFilter || ''}&atracao=${
          inputAtraction || ''
        }&estilo=${styleFilter || ''}`,
      )
    }
  }
  async function handleSubmit(event) {
    if (router.asPath !== '/') {
      router.push(
        `/?regiao=${regionFilter || ''}&atracao=${
          inputAtraction || ''
        }&estilo=${styleFilter || ''}`,
      )
    }
    event.preventDefault()
    setUrlFilter(
      `filter?regiao=${regionFilter || ''}&atracao=${
        inputAtraction || ''
      }&estilo=${styleFilter || ''}`,
    )
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(urlFilter)
    const name = searchParams.get('atracao')

    setInputAtraction(name)
    setAtractionNameFilter(name)

    if (urlFilter === '') {
      setInputAtraction('')
    }
  }, [urlFilter])

  return (
    <Flex
      h="100%"
      as="form"
      onSubmit={handleSubmit}
      justify="center"
      align="center"
    >
      <Input
        _focus={{ border: 'none' }}
        h="100%"
        onClick={() => setActiveFilter('input')}
        border="none"
        color="orange.900"
        _placeholder={{ color: 'gray.600' }}
        width={{
          '3xl': '270px',
          '2xl': '200px',
          lg: '120px',
          xl: '180px',
          md: '120px',
        }}
        placeholder="Qualquer artista"
        background={
          activeFilter === 'input'
            ? 'white.900'
            : activeFilter === 'default'
            ? 'white.900'
            : 'gray.300'
        }
        value={inputAtraction}
        onChange={(e) => setInputAtraction(e.target.value)}
        borderRadius={
          activeFilter === 'input' ? '8px 8px 8px 8px' : '0px 8px 8px 0px'
        }
      />
      <Button
        p="0"
        borderRadius={4}
        w={activeFilter !== 'default' ? '145px' : '41px'}
        h="34px"
        m="12px 24px"
        alignItems="center"
        bg="orange.900"
        transition="width 250ms ease"
        justifyContent="space-around"
        onClick={() => handleFilter(inputAtraction)}
        _hover={{
          opacity: 0.7,
        }}
      >
        {activeFilter !== 'default' && <Text color="white.900"> Buscar</Text>}
        <Image src={Search} width={17} height={17} />
      </Button>
    </Flex>
  )
}
