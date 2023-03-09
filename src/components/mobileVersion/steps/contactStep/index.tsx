import { ChevronRightIcon } from '@chakra-ui/icons'
import * as C from '@chakra-ui/react'

interface Props {
  handleNextStep: () => void
}
export const ContactStep = ({ handleNextStep }: Props) => {
  return (
    <C.Flex ml="5%" mr="5%" mt={'24px'} direction={'column'}>
      <C.Text fontWeight={'bold'}>
        Olá, bem vindo a Eshows. Estamos animados para oferecer a você a
        oportunidade de encontrar os melhores artistas musicais para os seus
        eventos. Vamos começar?
      </C.Text>
      <C.Flex
        h={'60vh'}
        direction={'column'}
        justifyContent={'space-between'}
        mt={'24px'}
      >
        <C.Flex direction={'column'}>
          <C.Text>Qual o seu nome?</C.Text>
          <C.Input
            variant={'flushed'}
            focusBorderColor="yellow.400"
            placeholder={'Digite seu nome'}
            _placeholder={{ opacity: 1, color: 'white.900' }}
          />
          <C.Text mt={'24px'}>Email</C.Text>
          <C.Input
            variant={'flushed'}
            focusBorderColor="yellow.400"
            placeholder={'Digite seu email'}
            _placeholder={{ opacity: 1, color: 'white.900' }}
          />
          <C.Text mt={'24px'}>Telefone para contato</C.Text>
          <C.Input
            variant={'flushed'}
            focusBorderColor="yellow.400"
            placeholder={'Digite um numero para contato'}
            _placeholder={{ opacity: 1, color: 'white.900' }}
          />
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
