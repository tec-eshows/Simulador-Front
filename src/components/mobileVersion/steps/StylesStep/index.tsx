import { ChevronRightIcon } from '@chakra-ui/icons'
import * as C from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Info from '../../../../assets/Info.svg'
import { SelectMobile } from '../../../Form/SelectMobile'
import { getContent } from '../../getContent'

interface Props {
  handleNextStep: () => void
}

export const StylesStepsMobile = ({ handleNextStep }: Props) => {
  const [styles, setStyles] = useState([])
  const [toolTip, setToolTip] = useState(false)

  useEffect(() => {
    async function fetchStyles() {
      const styles = await getContent.styles()
      setStyles(styles)
    }
    fetchStyles()
  }, [])

  const TooTipText = `
  Para os estilos Country, Folk, Salsa, Tango, Black Music, Soul, Blues, Jazz e Cover/Tributo,
  A duração é de 2 horas, com 1 hora e 45 minutos de show e um intervalo de 15 minutos. 
  Para outros estilos, a permanência é de 3 horas, com 2 horas e 30 minutos de show e um intervalo de 30 minutos.
  `

  return (
    <C.Flex ml="5%" mr="5%" mt={'24px'} direction={'column'}>
      <C.Text fontWeight={'bold'}>
        Precisamos saber qual o tipo de evento ou ocasião que você está
        planejando.
      </C.Text>
      <C.Flex
        mt={'16px'}
        h="60px"
        w={'100%'}
        bg="whiteAlpha.800"
        justifyContent={'space-between'}
        alignItems={'center'}
        p="16px"
        borderRadius={'16px'}
      >
        <C.Text color={'blackAlpha.900'} fontSize={'14px'} fontWeight={'bold'}>
          A duração padrão do show pode
          <br /> variar de acordo com os estilos!
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
            icon={<Image src={Info} alt="Menu" width={32} height={32} />}
          />
        </C.Tooltip>
      </C.Flex>
      <C.Flex
        h={'55vh'}
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
          <SelectMobile
            name="style1"
            w="100%"
            defaultValue="Selecione"
            label="Segundo estilo"
            mt={'24px'}
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
          <SelectMobile
            name="style1"
            w="100%"
            defaultValue="Selecione"
            label="Terceiro estilo"
            mt={'24px'}
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
