import { Button } from "keep-react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";


export default function CartButton() {
    return (
        <Link to="/cart">
            <Button shape='icon'>
                <ShoppingCart size={24} weight='bold' />
            </Button>
        </Link>
    )
}
