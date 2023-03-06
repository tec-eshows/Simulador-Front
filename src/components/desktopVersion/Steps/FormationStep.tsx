import { Box, Flex, Text } from '@chakra-ui/react'
import { Button } from '../../Button'
interface Props {
  handleNextStep: () => void
}
export function FormationStep({ handleNextStep }: Props) {
  const formations = [
    {
      label: 'Artista Solo',
    },
    {
      label: 'Dupla de Artistas',
    },
    {
      label: 'Trio de Artistas',
    },
    {
      label: 'Banda completa',
    },
  ]
  const soundEquipament = [
    {
      label: 'Tenho todo o equipamento de som',
    },
    {
      label: 'Não tenho todo o equipamento de som!',
    },
  ]
  return (
    <Flex w="100%" h="100%" flexDir="column">
      <Text fontSize="24px" lineHeight="32px" mb="40px">
        Escolha a formação que vai animar a sua festa!
      </Text>
      <Text>
        Vamos juntos definir juntos! Escolha as suas preferências para descobrir
        o preço do show.
      </Text>
      <Flex mt="80px" gridGap="24px" flexWrap="wrap">
        {formations.map((item) => (
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
      <Text fontSize="24px" lineHeight="32px" mb="40px" mt="24px">
        Você tem todo o equipamento de som necessário?
      </Text>
      <Text fontWeight="500">
        O equipamento sonoro mínimo necessário para um evento costuma variar de
        acordo com a formação. Quantidade de pedestais, cabos e microfones
        aumentam (assim como de instrumentos). Com relação ao sistema de som, o
        equipamento consiste principalmente na mesa de som e caixas de som. A
        capacidade da mesa de som e potências das caixas também aumentam de
        acordo com a formação e/ou o evento.
      </Text>
      <Flex mt="24px" gridGap="24px" flexWrap="wrap">
        {soundEquipament.map((item) => (
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
          mt="40px"
          onClick={handleNextStep}
        />
      </Flex>
    </Flex>
  )
}
