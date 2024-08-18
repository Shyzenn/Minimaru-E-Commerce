import CarouselProduct from '@/components/shadcnComponent/CarouselProduct'
import products from "@/lib/data.json"; // Import the JSON data directly
import {Product} from '@/type'

export default function Trend() {
    return (
        <>
            <div>
                <div className='mb-10'>
                    <h1 className='text-2xl font-semibold'>Trending Now</h1>
                </div>
                <CarouselProduct  products={products as Product[]}/>
            </div>
        </>
    )
}