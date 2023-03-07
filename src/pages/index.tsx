import { useBreakpointValue } from '@chakra-ui/react';
import { MobileVersion } from '../components/mobileVersion';
import { DesktopVersion } from '../components/desktopVersion';

export default function Simulator() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <>
      {isWideVersion
        ?
        <DesktopVersion />
        :
        <MobileVersion />
      }
    </>
  )
}
