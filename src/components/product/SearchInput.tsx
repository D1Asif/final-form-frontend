import { Input, InputIcon } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";


export default function SearchInput() {
    return (
        <fieldset className="relative max-w-lg">
            <Input placeholder="Search for product" className="ps-11" />
            <InputIcon>
                <MagnifyingGlass size={19} color="#AFBACA" />
            </InputIcon>
        </fieldset>
    )
}
