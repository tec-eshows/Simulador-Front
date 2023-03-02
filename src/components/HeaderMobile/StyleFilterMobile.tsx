import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
  styles?: {
    ID?: string
    title: string
    icon: string
  }[]
}

export function StyleFilterMobile({ styles }: StyleFilterProps) {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const { setStylesFilter, styleFilter, urlFilter } = useUrlFilter()

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
                <Text>Estilo </Text>
                <Text color="orange.900" pr="6px">
                  {styleFilter}
                </Text>
              </Flex>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} bg="white.900" borderRadius="0 0 10px 10px">
              <Box>
                <Flex
                  w="100%"
                  backgroundColor="white.900"
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
                      minW="100px"
                      h="100px"
                      border="1px"
                      borderColor={
                        item.title === styleFilter ? 'orange.900' : 'gray.300'
                      }
                      borderRadius={8}
                      ml="5px"
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
              </Box>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  )
}
