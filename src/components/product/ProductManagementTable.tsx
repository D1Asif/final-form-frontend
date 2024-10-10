import { DotsThreeOutlineVertical, Funnel } from 'phosphor-react'
import {
    Badge,
    Button,
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownList,
    Spinner,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from 'keep-react'
import AddNewProductModal from './AddNewProductModal';
import { useEffect, useState } from 'react';
import DeleteProductConfirmationModal from './DeleteProductConfirmationModal';
import { useGetProductsQuery } from '../../redux/api/baseApi';
import { TProduct } from '../../interface/product';

export const ProductManagementTable = () => {
    const [page, setPage] = useState(1);

    const { data, isLoading } = useGetProductsQuery({page})
    const products = data?.data;
    const allFetched = data?.allFetched;

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 700
                && !isLoading && !allFetched
            ) {
                setPage((prev) => prev + 1)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [allFetched, isLoading])

    return (
        <>
            <Table>
                <TableCaption className='px-0 py-7'>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            <h2 className="text-heading-5 font-semibold text-metal-900 dark:text-white">Total Product</h2>
                            <Badge className="dark:bg-metal-800 dark:text-white">
                                {products?.length} Products
                            </Badge>
                        </div>
                        <div className="flex items-center gap-5">
                            <AddNewProductModal />
                            <Button size='lg' variant="outline" className="flex gap-1.5 text-lg">
                                <Funnel className="size-5" />
                                Filter Product
                            </Button>
                        </div>
                    </div>
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='text-lg'>
                            <div className="w-[320px]">Product Name</div>
                        </TableHead>
                        <TableHead className='text-lg'>
                            <div className="w-[65px]">Price</div>
                        </TableHead>
                        <TableHead className='text-lg'>
                            <div className="w-[100px]">Category</div>
                        </TableHead>
                        <TableHead className='text-lg'>
                            <div className="w-[60px]">Rating</div>
                        </TableHead>
                        <TableHead className='text-lg'>
                            <div className="w-[60px]">Stock</div>
                        </TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                {
                    products?.length > 0 && (
                        <TableBody>
                            {products?.map((product: TProduct) => (
                                <TableRow key={product._id}>
                                    <TableCell className='text-lg'>{product.name}</TableCell>
                                    <TableCell className='text-lg'>{product.price}</TableCell>
                                    <TableCell className='text-lg'>{product.category}</TableCell>
                                    <TableCell className='text-lg'>{4.5}</TableCell>
                                    <TableCell className='text-lg'>{product.stock}</TableCell>
                                    <TableCell>
                                        <Dropdown>
                                            <DropdownAction asChild>
                                                <button>
                                                    <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                                                </button>
                                            </DropdownAction>
                                            <DropdownContent className="max-w-[200px] border border-metal-100 p-3">
                                                <DropdownList>
                                                    <AddNewProductModal editingProduct={product} />
                                                    <DeleteProductConfirmationModal productId={product._id} />
                                                </DropdownList>
                                            </DropdownContent>
                                        </Dropdown>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    )
                }
            </Table >
            {
                isLoading && (
                    <div className="flex justify-center pt-14 pb-6">
                        <Spinner color="info" size="lg" />
                    </div>
                )
            }
            {
                !products && !allFetched && !isLoading && (
                    <h1 className="text-heading-6 text-center py-8">No Product found!</h1>
                )
            }
        </>
    )
}

