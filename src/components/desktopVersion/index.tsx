import { Flex, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { Header } from '../Header'
import { Preview } from '../Preview'
import { ContactStep } from './Steps/ContactStep'
import { OccasionStep } from './Steps/OccasionStep'

export function DesktopVersion() {
  const [step, setStep] = useState(1)
  const [progressCount, setProgressCount] = useState(12.5)
  const handleNextStep = () => {
    setStep((prevState) => prevState + 1)
    setProgressCount((prevState) => prevState + 12.5)
  }
  return (
    <Stack align="center" w="100%" h="100vh">
      <Stack w="90%" h="100%" spacing="60px" maxW="1440px">
        <Header progress={progressCount} />
        <Flex justify="space-between" w="100%" h="100%" pb="2%">
          {step === 1 && <ContactStep handleNextStep={handleNextStep} />}
          {step === 2 && <OccasionStep handleNextStep={handleNextStep} />}

          <Stack w="100%" h="100%" align="flex-end">
            <Preview content="Meu nome é tal taal tal" />
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  )
}
