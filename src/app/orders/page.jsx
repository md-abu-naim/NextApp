
const Orders = async () => {

  const res = await fetch('http://localhost:3000/api/orders')
  const orders = await res.json()
  console.log(orders);
  return (
    <div className="">
      {
        orders.map(order => <div className=" shadow-md rounded-xl p-6 max-w-3xl mx-auto mt-8 border border-gray-100">
          {/* Customer Info */}
          <div className="flex items-center gap-4 mb-6">
            <img
              src={order.customerImage}
              alt={order.customerName}
              className="w-16 h-16 rounded-full object-cover border"
            />
            <div>
              <h2 className="text-xl font-semibold ">
                {order.customerName}
              </h2>
              <p className="text-sm">{order.email}</p>
              <p className="text-sm">{order.phone}</p>
              <p className="text-sm">{order.address}</p>
            </div>
          </div>

          {/* Order Info */}
          <div className="flex flex-wrap items-center justify-between mb-6 text-sm">
            <p>
              <span className="font-medium ">Order Date:</span>{" "}
              {order.date}
            </p>
            <p>
              <span className="font-medium ">Payment:</span>{" "}
              <span className="text-green-600">{order.paymentStatus}</span>
            </p>
            <p>
              <span className="font-medium ">Status:</span>{" "}
              <span
                className={`${order.orderStatus === "Shipped"
                  ? "text-blue-600"
                  : order.orderStatus === "Delivered"
                    ? "text-green-600"
                    : "text-yellow-600"
                  }`}
              >
                {order.orderStatus}
              </span>
            </p>
            <p>
              <span className="font-medium ">Total:</span>{" "}
              <span className="text-yellow-600 font-semibold">
                ${order.totalPrice}
              </span>
            </p>
          </div>

          {/* Product List */}
          <div className="space-y-4">
            {order.products.map((product) => (
              <div
                key={product._id}
                className="flex items-center gap-4 rounded-lg p-3"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm">
                    {product.category} • {product.shortBio}
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium ">Status:</span>{" "}
                    <span
                      className={`${product.status === "In Stock"
                        ? "text-green-600"
                        : "text-red-600"
                        }`}
                    >
                      {product.status}
                    </span>
                  </p>
                </div>
                <span className="text-yellow-600 font-semibold">
                  ${product.price}
                </span>
              </div>
            ))}
          </div>

          {/* View Button */}
          <button className="mt-6 w-full bg-yellow-500 text-white font-medium py-2 rounded hover:bg-yellow-600 transition-colors">
            View Order Details
          </button>
        </div>)
      }
    </div>
  );
};

export default Orders;