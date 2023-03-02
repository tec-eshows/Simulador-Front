import { createContext, ReactNode, useState, useContext } from 'react'

interface FilterUrlProvider {
  children: ReactNode
}

interface IUrlFilter {
  urlFilter: string
  setUrlFilter: (url: string) => void
  regionFilter: string
  setRegionFilter: (url: string) => void
  styleFilter: string
  setStylesFilter: (url: string) => void
  atractionNameFilter: string
  setAtractionNameFilter: (url: string) => void
}

const FilterUrlContext = createContext<IUrlFilter>({} as IUrlFilter)

export function FilterUrlProvider({ children }: FilterUrlProvider) {
  const [urlFilter, setUrlFilter] = useState<string>('')
  const [regionFilter, setRegionFilter] = useState<string>('')
  const [styleFilter, setStylesFilter] = useState<string>('')
  const [atractionNameFilter, setAtractionNameFilter] = useState<string>('')

  return (
    <FilterUrlContext.Provider
      value={{
        regionFilter,
        setRegionFilter,
        styleFilter,
        setStylesFilter,
        atractionNameFilter,
        setAtractionNameFilter,
        urlFilter,
        setUrlFilter,
      }}
    >
      {children}
    </FilterUrlContext.Provider>
  )
}

export function useUrlFilter() {
  const context = useContext(FilterUrlContext)
  const {
    urlFilter,
    setUrlFilter,
    atractionNameFilter,
    regionFilter,
    setAtractionNameFilter,
    setRegionFilter,
    setStylesFilter,
    styleFilter,
  } = context
  return {
    urlFilter,
    setUrlFilter,
    atractionNameFilter,
    regionFilter,
    setAtractionNameFilter,
    setRegionFilter,
    setStylesFilter,
    styleFilter,
  }
}
