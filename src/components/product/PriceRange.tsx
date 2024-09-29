import { Slider } from "keep-react"


export default function PriceRange() {
    return (
        <Slider
            min={0} 
            max={100} 
            defaultValue={[33, 75]}
            onValueChange={(value) => value}
        />
    )
}
