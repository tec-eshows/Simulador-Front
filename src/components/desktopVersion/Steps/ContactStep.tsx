import { Box, Text, VStack } from '@chakra-ui/react'
import { Button } from '../../Button'
import { Input } from '../../Form/Input'
interface Props {
  handleNextStep: () => void
}
export function ContactStep({ handleNextStep }: Props) {
  return (
    <Box w="100%" h="100%">
      <Text fontSize="24px" lineHeight="32px" mb="80px">
        Olá, bem vindo a Eshows. Estamos animados para oferecer a você a
        oportunidade de encontrar os melhores artistas musicais para os seus
        eventos. Vamos começar?
      </Text>
      <VStack spacing="15px" align="flex-start">
        <Input
          name="name"
          w="578px"
          placeholder="Digite seu nome"
          label="Qual o seu nome?"
        />
        <Input
          name="email"
          w="380px"
          placeholder="Digite seu email"
          label="Email"
          type="email"
        />
        <Input
          name="tel"
          w="380px"
          placeholder="11 959067792"
          label="Telefone para contato"
        />
      </VStack>
      <Button title="Continuar" w="380px" mt="80px" onClick={handleNextStep} />
    </Box>
  )
}
