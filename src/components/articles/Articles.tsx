import { FC, Fragment, useState } from "react"
import { useQuery } from 'react-query'
import { LoadingArticles } from "./Loading"
import { ArticlesLoadingError } from "./Error"
import { ArticleContainer } from "./Article"
import { AggregatorsContainer, Filters } from "../Agregators"
import { filterArticles, sortArticles } from "../../services/dataService"
import { ArticlesSection } from "./style"

export const ArticlesContainer: FC<{}> = () => {
  const [filters, setFilters] = useState<Filters>({ maxPrice: null })
  const [sorting, setSorting] = useState<string | null>(null)
  const {isLoading, error, data} = useQuery('productArticles', () =>
    fetch('https://shop-bff.fyndiq.se/code-assignment/articles', {
      headers: {
        market: 'SE',
        locale: 'sv-SE',
      }
    }).then(res => res.json())
  )

  if (isLoading) return <LoadingArticles/>

  if (error) return <ArticlesLoadingError/>

  const filteredArticles = filterArticles(data.articles, filters)
  const sorteredArticles = sortArticles(filteredArticles, sorting)
  return (
    <Fragment>
      <section>
        <AggregatorsContainer
          setFilters={setFilters}
          currentFilters={filters}
          sorting={sorting}
          setSorting={setSorting}/>
      </section>
      <ArticlesSection>
        {sorteredArticles && sorteredArticles.map(ArticleContainer)}
      </ArticlesSection>
    </Fragment>
  )
}
