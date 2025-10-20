import dbConnect from "@/lib/dbConnect";

const Products = async () => {
    const data = dbConnect()
    const products = await data?.find().toArray()
    console.log(products);
    return (
        <div className="p-7">
            <h1 className="text-5xl font-bold text-center my-7 underline">OUR ALL PRODUCTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products?.map(p => (<div key={p._id} className="max-w-sm bg-black rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img
                        src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&auto=format&fit=crop&q=60"
                        alt="Product"
                        className="w-full h-52 object-cover"
                    />

                    <div className="p-5">
                        <h2 className="text-xl font-semibold mb-1">
                            Organic Face Cream
                        </h2>
                        <p className="text-sm text-gray-300 mb-2">Category: Face Care</p>

                        <p className="text-gray-500 text-sm mb-3">
                            A natural moisturizer enriched with aloe vera and essential oils that
                            keeps your skin hydrated and glowing all day.
                        </p>

                        <div className="flex items-center justify-between mb-4">
                            <span className="text-lg font-bold text-yellow-600">$25</span>
                            <span className="text-sm font-medium text-green-600">In Stock</span>
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