import React from 'react'
import Image from 'next/image'
import * as C from '@chakra-ui/react'
import Info from '../../../../assets/Info.svg'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Days } from '../../../../utils/daysAndMonths'

interface Props {
  handleNextStep: () => void
}

const TooTipText = `
O equipamento sonoro mínimo necessário para um evento costuma variar de acordo com a formação. 
Quantidade de pedestais, cabos e microfones aumentam (assim como de instrumentos). 
Com relação ao sistema de som, o equipamento consiste principalmente na mesa de som e caixas de som.
A capacidade da mesa de som e potências das caixas também aumentam de acordo com a formação e/ou o evento.
`

export const FormationStep = ({ handleNextStep }: Props) => {

  const [toolTip, setToolTip] = React.useState(false)

  const equipment = [
    {
      id: 0,
      label: 'Selecione',
    },
    {
      id: 1,
      label: 'Tenho todo o equipamento de som'
    },
    {
      id: 2,
      label: 'Não tenho todo o equipamento de som'
    },
  ]

  return (
    <C.Flex ml="5%" mr="5%" mt={'24px'} direction={'column'}>
      <C.Text fontWeight={'bold'}>
        Escolha a formação que irá animar sua festa!
      </C.Text>
      <C.Flex
        h={'70vh'}
        direction={'column'}
        mt={'24px'}
      >
        <C.Box>
          <C.Text>
            Escolha a formação
          </C.Text>
          <C.Select
            variant="flushed"
            mb={'24px'}
          >
            {Days.map((item) => (
              <option
                key={item.id}
                style={{
                  backgroundColor: 'white.900',
                  color: 'rgba(0, 0, 0, 0.36)',
                }}
              >
                {item.label}
              </option>
            ))}
          </C.Select>
        </C.Box>
        <C.Text fontWeight={'bold'} mb={'24px'}>
          Você tem todo o equipamento necessário?
        </C.Text>
        <C.Flex
          h="44px"
          w={'100%'}
          bg="whiteAlpha.800"
          justifyContent={'space-between'}
          alignItems={'center'}
          p="16px"
          borderRadius={'16px'}
          mb={'24px'}
        >
          <C.Text color={'blackAlpha.900'} fontSize={'14px'} fontWeight={'bold'}>
            Equipamentos necessários
          </C.Text>
          <C.Tooltip
            placement="bottom-start"
            ml="5%"
            mt={'5px'}
            isOpen={toolTip}
            label={TooTipText}
          >
            <C.IconButton
              variant="unstyled"
              aria-label="Close"
              onClick={() => {
                setToolTip(!toolTip)
              }}
              icon={<Image src={Info} alt="Menu" width={24} height={24} />}
            />
          </C.Tooltip>
        </C.Flex>
        <C.Box>
          <C.Text>
            Você tem equipamento completo?
          </C.Text>
          <C.Select
            variant="flushed"
          >
            {equipment.map((item) => (
              <option
                key={item.id}
                style={{
                  backgroundColor: 'white.900',
                  color: 'rgba(0, 0, 0, 0.36)',
                }}
              >
                {item.label}
              </option>
            ))}
          </C.Select>
        </C.Box>
        <C.Button
          size="lg"
          colorScheme="yellow"
          shadow={'base'}
          onClick={handleNextStep}
          mt='20vh'
        >
          <C.Flex alignItems={'center'}>
            <C.Text mr="8px" color={'white.900'}>
              Continuar cotação
            </C.Text>
            <ChevronRightIcon color="white.900" w="20px" h="20px" />
          </C.Flex>
        </C.Button>
      </C.Flex>
    </C.Flex>
  )
}
