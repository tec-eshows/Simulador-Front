import {
  Box,
  Button,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import Image from 'next/image'

import { handleStyleIcon } from '../../utils/StylesIcon'
import { useUrlFilter } from '../../contexts/FilterUrlContext'
import { useEffect } from 'react'
interface StyleFilterProps {
  activeFilter: 'default' | 'style' | 'region' | 'input'
  setActiveFilter: (activeFilter) => void
  styles?: {
    ID?: string
    title: string
    icon: string
  }[]
}

export function StyleFilter({
  activeFilter,
  setActiveFilter,
  styles,
}: StyleFilterProps) {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const { setStylesFilter, styleFilter, urlFilter } = useUrlFilter()

  function handleActiveFilter() {
    onToggle()
    setActiveFilter('style')
  }
  async function handleFilterAtractions(filterName) {
    if (`${filterName}` === styleFilter) {
      setStylesFilter('')
    } else {
      setStylesFilter(`${filterName}`)
    }
  }
  useEffect(() => {
    const params = new URLSearchParams(urlFilter)
    const style = params.get('estilo')

    setStylesFilter(style)
  }, [urlFilter])

  return (
    <Popover
      isOpen={isOpen}
      onClose={onClose}
      placement="bottom"
      closeOnBlur={true}
    >
      <PopoverTrigger>
        <Button
          fontWeight="medium"
          h={70}
          width={{ '3xl': '270px', '2xl': '200px', lg: '120px', xl: '180px' }}
          height="100%"
          borderRadius={
            activeFilter === 'style' ? '8px 8px 8px 8px' : '8px 0 0px 8px'
          }
          border="none"
          _focus={{ border: 'none' }}
          boxShadow={isOpen ? '0px 11px 8px -8px rgba(0,0,0,0.20)' : ''}
          background={
            activeFilter === 'style'
              ? 'white.900'
              : activeFilter === 'default'
              ? 'white.900'
              : 'gray.300'
          }
          onClick={handleActiveFilter}
          color={
            activeFilter === 'style'
              ? 'gray.600'
              : activeFilter === 'default'
              ? 'gray.600'
              : 'white.900'
          }
          _after={
            activeFilter !== 'style'
              ? {
                  content: "''",

                  position: 'absolute',
                  right: 0,
                  width: '2px',
                  height: '30px',
                  background: 'gray.300',
                }
              : {}
          }
          justifyContent="flex-start"
        >
          {styleFilter ? (
            <Text color="orange.900">{styleFilter}</Text>
          ) : (
            <Text>Qualquer estilo</Text>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        zIndex="10"
        backgroundColor="white.900"
        mt="24px"
        w={546}
        _focus={{ border: 'none' }}
        maxHeight="300px"
        overflowY="scroll"
      >
        <PopoverBody>
          <Flex
            backgroundColor="white.900"
            alignContent="center"
            justifyContent="center"
            flexWrap="wrap"
          >
            {styles?.map((item, i) => (
              <Flex
                onClick={() => handleFilterAtractions(item.title)}
                justifyContent="center"
                alignItems="center"
                role="button"
                backgroundColor="white.900"
                key={item.ID}
                justify="center"
                align="center"
                flexWrap="wrap"
                flexDirection="column"
                w="100px"
                h="100px"
                border="1px"
                borderColor={
                  item.title === styleFilter ? 'orange.900' : 'gray.300'
                }
                borderRadius={8}
                ml="24px"
                mt="24px"
                transition="transform  ease-in-out .2s"
                _hover={{
                  transform: 'scale(1.1)',
                }}
              >
                <Text fontSize="12px" textAlign="center">
                  {item.title}
                </Text>
                <Image src={handleStyleIcon(item.title)} />
              </Flex>
            ))}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}
