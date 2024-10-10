import { CurrencyDollar, Minus, Plus } from 'phosphor-react'
import {
    Button,
    DropdownItem,
    Input,
    Label,
    Modal,
    ModalAction,
    ModalClose,
    ModalContent,
    NumberInput,
    NumberInputBox,
    Textarea,
    toast
} from 'keep-react'
import { useEffect, useState } from 'react'
import { TProduct } from '../../interface/product'
import { useAddProductMutation, useUpdateProductMutation } from '../../redux/api/baseApi'

const AddNewProductModal = ({ editingProduct }: { editingProduct?: TProduct }) => {
    const [formState, setFormSate] = useState({
        name: editingProduct ? editingProduct.name : "",
        price: editingProduct ? editingProduct.price : 0,
        description: editingProduct ? editingProduct.description : "",
        images: editingProduct ? editingProduct.images.join("|") : "",
        category: editingProduct ? editingProduct.category : "",
        stock: editingProduct ? editingProduct.stock : 0,
        tags: editingProduct ? editingProduct.tags.join(",") : ""
    })

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [addProduct, { data: addData, isError: addError }] = useAddProductMutation();
    const [updateProduct, { data: updateData, isError: updateError }] = useUpdateProductMutation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormSate({
            ...formState,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const body = {
            ...formState,
            price: Number(formState.price),
            stock: Number(formState.stock),
            images: formState.images.split("|"),
            tags: formState.tags ? formState.tags.split(",") : []
        }

        console.log(body);

        if (editingProduct) {
            updateProduct({
                productId: editingProduct._id,
                body
            })
        } else {
            addProduct(body)
        }

        setIsModalOpen(false)
    }

    if (addData) {
        window.location.reload()
    }
    if (updateData) {
        window.location.reload()
    }

    useEffect(() => {
        if (addError || updateError) {
            toast.error("Something went wrong")
        }
    }, [addError, updateError])

    return (
        <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
            <ModalAction asChild>
                {
                    editingProduct ? (
                        <Button style={{ "all": "unset", "width": "100%" }}>
                            <DropdownItem className='w-full'>
                                Edit
                            </DropdownItem>
                        </Button>
                    ) : (
                        <Button size='lg' className="flex gap-1.5 text-lg">
                            <Plus className="size-5" />
                            Add Product
                        </Button>
                    )
                }
            </ModalAction>
            <ModalContent className='pr-0 lg:w-1/3'>
                <ModalClose className="absolute right-5 top-5" />
                <form className="space-y-3 max-h-[75vh] overflow-y-auto mt-7  pl-1 pr-4" onSubmit={handleSubmit}>
                    <fieldset className="space-y-1">
                        <Label htmlFor="name">Name*</Label>
                        <div className="relative">
                            <Input
                                id="name"
                                type="text"
                                value={formState.name}
                                placeholder="Enter product name"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="email">Price*</Label>
                        <div className="relative">
                            <NumberInput className='max-w-full'>
                                <div>
                                    <CurrencyDollar size={16} color="#455468" />
                                </div>
                                <NumberInputBox
                                    value={formState.price}
                                    onChange={handleChange}
                                    className='text-left font-normal'
                                    id='price'
                                    required
                                />
                            </NumberInput>
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="description">Description*</Label>
                        <div className="relative">
                            <Textarea
                                value={formState.description}
                                onChange={handleChange}
                                id='description'
                                placeholder="Enter product description" rows={2} required
                            />
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="images">Images*</Label>
                        <div className="relative">
                            <Textarea
                                value={formState.images}
                                onChange={handleChange}
                                id="images"
                                placeholder="Enter product image urls"
                                rows={2}
                                required
                            />
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="category">Category*</Label>
                        <div className="relative">
                            <Input
                                id="category"
                                value={formState.category}
                                onChange={handleChange}
                                type="category"
                                placeholder="Enter product category"
                                required
                            />
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="stock">Stock*</Label>
                        <div className="relative">
                            <NumberInput className='max-w-full'>
                                <div className='cursor-pointer'>
                                    <Minus
                                        size={16}
                                        color="#455468"
                                        onClick={() => setFormSate((prev) => {
                                            if (prev.stock !== 0) {
                                                return { ...prev, stock: prev.stock - 1 }
                                            } else {
                                                return prev
                                            }
                                        })}
                                    />
                                </div>
                                <NumberInputBox
                                    className='font-normal'
                                    value={formState.stock}
                                    onChange={handleChange}
                                    id="stock"
                                    required
                                />
                                <div className='cursor-pointer'>
                                    <Plus
                                        size={16}
                                        color="#455468"
                                        onClick={() => setFormSate((prev) => (
                                            { ...prev, stock: prev.stock + 1 }
                                        ))}
                                    />
                                </div>
                            </NumberInput>
                        </div>
                    </fieldset>
                    <fieldset className="space-y-1">
                        <Label htmlFor="tags">Tags</Label>
                        <div className="relative">
                            <Input 
                                id="tags" 
                                type="text" 
                                placeholder="Enter product tags"
                                onChange={handleChange}
                            />
                        </div>
                    </fieldset>
                    <Button type="submit" className="!mt-4 block w-full" >
                        {editingProduct ? "Save Changes" : "Add Product"}
                    </Button>
                </form>
            </ModalContent>
        </Modal>
    )
}

export default AddNewProductModal;