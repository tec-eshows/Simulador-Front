import { Flex, useDisclosure } from '@chakra-ui/react'

import { useEffect } from 'react'

import { HeaderButtons } from './HeaderButtons'

import { RegionFilterMobile } from './RegionFilterMobile'

import { useUrlFilter } from '../../contexts/FilterUrlContext'
import { ModalMobile } from '../ModalMobile'
import { SearchBoxMobile } from './SearchBoxMobile'
import { StyleFilterMobile } from './StyleFilterMobile'

import { useRouter } from 'next/router'

export function HeaderMobile({ styles }) {
  const {
    atractionNameFilter,
    setAtractionNameFilter,
    setUrlFilter,
    regionFilter,
    setRegionFilter,
    setStylesFilter,
    urlFilter,
    styleFilter,
  } = useUrlFilter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  function handleSubmitFilter() {
    setUrlFilter(
      `filter?regiao=${regionFilter}&atracao=${
        atractionNameFilter || ''
      }&estilo=${styleFilter}`,
    )
    if (router.asPath !== '/') {
      router.push(
        `/?regiao=${regionFilter || ''}&atracao=${
          atractionNameFilter || ''
        }&estilo=${styleFilter || ''}`,
      )
    }
    onClose()
  }
  function handleClearFilter() {
    setUrlFilter('')
    setRegionFilter('')
    setStylesFilter('')
    setAtractionNameFilter('')
  }
  useEffect(() => {
    const params = new URLSearchParams(urlFilter)
    const style = params.get('estilo')
    const searchParams = new URLSearchParams(urlFilter)
    const region = searchParams.get('regiao')
    const atraction = searchParams.get('atracao')
    if (region) {
      setRegionFilter(region)
    }
    setAtractionNameFilter(atraction)
    setStylesFilter(style)
  }, [urlFilter])
  return (
    <Flex
      zIndex="10"
      as="header"
      w="100%"
      mx="auto"
      transition="height 0.200s linear"
      justify="space-between"
      align="self-start"
      background="white"
      py="31px "
    >
      <HeaderButtons onClick={onOpen} styles={styles} />

      <ModalMobile
        onClose={onClose}
        isOpen={isOpen}
        handleClearFilter={handleClearFilter}
        handleSubmitFilter={handleSubmitFilter}
      >
        <StyleFilterMobile styles={styles} />
        <RegionFilterMobile />
        <SearchBoxMobile />
      </ModalMobile>
    </Flex>
  )
}
