import { Flex, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import FacebookIcon from '../../assets/Facebook.svg'
import InstagramIcon from '../../assets/Instagram.svg'
import LinkedinIcon from '../../assets/Linkedin.svg'
import YoutubeIcon from '../../assets/Youtube.svg'

export function SocialIcons() {
  return (
    <VStack>
      <Flex mt="12px" mb="-12px">
        <Text
          as="a"
          href="https://pt-br.facebook.coms/eshowsoficial/"
          target="_blank"
          _hover={{
            opacity: 0.7,
          }}
        >
          <Image src={FacebookIcon} />
        </Text>
        <Text
          as="a"
          href="https://www.instagram.com/eshowsoficial/"
          target="_blank"
          _hover={{
            opacity: 0.7,
          }}
        >
          <Image src={InstagramIcon} />
        </Text>
        <Text
          as="a"
          href="https://www.linkedin.com/company/eshowsoficial/"
          target="_blank"
          _hover={{
            opacity: 0.7,
          }}
        >
          <Image src={LinkedinIcon} />
        </Text>
        <Text
          as="a"
          href="https://www.youtube.com/c/Eshows"
          target="_blank"
          _hover={{
            opacity: 0.7,
          }}
        >
          <Image src={YoutubeIcon} />
        </Text>
      </Flex>
      <Flex gridGap="10px">
        <Text
          fontSize="10px"
          as="a"
          target="_blank"
          href="https://rebrand.ly/termos-de-uso-eshows"
          _hover={{
            color: 'orange.900',
          }}
        >
          Termos de uso
        </Text>
        <Text
          fontSize="10px"
          as="a"
          target="_blank"
          href="https://rebrand.ly/politicas-de-privacidade-eshows"
          _hover={{
            color: 'orange.900',
          }}
        >
          Políticas de Privacidade
        </Text>
      </Flex>
    </VStack>
  )
}
