import { useParams } from 'react-router-dom'
import { products } from '../data'

export const Product = () => {
  const { productId } = useParams()

  const uniqueProduct = products.find(item => item.id === Number(productId))

  return (
    <article>
      <img
        className='img-fluid'
        src={uniqueProduct.thumbnail}
        alt={uniqueProduct.title}
        height={300}
      />
      <div className='mt-4'>
        <p>{uniqueProduct.title}</p>
        <p>{uniqueProduct.description}</p>
      </div>
    </article>
  )
}
