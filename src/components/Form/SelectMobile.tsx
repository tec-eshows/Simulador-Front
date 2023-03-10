import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Select as SelectChakra,
    SelectProps
} from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

interface InputProps extends SelectProps {
  name: string
  label?: string
  error?: any
  icon?: any
  iconRight?: any
  bg?: string
  disabled?: boolean
  w?: string
}

const SelectBase: ForwardRefRenderFunction<HTMLSelectElement, InputProps> = (
  {
    name,
    label,
    error = null,
    icon,
    iconRight,
    bg = 'white.900',
    w = '138px',
    mt = 0,
    ml = 0,
    ...rest
  },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error} w="auto">
      {!!label && <FormLabel mt={mt} ml={ml} htmlFor={name}>{label}</FormLabel>}

      <SelectChakra
        variant="flushed"
        w={w}
        color="white.900"
        colorScheme="brand"
        name={name}
        ml={ml}
        placement='bottom-start'
        _focusVisible={{
          borderColor: 'white.900',
        }}
        {...rest}
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const SelectMobile = forwardRef(SelectBase)
