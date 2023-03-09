import * as C from '@chakra-ui/react'
import Image from 'next/image'
import Close from '../../../assets/Close.svg'
import Menu from '../../../assets/Menu.svg'

type MobileHeaderProps = {
  menuPress: () => void
}

export const MobileHeader = ({ menuPress }: MobileHeaderProps) => {
  return (
    <C.Flex
      alignItems={'center'}
      direction={'column'}
      ml="5px"
      mr={'5px'}
      mt={'24px'}
    >
      <C.Flex w="100%" justifyContent={'space-between'} mb={'24px'}>
        <C.IconButton
          bg="transparent"
          aria-label="Close"
          icon={<Image src={Close} alt="Menu" width={32} height={32} />}
        />
        <C.Text fontWeight={'bold'} fontSize={20}>
          Contato
        </C.Text>
        <C.IconButton
          onClick={menuPress}
          bg="transparent"
          aria-label="Close"
          icon={<Image src={Menu} alt="Menu" width={32} height={32} />}
        />
      </C.Flex>
      <C.Progress
        borderRadius="15px"
        size="sm"
        value={12.5}
        w="93%"
        colorScheme="progress"
        bg="blackAlpha.50"
        h="8px"
        sx={{
          '& > div:first-child': {
            transitionProperty: 'width',
          },
        }}
      />
    </C.Flex>
  )
}
