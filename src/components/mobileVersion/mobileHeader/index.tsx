import * as C from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Close from '../../../assets/Close.svg'
import Menu from '../../../assets/Menu.svg'
import Return from '../../../assets/Return.svg'

type MobileHeaderProps = {
  menuPress: () => void
  backPress: () => void
  step: number
  title: string
}

export const MobileHeader = ({ backPress, menuPress, step, title }: MobileHeaderProps) => {

  const router = useRouter();

  const setBarFill = (step: number) => {
    switch (step) {
      case 1:
        return 12.5
      case 2:
        return 25
      case 3:
        return 37.5
      case 4:
        return 50
      case 5:
        return 62.5
      case 6:
        return 75
      case 7:
        return 87.5
      case 8:
        return 100
      default:
        return 0
    }
  }

  const headerClickHandler = () => {
    if (step === 1) {
      router.push('https://eshows.com.br/');
    } else {
      backPress()
    }
  }


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
          onClick={() => headerClickHandler()}
          icon={<Image src={step === 1 ? Close : Return} alt="Menu" width={32} height={32} />}
        />
        <C.Text fontWeight={'bold'} fontSize={20}>
          {title}
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
        value={setBarFill(step)}
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
