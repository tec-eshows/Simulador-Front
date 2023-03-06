import { Box, Flex, Text } from '@chakra-ui/react'
import { Button } from '../../Button'
interface Props {
  handleNextStep: () => void
}
export function StylesStep({ handleNextStep }: Props) {
  const ocasions = [
    {
      label: 'Aniversário',
    },
    {
      label: 'Evento universitário',
    },
    {
      label: 'Evento Escolar',
    },
    {
      label: 'Festa particular',
    },
    {
      label: 'Evento Familiar',
    },
  ]
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
        {ocasions.map((item) => (
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
          >
            <Text>{item.label}</Text>
          </Box>
        ))}
      </Flex>

      <Flex w="100%" h="100%" align="flex-end">
        <Button
          title="Continuar"
          w="380px"
          mt="80px"
          onClick={handleNextStep}
        />
      </Flex>
    </Flex>
  )
}
