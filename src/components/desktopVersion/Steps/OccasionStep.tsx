import { Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Button } from '../../Button'
interface Props {
  handleNextStep: () => void
  previewMessage: string
  setPreviewMessage: (message) => void
}
export function OccasionStep({
  handleNextStep,
  previewMessage,
  setPreviewMessage,
}: Props) {
  const [occasion, setOccasion] = useState(null)
  const ocasions = [
    {
      id: 101,
      label: 'Aniversário',
    },
    {
      id: 110,
      label: 'Evento universitário',
    },
    {
      id: 109,
      label: 'Evento Escolar',
    },
    {
      id: 104,
      label: 'Festa particular',
    },
    {
      id: 108,
      label: 'Evento Familiar',
    },
  ]
  function handleSelectOccasion(data) {
    if (occasion?.id === data.id) {
      setOccasion(null)
    } else {
      setOccasion(data)
    }
  }
  function handleRemoveOccasion() {
    console.log('teste')
    setOccasion(null)
  }
  function submitHandler() {
    setPreviewMessage(
      previewMessage +
        `vou fazer um(a)
        <span
        style="color:#FC4F22;text-decoration:underline;font-weight:bold;text-transform:uppercase"
        id="name"
      >
        ${occasion.label}
      </span>

      </p>`,
    )
    handleNextStep()
  }
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
          <Flex
            gridGap="6px"
            cursor="pointer"
            key={item.label}
            borderWidth={1}
            borderColor={item.id === occasion?.id ? 'orange.900' : 'white.900'}
            borderRadius="30px"
            py="4px"
            px="12px"
            bg={item.id !== occasion?.id ? 'orange.900' : 'white.900'}
            onClick={() => handleSelectOccasion(item)}
          >
            <Text color={item.id === occasion?.id ? 'orange.900' : 'white.900'}>
              {item.label}
            </Text>
            {item.id === occasion?.id && (
              <Text
                onClick={handleRemoveOccasion}
                color="orange.900"
                fontWeight="bold"
                fontSize="16px"
              >
                x
              </Text>
            )}
          </Flex>
        ))}
      </Flex>

      <Flex w="100%" h="100%" align="flex-end">
        <Button
          title="Continuar cotação"
          w="380px"
          mt="80px"
          onClick={submitHandler}
        />
      </Flex>
    </Flex>
  )
}
