import { Box, Flex, Text } from '@chakra-ui/react'
import { Button } from '../../Button'
interface Props {
  handleNextStep: () => void
}
export function OccasionStep({ handleNextStep }: Props) {
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
        Precisamos saber qual o tipo de evento ou ocasião que você está
        planejando.
      </Text>
      <Text>
        Casamentos, Formaturas ou Eventos Corporativos, são ocasiões que merecem
        um alinhamento especial! Se seu evento se adequa a uma dessas ocasiões,
        nos contate clicando aqui!
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
