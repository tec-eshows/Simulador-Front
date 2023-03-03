import { Box, Text } from '@chakra-ui/react'
interface Props {
  content: string
}
export function Preview({ content }: Props) {
  return (
    <Box
      bg="white.900"
      w="384px"
      height="100%"
      boxShadow="0px 0px 4px 2px rgba(0, 0, 0, 0.25)"
      borderRadius="16px"
    >
      <Text>{content}</Text>
    </Box>
  )
}
