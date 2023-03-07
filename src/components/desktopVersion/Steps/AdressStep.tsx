import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { Button } from '../../Button'
import { Input } from '../../Form/Input'
interface Props {
  handleNextStep: () => void
}
export function AdressStep({ handleNextStep }: Props) {
  return (
    <Box w="100%" h="100%">
      <Text fontSize="24px" lineHeight="32px" mb="40px">
        Endereço do show!
      </Text>
      <Text>
        É importante insira o endereço onde vai acontecer o show! Com isso
        iremos selecionar o melhor artista da região
      </Text>
      <VStack spacing="15px" align="flex-start" mt="40px">
        <Flex gridGap="32px">
          <Input name="cep" w="278px" placeholder="Digite o CEP" label="CEP" />
          <Input name="UF" w="90px" placeholder="UF" label="Estado" />
          <Input name="Cidade" w="248px" placeholder="Cidade" label="Cidade" />
        </Flex>
        <Flex gridGap="32px">
          <Input name="bairro" w="278px" placeholder="Bairro" label="Bairro" />
          <Input
            name="endereco"
            w="370px"
            placeholder="Endereço do Show"
            label="Endereço"
          />
        </Flex>
        <Flex gridGap="32px">
          <Input name="numero" w="79px" placeholder="_" label="Numero" />
          <Input
            name="complemento"
            w="569px"
            placeholder="Apto, casa 2, etc"
            label="Complemento"
          />
        </Flex>
      </VStack>
      <Button
        title="Continuar cotação"
        w="380px"
        mt="80px"
        onClick={handleNextStep}
      />
    </Box>
  )
}
