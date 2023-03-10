import { ChevronRightIcon } from '@chakra-ui/icons'
import * as C from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { SelectMobile } from '../../../Form/SelectMobile'
import { getContent } from '../../getContent'
interface Props {
  handleNextStep: () => void
}
export const StylesStepsMobile = ({ handleNextStep }: Props) => {
  const [styles, setStyles] = useState([])
  useEffect(() => {
    async function fetchStyles() {
      const styles = await getContent.styles()
      setStyles(styles)
    }
    fetchStyles()
  }, [])

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
        h={'60vh'}
        direction={'column'}
        justifyContent={'space-between'}
        mt={'24px'}
      >
        <C.Flex direction={'column'}>
          <SelectMobile
            name="style1"
            w="100%"
            defaultValue="Selecione"
            label="Estilo músical pricipal"
          >
            <option
              style={{
                backgroundColor: 'white.900',
                color: 'rgba(0, 0, 0, 0.36)',
              }}
            >
              Selecione
            </option>
            {styles.map((item) => (
              <option
                key={item.id}
                style={{
                  backgroundColor: 'white.900',
                  color: 'rgba(0, 0, 0, 0.36)',
                }}
              >
                {item.DESCRICAO}
              </option>
            ))}
          </SelectMobile>
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
