import { Input, InputIcon } from "keep-react";
import { MagnifyingGlass } from "phosphor-react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";

export default function SearchInput() {
    const [searchParams, setSearchParams] = useSearchParams();

    const urlSearchParams = new URLSearchParams(searchParams);

    const handleSearch = (term: string) => {
        if (term) {
            urlSearchParams.set("searchTerm", term);
        } else {
            urlSearchParams.delete("searchTerm")
        }

        setSearchParams(urlSearchParams)
    }

    const debouncedSearch = useDebounce(handleSearch, 500)

    return (
        <fieldset className="relative max-w-lg">
            <Input
                placeholder="Search for product"
                defaultValue={searchParams.get("searchTerm") || ""}
                onChange={(e) => debouncedSearch(e.target.value)}
                className="ps-11"
            />
            <InputIcon>
                <MagnifyingGlass size={19} color="#AFBACA" />
            </InputIcon>
        </fieldset>
    )
}
