
import { Button, Card, CardContent, CardHeader, CardTitle } from 'keep-react'
import { TProduct } from '../../interface/product'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product }: { product: TProduct }) => {
    return (
        <div className='relative'>
            {product?.tags?.length > 0 && <div className='absolute right-5 top-5 px-2 py-1 bg-warning-400 font-semibold rounded-2xl text-sm'>
                {product?.tags[0]?.replace(/^\w/, (char) => char.toUpperCase())}
            </div>}
            <Card className='max-w-full'>
                <CardHeader>
                    <img src={product.images[0]} className="rounded-t-xl h-[400px] w-full object-cover" alt="image" height={300} />
                </CardHeader>
                <CardContent className="space-y-3">
                    <CardTitle>
                        {product.name}
                    </CardTitle>
                    <p className='text-lg text-gray-500'>Category: {product.category.replace(/^\w/, (char) => char.toUpperCase())}</p>
                    <p className='text-xl font-semibold'>${product.price}</p>
                    <Button>
                        <Link to={`/products/${product._id}`}>
                            View Details
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
