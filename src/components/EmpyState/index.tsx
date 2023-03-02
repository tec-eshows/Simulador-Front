import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Empty from '../../assets/empty.svg'
import React from 'react'
interface EmptyStateProps {
  title: string
  text: string
}

export function EmptyState({ title, text }: EmptyStateProps) {
  return (
    <Flex flexDir="column" mx="auto">
      <Image src={Empty} />
      <Text fontSize="xl" fontWeight="bold" align="center">
        {title}
      </Text>
      <Text align="center">{text}</Text>
    </Flex>
  )
}
