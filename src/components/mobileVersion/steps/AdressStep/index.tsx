import { ChevronRightIcon } from '@chakra-ui/icons'
import * as C from '@chakra-ui/react'

interface Props {
  handleNextStep: () => void
}

export const AdressStep = ({ handleNextStep }: Props) => {
  return (
    <C.Flex ml="5%" mr="5%" mt={'24px'} direction={'column'}>
      <C.Text fontWeight={'bold'}>
        Onde será realizado o evento?
      </C.Text>
      <C.Text>
        Insira o endereço onde vai acontecer o show! Com isso iremos selecionar o melhor artista da região
      </C.Text>
      <C.Flex
        h={'80vh'}
        direction={'column'}
        justifyContent={'space-between'}
        mt={'24px'}
      >
        <C.Flex direction={'column'}>
          <C.Text>CEP do endereço onde acontecerá o show</C.Text>
          <C.Input
            variant={'flushed'}
            focusBorderColor="yellow.400"
            placeholder={'Digite o CEP'}
            _placeholder={{ opacity: 1, color: 'white.900' }}
          />
          <C.Flex flexDirection={'row'}>
            <C.Box w={'35%'}>
              <C.Text mt={'24px'}>Estado</C.Text>
              <C.Input
                variant={'flushed'}
                focusBorderColor="yellow.400"
                placeholder={'Digite a UF'}
                _placeholder={{ opacity: 1, color: 'white.900' }}
              />
            </C.Box>
            <C.Box w={'60%'} ml={'5%'}>
              <C.Text mt={'24px'}>Cidade</C.Text>
              <C.Input
                variant={'flushed'}
                focusBorderColor="yellow.400"
                placeholder={'Digite a cidade'}
                _placeholder={{ opacity: 1, color: 'white.900' }}
              />
            </C.Box>
          </C.Flex>
          <C.Text mt={'24px'}>Bairro</C.Text>
          <C.Input
            variant={'flushed'}
            focusBorderColor="yellow.400"
            placeholder={'Digite o bairro'}
            _placeholder={{ opacity: 1, color: 'white.900' }}
          />
          <C.Text mt={'24px'}>Endereço do show</C.Text>
          <C.Input
            variant={'flushed'}
            focusBorderColor="yellow.400"
            placeholder={'Digite o endereço'}
            _placeholder={{ opacity: 1, color: 'white.900' }}
          />
        </C.Flex>
        <C.Flex flexDirection={'row'} mt={'24px'}>
          <C.Box w={'35%'}>
            <C.Text>Número</C.Text>
            <C.Input
              variant={'flushed'}
              focusBorderColor="yellow.400"
              placeholder={'Digite o número'}
              _placeholder={{ opacity: 1, color: 'white.900' }}
            />
          </C.Box>
          <C.Box w={'60%'} ml={'5%'}>
            <C.Text>Complemento</C.Text>
            <C.Input
              variant={'flushed'}
              focusBorderColor="yellow.400"
              placeholder={'Digite o complemento'}
              _placeholder={{ opacity: 1, color: 'white.900' }}
            />
          </C.Box>
        </C.Flex>
        <C.Button
          size="lg"
          colorScheme="yellow"
          shadow={'base'}
          onClick={handleNextStep}
          mb={'24px'}
          mt={'24px'}
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
