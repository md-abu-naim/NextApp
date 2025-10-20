import dbConnect from "@/lib/dbConnect";
import Image from "next/image";

const Products = async () => {
    const data = dbConnect()
    const products = await data?.find().toArray()

    return (
        <div className="p-7">
            <h1 className="text-5xl font-bold text-center my-7 underline">OUR ALL PRODUCTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    products?.map(p => (<div key={p._id} className="max-w-sm bg-black rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    
                    <Image src={p.image} className="w-full h-52 object-cover" alt="product" width={400} height={300} />

                    <div className="p-5 text-center">
                        <h2 className="text-xl font-semibold mb-1">
                            {p.name}
                        </h2>
                        <p className="text-sm text-gray-300 mb-2">Category: {p.category}</p>

                        <p className="text-gray-500 text-sm mb-3">
                            {p.shortBio}
                        </p>

                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-yellow-600">${p.price}</span>
                            <span className="text-sm font-medium text-green-600">{p.status}</span>
                        </div>

                        <button className="w-full bg-yellow-500 text-white font-medium py-2 rounded hover:bg-yellow-600 transition-colors">
                            View Details
                        </button>
                    </div>
                </div>))
                }
            </div>

        </div>
    );
};

export default Products;