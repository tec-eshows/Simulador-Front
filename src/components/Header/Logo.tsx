import { Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import LogoEshows from '../../assets/Logo Eshows.svg'
export function Logo({ w = 160, h = 52 }) {
  return (
    <Stack minW={160} minH="52px" maxH="52px">
      <Image src={LogoEshows} width={w} height={h} />
    </Stack>
  )
}
