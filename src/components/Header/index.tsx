import { Box, Flex, Progress } from '@chakra-ui/react'
import Image from 'next/image'
import Logo from '../../assets/eshows-logo.svg'
interface Props {
  progress: number
}
export function Header({ progress }: Props) {
  return (
    <Flex mx="auto" w="100%" mt="48px" justify="space-between" align="center">
      <Box>seta</Box>
      <Progress
        borderRadius="15px"
        size="sm"
        value={progress}
        w="580px"
        colorScheme="progress"
        bg="blackAlpha.50"
        h="16px"
        sx={{
          '& > div:first-child': {
            transitionProperty: 'width',
          },
        }}
      />
      <Image src={Logo} alt="logo eshows" />
    </Flex>
  )
}
