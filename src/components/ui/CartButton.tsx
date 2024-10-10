import { Button } from "keep-react";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";


export default function CartButton() {
    const { items } = useAppSelector((selector) => selector.cart)
    
    useEffect(() => {
        if (items.length === 0) {
            return;
        }

        const handleOnBeforeUnload = (e: BeforeUnloadEvent) => {
            e.preventDefault();
            return (e.returnValue = '');
        }

        window.addEventListener("beforeunload", handleOnBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleOnBeforeUnload);
        }
    }, [items.length])

    return (
        <Link to="/cart">
            <Button shape='icon' className="relative">
                {items.length > 0 && <div className="rounded-full absolute bg-error-500 size-6 -top-3 -right-3">
                    {items.length}
                </div>}
                <ShoppingCart size={24} weight='bold' />
            </Button>
        </Link>
    )
}
