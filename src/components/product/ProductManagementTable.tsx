import { DotsThreeOutlineVertical, Funnel, Plus } from 'phosphor-react'
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

const data3 = [
    {
        id: 1,
        title: "Apple Watch Series 7 - 44mm",
        price: "$399",
        category: "Wearables",
        rating: {
            rate: 4.8,
            count: 1500
        }
    },
    {
        id: 2,
        title: "Beylob 90 Speaker",
        price: "$99",
        category: "Speakers",
        rating: {
            rate: 4.4,
            count: 620
        }
    },
    {
        id: 3,
        title: "Beoplay M5 Bluetooth Speaker",
        price: "$129",
        category: "Speakers",
        rating: {
            rate: 4.6,
            count: 890
        }
    },
    {
        id: 4,
        title: "Samsung Galaxy Buds Pro",
        price: "$149",
        category: "Headphones",
        rating: {
            rate: 4.5,
            count: 2000
        }
    },
    {
        id: 5,
        title: "Nike Air Zoom Pegasus 38",
        price: "$120",
        category: "Shoes",
        rating: {
            rate: 4.7,
            count: 3400
        }
    },
    {
        id: 5,
        title: "Nike Air Zoom Pegasus 38",
        price: "$120",
        category: "Shoes",
        rating: {
            rate: 4.7,
            count: 3400
        }
    },
    {
        id: 5,
        title: "Nike Air Zoom Pegasus 38",
        price: "$120",
        category: "Shoes",
        rating: {
            rate: 4.7,
            count: 3400
        }
    },
    {
        id: 5,
        title: "Nike Air Zoom Pegasus 38",
        price: "$120",
        category: "Shoes",
        rating: {
            rate: 4.7,
            count: 3400
        }
    },
    {
        id: 5,
        title: "Nike Air Zoom Pegasus 38",
        price: "$120",
        category: "Shoes",
        rating: {
            rate: 4.7,
            count: 3400
        }
    },
];

export const ProductManagementTable = () => {
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
                        <Button size='lg' className="flex gap-1.5 text-lg">
                            <Plus className="size-5 fill-metal-900 dark:fill-white" />
                            Add Product
                        </Button>
                        <Button size='lg' variant="outline" className="flex gap-1.5 text-lg">
                            <Funnel className="size-5 fill-metal-900 dark:fill-white" />
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
                {data3.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className='text-lg'>{item.title}</TableCell>
                        <TableCell className='text-lg'>{item.price}</TableCell>
                        <TableCell className='text-lg'>{item.category}</TableCell>
                        <TableCell className='text-lg'>{item.rating.rate}</TableCell>
                        <TableCell className='text-lg'>{item.rating.count}</TableCell>
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
                                        <DropdownItem>Move</DropdownItem>
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

