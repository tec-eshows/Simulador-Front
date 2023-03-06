import { Box, Flex, Text, Textarea } from '@chakra-ui/react'
import { Button } from '../../Button'
interface Props {
  handleNextStep: () => void
}
export function ObservationStep({ handleNextStep }: Props) {
  const formations = [
    {
      label: 'Animado',
    },
    {
      label: 'Relaxante',
    },
    {
      label: 'Dançante',
    },
    {
      label: 'Acústico',
    },
    {
      label: 'Instrumental',
    },
    {
      label: 'Equipamento Profissional (palco, iluminação e equipamentos)',
    },
    {
      label: 'Presença de palco',
    },

    {
      label: 'Artista ou grupo famoso',
    },
    {
      label: 'Elegante',
    },
    {
      label: 'Romântico',
    },
    {
      label: 'Sax/Sopro',
    },
    {
      label: 'Piano/Teclado',
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
      <Text fontSize="24px" lineHeight="32px" mb="30px">
        Como você espera que o seu show seja?
      </Text>
      <Text>
        Escolha 3 Tags que vão definir o que você espera do seu Show. Essa
        informação é importante para que você receba o artista mais alinhado com
        as suas expectativas.
      </Text>
      <Flex mt="30px" gridGap="24px" flexWrap="wrap">
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
      <Box mt="36px">
        <Text mb="8px">
          Tem algo mais que queira nos falar? campo opcional*
        </Text>
        <Textarea bg="white.900" h="80px" placeholder="Gostaria de ..." />
      </Box>
      <Flex w="100%" h="100%" align="flex-end">
        <Button title="Continuar" w="380px" onClick={handleNextStep} />
      </Flex>
    </Flex>
  )
}
