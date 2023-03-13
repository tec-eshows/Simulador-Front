import { ChevronRightIcon } from '@chakra-ui/icons'
import * as C from '@chakra-ui/react'

interface Props {
  handleNextStep: () => void
}

const guests = [
  {
    id: 0,
    label: 'Selecione',
  },
  {
    id: 1,
    label: '1 á 50 pessoas'
  },
  {
    id: 2,
    label: '51 á 100 pessoas'
  },
  {
    id: 3,
    label: '101 á 150 pessoas'
  },
  {
    id: 4,
    label: '151 á 200 pessoas'
  },
  {
    id: 5,
    label: '+ de 200 pessoas'
  },
]

export const GuestsStep = ({ handleNextStep }: Props) => {
  return (
    <C.Flex ml="5%" mr="5%" mt={'24px'} direction={'column'}>
      <C.Text fontWeight={'bold'}>
        Em média, quanto convidados participarão do seu evento?
      </C.Text>
      <C.Text>
        Isso é crucial! A quantidade de público implica diretamente no tipo de equipamento que o artista precisa levar e garantir uma performance de alta qualidade e valor competitivo!
      </C.Text>
      <C.Flex
        h={'45vh'}
        direction={'column'}
        justifyContent={'space-between'}
        mt={'24px'}
      >
        <C.Box>
          <C.Text>
            Escolha a quantidade
          </C.Text>
          <C.Select
            variant="flushed"
          >
            {guests.map((item) => (
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
