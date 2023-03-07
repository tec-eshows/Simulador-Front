import { Box, Text } from '@chakra-ui/react'
interface Props {
  content: string
}
export function Preview({ content }: Props) {
  console.log(content)
  const handleClick = (e) => {
    console.log(e.target.id)
  }
  return (
    <Box
      bg="white.900"
      w="384px"
      height="100%"
      boxShadow="0px 0px 4px 2px rgba(0, 0, 0, 0.25)"
      borderRadius="16px"
      color="blackAlpha.900"
      p="25px 16px"
    >
      <Text
        dangerouslySetInnerHTML={{ __html: content }}
        onClick={handleClick}
      ></Text>
    </Box>
  )
}
