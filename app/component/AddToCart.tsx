"use client"
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "../interface";
import { urlFor } from "../lib/sanity";

export default function AddToCart({currency,description,image,name,price}:ProductCart){
  const {addItem,handleCartClick}=useShoppingCart()
  const product = {
   name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id:"aasa"
  };
    return(
        <Button onClick={() => {
        addItem(product), handleCartClick();
      }}
>
            Add To Cart
        </Button>
    )
} 