import {
  Box,
  Button,
  Flex,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  ScaleFade,
  Slide,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import { regionIcons } from '../../utils/RegionIcons'
import { useUrlFilter } from '../../contexts/FilterUrlContext'

interface StyleFilterProps {
  activeFilter: 'default' | 'style' | 'region' | 'input'
  setActiveFilter: (activeFilter) => void
}

export function RegionFilter({
  activeFilter,
  setActiveFilter,
}: StyleFilterProps) {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [inputLocalization, setInputLocalization] = useState('')
  const { regionFilter, setRegionFilter, urlFilter, setUrlFilter } =
    useUrlFilter()

  function handleActiveFilter() {
    onToggle()
    setActiveFilter('region')
  }
  async function handleFilterRegion(filterName) {
    if (filterName) {
      if (`${filterName}` === regionFilter) {
        setRegionFilter('')
      } else {
        setRegionFilter(`${filterName}`)
      }
    }
  }
  async function handleSubmit(event) {
    event.preventDefault()

    setRegionFilter(`${inputLocalization}`)
  }

  const ref = useRef()
  useEffect(() => {
    const searchParams = new URLSearchParams(urlFilter)
    const region = searchParams.get('regiao')
    if (region) {
      setRegionFilter(region)
    }
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
          ref={ref}
          borderRadius={activeFilter === 'region' ? '8px 8px 8px 8px' : 0}
          justifyContent="start"
          fontWeight="medium"
          width={{ '3xl': '270px', '2xl': '200px', lg: '120px', xl: '180px' }}
          height="100%"
          _focus={{ border: 'none' }}
          boxShadow={isOpen ? '0px 11px 8px -8px rgba(0,0,0,0.10)' : ''}
          background={
            activeFilter === 'region'
              ? 'white'
              : activeFilter === 'default'
              ? 'white'
              : 'gray.300'
          }
          onClick={handleActiveFilter}
          color={
            activeFilter === 'region'
              ? 'gray.600'
              : activeFilter === 'default'
              ? 'gray.600'
              : 'white'
          }
          _after={
            activeFilter !== 'region'
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
        >
          {regionFilter ? (
            <Text color="orange.900">{regionFilter}</Text>
          ) : (
            <Text>Qualquer região</Text>
          )}
        </Button>
      </PopoverTrigger>
      <Box as="form" onSubmit={handleSubmit}>
        <PopoverContent
          mt="24px"
          w={546}
          _focus={{ border: 'none' }}
          zIndex="10"
          backgroundColor="white.900"
        >
          <PopoverBody>
            <Flex
              w="100%"
              backgroundColor="white.900"
              alignContent="center"
              justifyContent="center"
              gridGap="24px"
              flexWrap="wrap"
            >
              {regionIcons.map((item) => (
                <Flex
                  role="button"
                  backgroundColor="white.900"
                  key={item.name}
                  justify="center"
                  align="center"
                  flexWrap="wrap"
                  flexDirection="column"
                  w="150px"
                  h="85px"
                  border="1px"
                  borderColor={
                    `${item.name}` === regionFilter ? 'orange.900' : 'gray.300'
                  }
                  borderRadius={8}
                  mt="24px"
                  transition="transform ease-in-out .2s"
                  _hover={{
                    transform: 'scale(1.1)',
                  }}
                  onClick={() => handleFilterRegion(item.name)}
                >
                  <Text>
                    {item.name}, {item.UF}
                  </Text>
                  <Image src={item.icon} />
                </Flex>
              ))}
            </Flex>
          </PopoverBody>
          <Box p="24px">
            <Text my="24px" color="black.600">
              Outra localização
            </Text>
            <Input
              h="50px"
              w="100%"
              placeholder="Digitar Localização"
              onFocus={() => setActiveFilter('region')}
              value={inputLocalization}
              onChange={(e) => setInputLocalization(e.target.value)}
            />
          </Box>
        </PopoverContent>
      </Box>
    </Popover>
  )
}
