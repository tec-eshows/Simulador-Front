import { Box, Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Button } from '../../Button'
import { getContent } from '../getContent'
interface Props {
  handleNextStep: () => void
}
function Bullet({ text }) {
  return (
    <Flex
      justify="center"
      align="center"
      bg="orange.900"
      borderRadius="50%"
      w={'18px'}
      h={'18px'}
    >
      <Text color="white.900">{text}</Text>
    </Flex>
  )
}

export function StylesStep({ handleNextStep }: Props) {
  const [styles, setStyles] = useState([])
  const [selectedStyles, setSelectedStyles] = useState<any>({})
  const [filteredStyles, setFilteredStyles] = useState([])
  const [counter, setCounter] = useState(2)

  function handleSelectMainStyle(data) {
    if (!selectedStyles?.ID) {
      setSelectedStyles(data)
    } else {
      setFilteredStyles([])
      setSelectedStyles(null)
      setCounter(2)
    }
  }
  function handleSelectSecondariesStyle(data) {
    console.log(data.counter)
    setFilteredStyles((prevState) =>
      [
        ...prevState.filter((item) => item.ID !== data.ID),
        {
          ...data,
          active: counter <= 3 ? !data.active : false,
          counter: counter <= 3 ? counter : 2,
        },
      ].sort((a, b) => a.ORDER - b.ORDER),
    )
    if (data.counter && data.active) {
      setCounter((oldState) => oldState - 1)
    } else if (counter < 4) {
      setCounter((oldState) => oldState + 1)
    }
  }
  useEffect(() => {
    async function fetchGroupStyles() {
      const res = await getContent.getGroupStyles(selectedStyles.ID)
      const filteredStyles = [selectedStyles]
      res.forEach((item, index) => {
        Object.values(item).forEach((item2, i) => {
          // const obj = Object.assign(item2, { active: true })

          const filtered = styles.find((style) => style.ID === item2)

          if (filtered) {
            const obj = Object.assign(filtered, { active: false }, { ORDER: i })

            filteredStyles.push(obj)
          }
        })
      })
      setFilteredStyles(filteredStyles)
    }
    if (selectedStyles?.ID) {
      fetchGroupStyles()
    }
  }, [selectedStyles, styles])
  useEffect(() => {
    async function fetchStyles() {
      const styles = await getContent.styles()
      setStyles(styles)
    }
    fetchStyles()
  }, [])
  console.log(counter)
  return (
    <Flex w="100%" h="100%" flexDir="column">
      <Text fontSize="24px" lineHeight="32px" mb="40px">
        Por favor, escolha 3 estilos músicais em ordem de importância! Eles
        servirão para personalizar nossa busca.
      </Text>
      <Text>
        A duração padrão do show pode variar de acordo com os estilos! Country,
        Folk, Salsa, Tango, Black Music, Soul, Blues, Jazz e Cover/Tributo: 2h
        de permanência (1h45 de show com 15min de intervalo) Outros estilos: 3h
        de permanência (2h30 de show com 30 min de intervalo)o.
      </Text>
      <Flex mt="24px" gridGap="24px" flexWrap="wrap">
        {filteredStyles.length > 0
          ? filteredStyles.map((item, i) => (
              <Flex
                onClick={() =>
                  i !== 0
                    ? handleSelectSecondariesStyle(item)
                    : handleSelectMainStyle(item)
                }
                justifyContent="center"
                alignItems="center"
                gridGap="4px"
                cursor="pointer"
                key={item.label}
                borderWidth={1}
                borderColor="white.900"
                borderRadius="30px"
                py="4px"
                px="12px"
                color={i === 0 || item.active ? 'orange.900' : 'white.900'}
                bg={i === 0 || item.active ? 'white.900' : 'orange.900'}
                _hover={{
                  backgroundColor: 'white.900',
                  color: 'orange.900',
                }}
              >
                {i === 0 && <Bullet text={1} />}
                {item.counter && item.active && <Bullet text={item.counter} />}
                <Text fontSize="16px">{item.DESCRICAO}</Text>
              </Flex>
            ))
          : styles.map((item) => (
              <Box
                cursor="pointer"
                key={item.label}
                borderWidth={1}
                borderColor="white.900"
                borderRadius="30px"
                py="4px"
                px="12px"
                _hover={{
                  backgroundColor: 'white.900',
                  color: 'orange.900',
                }}
                bg={item.active ? 'white.900' : 'orange.900'}
                onClick={() => handleSelectMainStyle(item)}
              >
                <Text>{item.DESCRICAO}</Text>
              </Box>
            ))}
      </Flex>

      <Flex w="100%" h="100%" align="flex-end">
        <Button
          title="Continuar cotação"
          w="380px"
          mt="80px"
          onClick={handleNextStep}
        />
      </Flex>
    </Flex>
  )
}
