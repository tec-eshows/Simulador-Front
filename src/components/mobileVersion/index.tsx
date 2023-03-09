import * as C from '@chakra-ui/react'
import React from 'react'
import Sheet from 'react-modal-sheet'
import { MobileHeader } from './mobileHeader'
import { ContactStep } from './steps/contactStep'
import { OccasionStepMobile } from './steps/OccasionStep'
import { StylesStepsMobile } from './steps/StylesStep'

export const MobileVersion = () => {
  const [step, setStep] = React.useState(1)
  const [isOpen, setOpen] = React.useState(false)

  const handleNextStep = () => {
    setStep((oldState) => oldState + 1)
  }
  return (
    <C.Flex direction={'column'}>
      <MobileHeader menuPress={() => setOpen(true)} />
      {step === 1 && <ContactStep handleNextStep={handleNextStep} />}
      {step === 2 && <OccasionStepMobile handleNextStep={handleNextStep} />}
      {step === 3 && <StylesStepsMobile handleNextStep={handleNextStep} />}
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>{/* Your sheet content goes here */}</Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </C.Flex>
  )
}
