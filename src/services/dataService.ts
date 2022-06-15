import { Article } from "../components/articles/Article"
import { Filters } from "../components/Agregators"

export enum SORTING {
  PRICE = 'price',
  RATING = 'rating',
}

export const filterArticles = (articles: Article[], filters: Filters) => {
  if (!filters.maxPrice) return articles
  return articles.filter((article: Article) => {
    return filters.maxPrice && article.price.amount < filters.maxPrice
  })
}

export const sortArticles = (articles: Article[], sorting: string | null) => {
  if (!sorting) return articles
  return [...articles].sort((articleA: Article, articleB: Article) => {
    if (sorting === SORTING.PRICE) {
      return articleA.price.amount - articleB.price.amount
    }
    if (sorting === SORTING.RATING) {
      return articleA.averageRating < articleB.averageRating ? 1 : -1
    }
    return 0
  })
}
