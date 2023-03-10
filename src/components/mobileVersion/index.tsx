import React from 'react'
import * as C from '@chakra-ui/react'
import Sheet from 'react-modal-sheet'
import { DateStep } from './steps/DateStep'
import { MobileHeader } from './mobileHeader'
import { GuestsStep } from './steps/GuestsStep'
import { AdressStep } from './steps/AdressStep'
import { ContactStep } from './steps/contactStep'
import { FormationStep } from './steps/FormationStep'
import { StylesStepsMobile } from './steps/StylesStep'
import { OccasionStepMobile } from './steps/OccasionStep'
import { ObsercationStep } from './steps/ObservationsStep'


export const MobileVersion = () => {
  const [step, setStep] = React.useState(1)
  const [isOpen, setOpen] = React.useState(false)

  const handleNextStep = () => {
    setStep((oldState) => oldState + 1)
  }
  return (
    <C.Flex direction={'column'}> 
      <MobileHeader
        menuPress={() => setOpen(true)}
        backPress={() => setStep((oldState) => oldState - 1)}
        step={step}
        title={
          step === 1 ? 'Contato' : step === 2 ? 'Ocasião' : step === 3 ? 'Estilos musicais'
            : step === 4 ? 'Data e Hora ' : step === 5 ? 'Formação e Equipamento' : step === 6 ? 'Quantidade de convidados'
              : step === 7 ? 'Endereço' : step === 8 ? 'Observações' : 'Contato'
        }
      />
      {step === 1 && <ContactStep handleNextStep={handleNextStep} />} 
      {step === 2 && <OccasionStepMobile handleNextStep={handleNextStep} />}
      {step === 3 && <StylesStepsMobile handleNextStep={handleNextStep} />}
      {step === 4 && <DateStep handleNextStep={handleNextStep} />}
      {step === 5 && <FormationStep handleNextStep={handleNextStep} />}
      {step === 6 && <GuestsStep handleNextStep={handleNextStep} />} 
      {step === 7 && <AdressStep handleNextStep={handleNextStep} />}
      {step === 8 && <ObsercationStep handleNextStep={handleNextStep} />}
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
