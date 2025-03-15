'use client';
import { useState } from "react";
import Images from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({images} : {images : string[]}) => {
    const [current, setCurrent] = useState(0);

    return <>
    <div className="space-y-4">
        <Images src={images[current]} alt="product image"  width={1000} height={1000} className="min-h-[300ox] object-cover object-center" />
    </div>
    <div className="flex">
        {images.map((image, index) => (
            <div key={index} onClick={() => setCurrent(index)} className={cn("cursor-pointer border mr-2 hover:border-orange-600", index === current &&  "border-orange-500")}>
                <Images src={image} alt="product image" width={100} height={100} className="object-cover object-center" />
            </div>
        ))}
    </div>
    </>;
}
 
export default ProductImages;