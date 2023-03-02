import {
  Box,
  Flex,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react'
export function Loading() {
  const n = 10
  return (
    <Flex
      gridGap="35px"
      // px="140px"
      w="100%"
      h="100%"
      mx="auto"
      flexWrap="wrap"
      justify="center"

      //  bg={isOpen?'black.300':'white.900'}
    >
      {[...Array(n)].map((e, i) => (
        <Flex flexDir="column" maxWidth={300} zIndex={'1'}>
          <Box>
            <Skeleton height="300px" width="300px" />

            <SkeletonText noOfLines={4} mt="5px" />
          </Box>
        </Flex>
      ))}
    </Flex>
  )
}
