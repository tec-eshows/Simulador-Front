import { Box, Flex, Text } from '@chakra-ui/react'
import { Button } from '../../Button'
interface Props {
  handleNextStep: () => void
}
export function GuestStep({ handleNextStep }: Props) {
  const formations = [
    {
      label: '1 à 50 pessoas',
    },
    {
      label: '51 à 100 pessoas ',
    },
    {
      label: '101 à 150 pessoas ',
    },
    {
      label: '151 à 200 pessoas',
    },
    {
      label: '+ de 200 pessoas',
    },
  ]

  return (
    <Flex w="100%" h="100%" flexDir="column">
      <Text fontSize="24px" lineHeight="32px" mb="40px">
        Em média, quantos convidados participarão do seu evento?
      </Text>
      <Text>
        Isso é crucial! A quantidade de público implica diretamente no tipo de
        equipamento que o artista precisa levar e garantir uma performance de
        alta qualidade e valor competitivo!
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
