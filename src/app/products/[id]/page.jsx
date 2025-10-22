import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const ProductDetails = async ({ params }) => {
    const p = await params.id
    const id = { _id: new ObjectId(p) }
    const data = dbConnect()
    const product = await data.findOne(id)

    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
            <div className=" rounded-xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">

                {/* Product Image */}
                <div className="md:w-1/2">
                    <Image className="w-full h-full object-cover" src={product.image} alt="image" width={600} height={400} />
                </div>

                {/* Product Details */}
                <div className="md:w-1/2 p-8 flex flex-col justify-between">
                    <div>
                        <h1 className="text-3xl font-bold mb-3 ">{product.name}</h1>
                        <p className="text-sm  mb-4">Category: {product.category}</p>
                        <p className=" mb-6">{product.description}</p>
                    </div>

                    <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-bold text-yellow-600">{product.price}</span>
                        <span className={`text-sm font-medium ${product.status === "In Stock" ? "text-green-600" : "text-red-600"}`}>
                            {product.status}
                        </span>
                    </div>

                    <button className="w-full bg-yellow-500 text-white font-medium py-3 rounded hover:bg-yellow-600 transition-colors">
                        Add to Cart
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductDetails;