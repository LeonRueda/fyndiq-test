import { ChangeEvent, FC, useState } from "react"
import { SORTING } from "../services/dataService"
import { Container } from "./style"
import styled from "styled-components"

const MAX_PRICE = 50
export type Filters = {
  maxPrice: number | null
}
interface AgregatorsContainer {
  currentFilters: Filters
  setFilters: (filter: Filters) => void
  sorting: string | null
  setSorting: (sorting: string | null) => void
}

export const AggregatorsContainer: FC<AgregatorsContainer> = ({
  currentFilters,
  setFilters,
  setSorting,
}) => {
  const [maxPriceActive, setMaxPriceActive] = useState<boolean>(!!currentFilters.maxPrice)
  const toggleMaxPrice = (value: boolean) => {
    setMaxPriceActive(value)
    setFilters({
      maxPrice: value ? MAX_PRICE : null,
    })
  }
  const changeSorting = (sorting: string) => {
    setSorting(sorting ? sorting : null)
  }
  return <Container>
    <Agregator position={'left'}>
      <input
        id="max-price"
        type="checkbox"
        checked={maxPriceActive}
        onChange={() => toggleMaxPrice(!maxPriceActive)} />
      <label htmlFor="max-price">Cheaper than {MAX_PRICE} kr</label>
    </Agregator>
    <Agregator position={'right'}>
      <select
        name="sorting" 
        id="select-sorting"
        onChange={(e: ChangeEvent<HTMLSelectElement>) => changeSorting(e.target.value)}>
        <option value="">Sort By Relevance</option>
        <option value={SORTING.PRICE}>Sort By Price</option>
        <option value={SORTING.RATING}>Sort By Rating</option>
      </select>
    </Agregator>
  </Container>
}

export const AgregatorComponent: FC<{position: string}> = ({children}) => (<div>{children}</div>)
export const Agregator = styled(AgregatorComponent)`
  color: #385f6a;
  font-weight: bolder;
  align-self: ${props => props.position === 'right' ? 'flex-start' : 'flex-end'};
`
