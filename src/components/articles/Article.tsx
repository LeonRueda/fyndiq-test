import { FC, Fragment } from "react"
import {
  ArticleElement,
  ArticleImg,
  ArticleImgContainer,
  CardText,
  InfoText,
  PriceText
} from "./style"

type Image = {
  url: string
}

type Price = {
  formatted: string
  amount: number
}

export type Article = {
  articleId: string
  images: Image[]
  oldPrice: Price
  price: Price
  title: string
  averageRating: string
  shippingTimeMax: number
  shippingTimeMin: number
}

export const ArticleContainer: FC<Article> = ({ articleId, images, price, oldPrice, title, averageRating, shippingTimeMax, shippingTimeMin }) => {
  const imgSrc = images[0].url
  return (
    <ArticleElement key={articleId}>
      <ArticleImgContainer>
        <ArticleImg src={imgSrc} alt=""/>
      </ArticleImgContainer>
      <CardText>
        <span>{oldPrice ? oldPrice.formatted : 'Endast'}</span>
      </CardText>
      <PriceText>
        <span>{price?.formatted}</span>
      </PriceText>
      <CardText>
        <span>{title}</span>
      </CardText>
      <InfoText>
        <Rating averageRating={averageRating}/>
        <Shipping shippingTimeMax={shippingTimeMax} shippingTimeMin={shippingTimeMin}/>
      </InfoText>
    </ArticleElement>
  )
}

const Shipping: FC<{shippingTimeMax: number, shippingTimeMin: number}> = ({shippingTimeMin, shippingTimeMax}) => {
  return <Fragment><ShippingIcon/> <span>{shippingTimeMin} - {shippingTimeMax}</span></Fragment>
}

const Rating: FC<{averageRating: string}> = ({averageRating}) => {
  return <Fragment><StarIcon />{averageRating}</Fragment>
}

const StarIcon = () => (<span> ⭐️ </span>)
const ShippingIcon = () => (<span> 🚙 </span>)
