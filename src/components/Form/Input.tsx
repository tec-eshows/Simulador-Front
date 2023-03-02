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
} from '@chakra-ui/react'

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: any
  icon?: any
  iconRight?: any
  bg?: string
  disabled?: boolean
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, icon, iconRight, bg = 'gray.200', ...rest },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  function handleInputBloor() {
    setIsFocused(true)
  }
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup justifyContent="center" alignItems="center">
        {icon && (
          <InputLeftElement
            pl={icon ? '2' : ''}
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
          pl={icon ? '14' : '2'}
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
          {...rest}
        />
        {iconRight && (
          <InputRightElement
            pr="2"
            fontWeight="light"
            justifyContent="center"
            alignItems="center"
            pointerEvents="none"
            fontSize="24px"
            children={<Icon as={iconRight} color="gray.600" />}
          />
        )}
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
