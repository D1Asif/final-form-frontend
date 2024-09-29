import { Button, Checkbox, Dropdown, DropdownAction, DropdownContent, DropdownList, Label, Radio } from "keep-react";
import PriceRange from "./PriceRange";


export default function ProductFilterDropdown() {
    return (
        <Dropdown>
            <DropdownAction asChild>
                <Button>Filter</Button>
            </DropdownAction>
            <DropdownContent className="border w-[350px]">
                <DropdownList>
                    <div className="flex flex-col gap-4 font-semibold mb-5">
                        Price range
                        <PriceRange />
                    </div>
                    <div className="flex flex-col gap-3 font-semibold mb-5">
                        Category
                        <fieldset className="flex items-center gap-2">
                            <Checkbox defaultChecked={true} id="shoes" />
                            <Label htmlFor="shoes">
                                Shoes
                            </Label>
                        </fieldset>
                        <fieldset className="flex items-center gap-2">
                            <Checkbox defaultChecked={true} id="apparel" />
                            <Label htmlFor="apparel">Team License</Label>
                        </fieldset>
                        <fieldset className="flex items-center gap-2">
                            <Checkbox defaultChecked={true} id="equipment" />
                            <Label htmlFor="equipment">Equipment</Label>
                        </fieldset>
                        <fieldset className="flex items-center gap-2">
                            <Checkbox defaultChecked={true} id="miscellaneous" />
                            <Label htmlFor="miscellaneous">Miscellaneous</Label>
                        </fieldset>
                    </div>
                    <form className="flex flex-col gap-3">
                        <legend className="font-semibold">Sort</legend>
                        <fieldset className="flex items-center gap-2">
                            <Radio id="asc" name="sort" />
                            <Label htmlFor="bd">Price Low to High</Label>
                        </fieldset>
                        <fieldset className="flex items-center gap-2">
                            <Radio id="desc" name="sort" />
                            <Label htmlFor="usa">Price Low to High</Label>
                        </fieldset>
                    </form>
                </DropdownList>
            </DropdownContent>
        </Dropdown>
    )
}
