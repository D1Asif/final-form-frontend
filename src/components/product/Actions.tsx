import ProductFilterDropdown from "./ProductFilterDropdown";
import SearchInput from "./SearchInput";


export default function Actions() {
    return (
        <div className="flex justify-between gap-5 z-20">
            <div>
                <SearchInput />
            </div>
            <ProductFilterDropdown />
        </div>
    )
}
