import { Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import LogoEshows from '../../assets/Logo Eshows.svg'
export function Logo() {
  return (
    <Stack minW={160} minH={52}>
      <Image src={LogoEshows} width={160} height={52} />
    </Stack>
  )
}
