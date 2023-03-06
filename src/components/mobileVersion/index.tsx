import React from "react";
import * as C from '@chakra-ui/react';
import Sheet from 'react-modal-sheet';
import { MobileHeader } from "./mobileHeader";
import { ContactStep } from "./steps/contactStep";

export const MobileVersion = () => {

    const [step, setStep] = React.useState(0);
    const [isOpen, setOpen] = React.useState(true);


    return (
        <C.Flex direction={'column'}>
            <MobileHeader menuPress={() => setOpen(true)}/>
            {
                step === 0 && <ContactStep />
            }
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