import {
  Box,
  Button,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import Search from '../../assets/search.svg'
import { useUrlFilter } from '../../contexts/FilterUrlContext'

export function SearchBoxMobile() {
  const [inputAtraction, setInputAtraction] = useState('')
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
      `filter?regiao=${regionFilter}&atracao=${
        atractionNameFilter || ''
      }&estilo=${styleFilter}`,
    )
  }
  async function handleSubmit(event) {
    event.preventDefault()
    if (inputAtraction.length === 0) {
      setAtractionNameFilter('')
    } else {
      setAtractionNameFilter(`${inputAtraction}`)
    }
  }

  return (
    <Flex as="form" onSubmit={handleSubmit} justify="center" align="center">
      <InputGroup>
        <Input
          _focus={{ border: 'none' }}
          h="60px"
          border="none"
          color="gray.600"
          _placeholder={{ color: 'gray.600' }}
          width="100%"
          placeholder=" Artista"
          background="white.900"
          value={inputAtraction}
          onChange={(e) => setInputAtraction(e.target.value)}
          borderRadius="8px"
        />
        <InputRightElement
          justifyContent="center"
          alignItems="center"
          height="100%"
          pr="65px"
          children={
            <Text color="orange.900" textAlign="center">
              {inputAtraction}
            </Text>
          }
        />
      </InputGroup>
    </Flex>
  )
}
