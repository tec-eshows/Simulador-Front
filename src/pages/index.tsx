import { useBreakpointValue } from '@chakra-ui/react'

export default function Simulator({}) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return <h1>HELLO WORLD</h1>
}
