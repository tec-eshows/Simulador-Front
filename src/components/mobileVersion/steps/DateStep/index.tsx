import { ChevronRightIcon } from '@chakra-ui/icons'
import * as C from '@chakra-ui/react'
import { Days, Months } from '../../../../utils/daysAndMonths'

interface Props {
  handleNextStep: () => void
}

export const DateStep = ({ handleNextStep }: Props) => {
  return (
    <C.Flex ml="5%" mr="5%" mt={'24px'} direction={'column'}>
      <C.Text fontWeight={'bold'}>
        Quando será o seu show? Qual a data e hora?
      </C.Text>
      <C.Text fontSize="14px" mt="24px">
        Vamos fazer deste show um sucesso!
        Para otimizar a organização dos equipamentos e evitar possíveis atrasos,
        pedimos que os artistas cheguem com 40 minutos de antecedência, no mínimo!
      </C.Text>
      <C.Flex
        h={'51vh'}
        direction={'column'}
        justifyContent={'space-between'}
        mt={'24px'}
      >
        <C.Input
          placeholder="Selecione uma data"
          size="md"
          type="datetime-local"
        />
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
