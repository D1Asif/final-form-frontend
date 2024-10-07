import { DotsThreeOutlineVertical, Funnel } from 'phosphor-react'
import {
    Badge,
    Button,
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownItem,
    DropdownList,
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
import { TProduct } from '../../interface/product';

export const ProductManagementTable = () => {
    const [products, setProducts] = useState<TProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products`)
            const data = await res.json()
            setProducts(data.data)
        }
        fetchProducts()
    }, []);

    return (
        <Table>
            <TableCaption className='px-0 py-7'>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <h2 className="text-heading-5 font-semibold text-metal-900 dark:text-white">Total Product</h2>
                        <Badge className="dark:bg-metal-800 dark:text-white">
                            500 Product
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
            <TableBody>
                {products?.map((item) => (
                    <TableRow key={item._id}>
                        <TableCell className='text-lg'>{item.name}</TableCell>
                        <TableCell className='text-lg'>{item.price}</TableCell>
                        <TableCell className='text-lg'>{item.category}</TableCell>
                        <TableCell className='text-lg'>{4.5}</TableCell>
                        <TableCell className='text-lg'>{item.stock}</TableCell>
                        <TableCell>
                            <Dropdown>
                                <DropdownAction asChild>
                                    <button>
                                        <DotsThreeOutlineVertical className="size-4 fill-metal-900 dark:fill-white" />
                                    </button>
                                </DropdownAction>
                                <DropdownContent className="max-w-[200px] border border-metal-100 p-3">
                                    <DropdownList>
                                        <DropdownItem>Edit</DropdownItem>
                                        <DropdownItem>Delete</DropdownItem>
                                    </DropdownList>
                                </DropdownContent>
                            </Dropdown>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

