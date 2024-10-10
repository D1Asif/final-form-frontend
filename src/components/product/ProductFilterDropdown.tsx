import { Button, Checkbox, Dropdown, DropdownAction, DropdownContent, DropdownList, Label, NumberInputBox, Radio, Slider } from "keep-react";
import { Link, useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";

export default function ProductFilterDropdown() {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoriesParam = searchParams.get("category");
    const [priceRange, setPriceRange] = useState([Number(searchParams.get("minPrice")), Number(searchParams.get("maxPrice")) || 1000])

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchParams.set("sort", e.target.id)
        setSearchParams(searchParams)
    };

    const handleCategoryChange = (currentValue: string | boolean, category: string) => {
        let newCategoryParam;

        if (currentValue) {
            newCategoryParam = [...categoriesParam!.split(","), category].join(",")
        } else {
            if (!categoriesParam) {
                newCategoryParam = categories.filter((item) => item !== category).join(",")
            } else {
                newCategoryParam = categoriesParam.split(",").filter((item) => item !== category).join(",")
            }
        }

        searchParams.set("category", newCategoryParam);
        setSearchParams(searchParams)
    }

    const handlePriceRangeChange = () => {
        searchParams.set("minPrice", priceRange[0].toString())
        searchParams.set("maxPrice", priceRange[1].toString())

        setSearchParams(searchParams)
    }

    const categories = ["shoes", "apparel", "equipment", "miscellaneous"]

    const debouncedHandlePriceRangeChange = useDebounce(handlePriceRangeChange, 500)

    useEffect(() => {
        debouncedHandlePriceRangeChange()
    }, [priceRange])

    return (
        <Dropdown>
            <DropdownAction asChild>
                <Button>Filter</Button>
            </DropdownAction>
            <DropdownContent className="border w-[350px]">
                <DropdownList>
                    <div className="flex flex-col gap-4 font-semibold mb-5">
                        Price range
                        <Slider
                            min={0}
                            max={1000}
                            value={priceRange}
                            onValueChange={(value) => setPriceRange(value)}
                        />
                        <div className="flex gap-4">
                            <NumberInputBox
                                className="border w-full rounded-md"
                                value={priceRange[0]}
                                onChange={(e) => setPriceRange((prev) => [Number(e.target.value), prev[1]])}
                            />
                            <NumberInputBox
                                className="border w-full rounded-md"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange((prev) => [prev[0], Number(e.target.value)])}
                            />
                        </div>

                    </div>
                    <div className="flex flex-col gap-3 font-semibold mb-5">
                        Category
                        {
                            categories.map((category) => (
                                <fieldset className="flex items-center gap-2" key={category}>
                                    <Checkbox
                                        defaultChecked={!categoriesParam || categoriesParam.split(",").includes(category)}
                                        id={category}
                                        onCheckedChange={(value) => handleCategoryChange(value, category)}
                                    />
                                    <Label htmlFor={category}>
                                        {category.charAt(0).toUpperCase() + category.slice(1)}
                                    </Label>
                                </fieldset>
                            ))
                        }
                    </div>
                    <form className="flex flex-col gap-3">
                        <legend className="font-semibold">Sort</legend>
                        <fieldset className="flex items-center gap-2">
                            <Radio
                                id="price"
                                name="sort"
                                variant="circle"
                                onChange={handleRadioChange}
                                checked={searchParams.get("sort") === "price"}
                            />
                            <Label htmlFor="price">Price Low to High</Label>
                        </fieldset>
                        <fieldset className="flex items-center gap-2">
                            <Radio
                                id="-price"
                                name="sort"
                                variant="circle"
                                onChange={handleRadioChange}
                                checked={searchParams.get("sort") === "-price"}
                            />
                            <Label htmlFor="-price">Price High to Low</Label>
                        </fieldset>
                    </form>
                    <Button className="mt-5" size="sm" onClick={() => window.location.replace("/products")}>
                        Clear Filter
                    </Button>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}
