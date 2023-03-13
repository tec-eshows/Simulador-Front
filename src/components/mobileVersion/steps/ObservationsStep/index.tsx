import { ChevronRightIcon } from '@chakra-ui/icons'
import * as C from '@chakra-ui/react'

interface Props {
  handleNextStep: () => void
}

const types = [
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

export const ObsercationStep = ({ handleNextStep }: Props) => {
  return (
    <C.Flex ml="5%" mr="5%" mt={'24px'} direction={'column'}>
      <C.Text fontWeight={'bold'}>
        Como você espera que o seu show seja?
      </C.Text>
      <C.Text>
        Escolha 3 caracteristicas que vão definir o que você espera do seu Show. Essa informação é importante para que o você receba o artista mais alinhado com as suas expectativas.
      </C.Text>
      <C.Flex
        h={'51vh'}
        direction={'column'}
        justifyContent={'space-between'}
        mt={'24px'}
      >
        <C.Flex direction={'column'}>
          <C.Box>
            <C.Text>
              Primeira caracteristica
            </C.Text>
            <C.Select
              variant="flushed"
            >
              {types.map((item) => (
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
          <C.Box mt={'24px'}>
            <C.Text>
              Segunda caracteristica
            </C.Text>
            <C.Select
              variant="flushed"
            >
              {types.map((item) => (
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
          <C.Box mt={'24px'}>
            <C.Text>
              Terceira caracteristica
            </C.Text>
            <C.Select
              variant="flushed"
            >
              {types.map((item) => (
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
        </C.Flex>
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
