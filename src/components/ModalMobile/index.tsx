import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import Search from '../../assets/search.svg'
import Image from 'next/image'
interface ModalMobileProps {
  onClose: () => void
  isOpen: boolean
  handleClearFilter?: () => void
  handleSubmitFilter?: () => void
  children: React.ReactNode
  footer?: boolean
  bg?: string
}

export function ModalMobile({
  onClose,
  isOpen,
  handleClearFilter,
  handleSubmitFilter,
  children,
  footer = true,
  bg = 'white.900',
  ...rest
}: ModalMobileProps) {
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen} {...rest}>
      <DrawerOverlay />
      <DrawerContent h="90%" borderRadius="16px 16px 0 0" bg={bg}>
        <DrawerHeader borderBottomWidth="1px">
          <Text textAlign="center">Encontre um artista</Text>
        </DrawerHeader>
        <DrawerBody gridGap="24px" display="flex" flexDir="column">
          {children}
        </DrawerBody>
        {footer && (
          <DrawerFooter
            bg="white.900"
            justifyContent="space-between"
            borderTop="1px"
            borderColor="gray.200"
          >
            <Text textDecor="underline" onClick={handleClearFilter}>
              Limpar tudo
            </Text>
            <Button
              borderRadius={4}
              w="97px"
              alignItems="center"
              bg="orange.900"
              justifyContent="space-between"
              onClick={() => handleSubmitFilter()}
            >
              <Image src={Search} />
              <Text color="white.900" fontSize="sm">
                {' '}
                Buscar
              </Text>
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  )
}
