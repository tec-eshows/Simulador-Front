import { ChevronRightIcon } from '@chakra-ui/icons'
import * as C from '@chakra-ui/react'
import { SelectMobile } from '../../../Form/SelectMobile'
interface Props {
  handleNextStep: () => void
}
export const OccasionStepMobile = ({ handleNextStep }: Props) => {
  const occasions = [
    {
      id: 0,
      label: 'Selecione',
    },
    {
      id: 101,
      label: 'Aniversário',
    },
    {
      id: 110,
      label: 'Evento universitário',
    },
    {
      id: 109,
      label: 'Evento Escolar',
    },
    {
      id: 104,
      label: 'Festa particular',
    },
    {
      id: 108,
      label: 'Evento Familiar',
    },
  ]
  return (
    <C.Flex ml="5%" mr="5%" mt={'24px'} direction={'column'}>
      <C.Text fontWeight={'bold'}>
        Precisamos saber qual o tipo de evento ou ocasião que você está
        planejando.
      </C.Text>
      <C.Text fontSize="14px" mt="24px">
        Casamentos, Formaturas ou Eventos Corporativos, são ocasiões que merecem
        um alinhamento especial! Se seu evento se adequa a uma dessas ocasiões,
        nos contate clicando aqui!
      </C.Text>
      <C.Flex
        h={'52vh'}
        direction={'column'}
        justifyContent={'space-between'}
        mt={'24px'}
      >
        <C.Box>
          <SelectMobile name="occasion" w="100%">
            {occasions.map((item) => (
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
          </SelectMobile>
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
