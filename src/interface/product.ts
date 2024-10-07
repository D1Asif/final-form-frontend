export type TProduct = {
    _id: string;
    name: string;
    price: number;          
    description: string;    
    images: string[];       
    category: string;       
    stock: number;
    tags: string[];
}