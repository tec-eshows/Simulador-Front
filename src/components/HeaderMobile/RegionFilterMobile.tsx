import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Input,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useUrlFilter } from '../../contexts/FilterUrlContext'
import { regionIcons } from '../../utils/RegionIcons'

export function RegionFilterMobile() {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [inputLocalization, setInputLocalization] = useState('')
  const { regionFilter, setRegionFilter, urlFilter } = useUrlFilter()

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
  useEffect(() => {
    const searchParams = new URLSearchParams(urlFilter)
    const region = searchParams.get('regiao')

    if (region) {
      setRegionFilter(region)
    }
  }, [])
  const ref = useRef()
  return (
    <Accordion allowToggle>
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              h="60px"
              borderRadius={isExpanded ? '10px 10px 0 0' : '10px'}
              bg="white.900 !important"
            >
              <Flex
                flex="1"
                textAlign="left"
                bg="white.900"
                justify="space-between"
              >
                <Text>Região </Text>
                <Text color="orange.900" pr="6px">
                  {regionFilter}
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} bg="white.900" borderRadius="0 0 10px 10px">
              <Box>
                <Input
                  h="50px"
                  w="100%"
                  placeholder="Qual a região?"
                  value={regionFilter}
                  onChange={(e) => setRegionFilter(e.target.value)}
                />
              </Box>
              <Box>
                <Flex
                  w="100%"
                  backgroundColor="white.900"
                  gridGap="5px"
                  overflowX="auto"
                  height="150px"
                  sx={{
                    '&::-webkit-scrollbar': {
                      width: '16px',
                      borderRadius: '12px',
                      backgroundColor: `rgba(0, 0, 0, 0.05)`,
                      height: 5,
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: `orange.900`,
                      borderRadius: '12px',
                    },
                  }}
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
                      minW="150px"
                      maxH="85px"
                      border="1px"
                      borderColor={
                        `${item.name}` === regionFilter
                          ? 'orange.900'
                          : 'gray.300'
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
              </Box>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}
