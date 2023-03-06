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
    ...rest
  },
  ref,
) => {
  return (
    <FormControl isInvalid={!!error} w="auto">
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <SelectChakra
        borderColor="transparent"
        w={w}
        bg="white.900"
        color="blackAlpha.900"
        name={name}
        {...rest}
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Select = forwardRef(SelectBase)
