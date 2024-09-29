
import { Button, Card, CardContent, CardHeader, CardTitle } from 'keep-react'
import { TProduct } from '../../interface/product'

export const ProductCard = ({ product }: { product: TProduct }) => {
    return (
        <div className='relative'>
            <div className='absolute right-5 top-5 px-2 py-1 bg-warning-400 font-semibold rounded-2xl text-sm'>
                {product.tags[0].replace(/^\w/, (char) => char.toUpperCase())}
            </div>
            <Card className='max-w-full'>
                <CardHeader>
                    <img src={product.images[0]} className="rounded-t-xl" alt="image" height={300} />
                </CardHeader>
                <CardContent className="space-y-3">
                    <CardTitle>
                        {product.name}
                    </CardTitle>
                    <p className='text-lg text-gray-500'>Category: {product.category.replace(/^\w/, (char) => char.toUpperCase())}</p>
                    <p className='text-xl font-semibold'>${product.price}</p>
                    <Button>View Details</Button>
                </CardContent>
            </Card>
        </div>
    )
}
