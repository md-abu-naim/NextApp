
const ProductDetails = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
      <div className=" rounded-xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src=""
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3 ">name</h1>
            <p className="text-sm  mb-4">Category: {}</p>
            <p className=" mb-6">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold text-yellow-600">15</span>
            <span className={`text-sm font-medium `}>
              active
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