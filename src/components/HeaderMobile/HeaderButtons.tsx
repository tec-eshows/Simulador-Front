import { Button, Flex, Text, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import SeachIcon from '../../assets/searchicon.svg'
import { useUrlFilter } from '../../contexts/FilterUrlContext'

interface StyleFilterProps {
  styles?: {
    title: string
  }[]
  onClick: () => void
}

export function HeaderButtons({
  styles,

  ...rest
}: StyleFilterProps) {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const {
    setStylesFilter,
    styleFilter,
    regionFilter,
    atractionNameFilter,
    urlFilter,
  } = useUrlFilter()

  async function handleFilterAtractions(filterName) {
    if (`${filterName}` === styleFilter) {
      setStylesFilter('')
    } else {
      setStylesFilter(`${filterName}`)
    }
  }

  return (
    <Flex
      mx="auto"
      background="white.900"
      border="1px"
      borderColor="gray.300"
      borderRadius="8px"
      align="center"
      height="60px"
      backgroundColor="white.900"
      px="12px"
      maxW="350px"
      w="100%"
      justify="space-between"
    >
      <Flex w="100%" h="100%" justify="center">
        <Image src={SeachIcon} />

        <Button
          fontWeight="medium"
          h={70}
          minW="60px"
          height="100%"
          borderRadius="8px 0 0px 8px"
          mr="8px"
          border="none"
          _focus={{ border: 'none' }}
          boxShadow={isOpen ? '0px 11px 8px -8px rgba(0,0,0,0.20)' : ''}
          background="white.900"
          color="gray.600"
          _after={{
            content: "''",

            position: 'absolute',
            right: 0,
            width: '2px',
            height: '30px',
            background: 'gray.300',
          }}
          justifyContent="flex-start"
          {...rest}
        >
          {styleFilter ? (
            <Text color="orange.900">{styleFilter}</Text>
          ) : (
            'Estilo'
          )}
        </Button>
        <Button
          fontWeight="medium"
          h={70}
          minW="60px"
          height="100%"
          borderRadius="8px 0 0px 8px"
          border="none"
          _focus={{ border: 'none' }}
          boxShadow={isOpen ? '0px 11px 8px -8px rgba(0,0,0,0.20)' : ''}
          background="white.900"
          color="gray.600"
          _after={{
            content: "''",

            position: 'absolute',
            right: 0,
            width: '2px',
            height: '30px',
            background: 'gray.300',
          }}
          justifyContent="flex-start"
          {...rest}
        >
          {regionFilter ? (
            <Text color="orange.900">{regionFilter}</Text>
          ) : (
            'Região'
          )}
        </Button>
        <Button
          fontWeight="medium"
          h={70}
          minW="60px"
          height="100%"
          borderRadius="8px 0 0px 8px"
          border="none"
          _focus={{ border: 'none' }}
          boxShadow={isOpen ? '0px 11px 8px -8px rgba(0,0,0,0.20)' : ''}
          background="white.900"
          color="gray.600"
          {...rest}
        >
          {atractionNameFilter ? (
            <Text color="orange.900">{atractionNameFilter}</Text>
          ) : (
            'Artista'
          )}
        </Button>
      </Flex>
    </Flex>
  )
}
