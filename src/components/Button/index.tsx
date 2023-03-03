import { Button as ButtonChakra, ButtonProps } from '@chakra-ui/react'
interface Props extends ButtonProps {
  title: string
  w?: string | number
  bg?: string
}
export function Button({ title, bg = '#FCB040', ...rest }: Props) {
  return (
    <ButtonChakra
      bg={bg}
      {...rest}
      _hover={{
        backgroundColor: bg,
      }}
    >
      {title}
    </ButtonChakra>
  )
}
