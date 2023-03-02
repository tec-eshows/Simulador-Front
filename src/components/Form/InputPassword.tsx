import { forwardRef, ForwardRefRenderFunction, useRef, useState } from 'react'
import { FieldError } from 'react-hook-form'
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps as ChakraInputProps,
  Flex,
  Button,
} from '@chakra-ui/react'

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
  icon?: any
  iconRight?: any
  bg?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, icon, iconRight, bg = 'gray.200', ...rest },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isVisible, setIsVisibile] = useState(false)

  function handleInputBloor() {
    setIsFocused(true)
  }
  function handleVisiblePassword() {
    setIsVisibile(!isVisible)
  }
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup justifyContent="center" alignItems="center">
        {icon && (
          <InputLeftElement
            pl="2"
            fontWeight="light"
            justifyContent="center"
            alignItems="center"
            pointerEvents="none"
            fontSize="24px"
            children={
              <Icon as={icon} color={isFocused ? 'orange.900' : 'gray.600'} />
            }
          />
        )}

        <ChakraInput
          pl="14"
          variant="outline"
          pb="5px"
          bg={bg}
          h="48px"
          borderRadius="8px"
          fontSize="xl"
          _placeholder={{
            fontSize: 'xl',
          }}
          focusBorderColor="orange.900"
          {...rest}
          onBlurCapture={() => setIsFocused(false)}
          onFocus={handleInputBloor}
          name={name}
          id={name}
          size="lg"
          ref={ref}
          type={isVisible ? 'text' : 'password'}
          {...rest}
        />

        <InputRightElement
          pr="2"
          fontWeight="light"
          cursor="pointer"
          fontSize="24px"
        >
          <Flex onClick={handleVisiblePassword}>
            {!isVisible ? (
              <Icon as={AiFillEyeInvisible} color="gray.600" />
            ) : (
              <Icon as={AiFillEye} color="gray.600" />
            )}
          </Flex>
        </InputRightElement>
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const InputPassword = forwardRef(InputBase)
