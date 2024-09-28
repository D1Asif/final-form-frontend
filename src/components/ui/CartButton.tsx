import { Button } from "keep-react";
import { ShoppingCart } from "phosphor-react";


export default function CartButton() {
    return (
        <Button shape='icon'>
            <ShoppingCart size={24} weight='bold' />
        </Button>
    )
}
