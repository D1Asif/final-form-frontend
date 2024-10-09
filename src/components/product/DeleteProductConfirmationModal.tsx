import { Button, DropdownItem, Modal, ModalAction, ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalTitle } from "keep-react";
import { Trash } from "phosphor-react";
import { useDeleteProductMutation } from "../../redux/api/baseApi";
import { useState } from "react";


export default function DeleteProductConfirmationModal({ productId }: { productId: string }) {
    const [deleteProduct] = useDeleteProductMutation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleDelete = () => {
        deleteProduct(productId);

        setIsModalOpen(false)
    }

    return (
        <Modal isOpen={isModalOpen} onOpenChange={setIsModalOpen}>
            <ModalAction asChild>
                <Button style={{ "all": "unset", "width": "100%" }}>
                    <DropdownItem>
                        Delete
                    </DropdownItem>
                </Button>
            </ModalAction>
            <ModalContent>
                <ModalClose className="absolute right-4 top-4" />
                <ModalHeader className="mb-6 space-y-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
                        <Trash size={28} />
                    </div>
                    <div className="space-y-1">
                        <ModalTitle>Are You Sure?</ModalTitle>
                        <ModalDescription>
                            The product will be deleted permanently. This action cannot be undone.
                        </ModalDescription>
                    </div>
                </ModalHeader>
                <ModalFooter>
                    <ModalClose asChild>
                        <Button variant="outline" color="secondary">Cancel</Button>
                    </ModalClose>
                    <Button onClick={handleDelete} color="error">Confirm</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
