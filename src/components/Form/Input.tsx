import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

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
  { name, label, error = null, icon, iconRight, bg = 'white.900', ...rest },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <InputGroup>
        {icon && (
          <InputLeftElement
            pl={icon ? '2' : ''}
            fontWeight="light"
            justifyContent="center"
            alignItems="center"
            pointerEvents="none"
            fontSize="24px"
          />
        )}

        <ChakraInput
          pl={icon ? '14' : '2'}
          variant="outline"
          pb="5px"
          bg={bg}
          h="40px"
          borderRadius="6px"
          fontSize="16px"
          color="blackAlpha.900"
          _placeholder={{
            fontSize: '16px',
          }}
          focusBorderColor="orange.900"
          {...rest}
          _hover={{
            borderColor: 'orange.900',
          }}
          name={name}
          id={name}
          size="lg"
          ref={ref}
          borderColor="gray.300"
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
          />
        )}
      </InputGroup>
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)
