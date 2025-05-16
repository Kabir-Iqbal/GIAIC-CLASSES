import Image from "next/image"

export default function ProductCard() {
    return (
        <div className="flex md:flex-row flex-col justify-around">
            <div className="md:w-6/12 w-full mb-20">
                <div className="flex items-center justify-center">

                    <Image
                        src="/product1.jpg"
                        alt="Product Three"
                        width={300}
                        height={300}
                    />
                </div>
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-6/12 w-full mb-20 ">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product2.png"
                        alt="Product Three"
                        width={500}
                        height={500}
                    />
                </div>
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-6/12 w-full">
                <div className="flex items-center justify-center">
                    <Image
                        src="/product3.jpg"
                        alt="Product Three"
                        width={400}
                        height={200}
                    />
                </div>
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">
                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}