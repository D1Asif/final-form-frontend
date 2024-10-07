import { CloudArrowUp, Plus } from 'phosphor-react'
import {
    Button,
    Modal,
    ModalAction,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
} from 'keep-react'


const AddNewProductModal = () => {
    return (
        <Modal>
            <ModalAction asChild>
                <Button size='lg' className="flex gap-1.5 text-lg">
                    <Plus className="size-5" />
                    Add Product
                </Button>
            </ModalAction>
            <ModalContent>
                <ModalClose className="absolute right-4 top-4" />
                <div>
                    Hello
                </div>
                <ModalFooter>
                    <ModalClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </ModalClose>
                    <ModalClose asChild>
                        <Button>Confirm</Button>
                    </ModalClose>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default AddNewProductModal;