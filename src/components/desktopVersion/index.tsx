import { Flex, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { Header } from '../Header'
import { Preview } from '../Preview'
import { AdressStep } from './Steps/AdressStep'
import { ContactStep } from './Steps/ContactStep'
import { DateStep } from './Steps/DateStep'
import { FormationStep } from './Steps/FormationStep'
import { ObservationStep } from './Steps/ObservationStep'
import { OccasionStep } from './Steps/OccasionStep'
import { StylesStep } from './Steps/StylesSteps'
export function DesktopVersion() {
  const [step, setStep] = useState(1)
  const [progressCount, setProgressCount] = useState(14.28)
  const handleNextStep = () => {
    setStep((prevState) => prevState + 1)
    setProgressCount((prevState) => prevState + 14.28)
  }

  return (
    <Stack align="center" w="100%" h="100vh">
      <Stack w="90%" h="100%" spacing="60px" maxW="1440px">
        <Header progress={progressCount} />
        <Flex justify="space-between" w="100%" h="100%" pb="2%">
          {step === 1 && <ContactStep handleNextStep={handleNextStep} />}
          {step === 2 && <OccasionStep handleNextStep={handleNextStep} />}
          {step === 3 && <StylesStep handleNextStep={handleNextStep} />}
          {step === 4 && <DateStep handleNextStep={handleNextStep} />}
          {step === 5 && <FormationStep handleNextStep={handleNextStep} />}
          {step === 6 && <AdressStep handleNextStep={handleNextStep} />}
          {step === 7 && <ObservationStep handleNextStep={handleNextStep} />}

          <Stack w="100%" h="100%" align="flex-end">
            <Preview content="Meu nome é tal taal tal" />
          </Stack>
        </Flex>
      </Stack>
    </Stack>
  )
}
