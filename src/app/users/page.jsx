
const Users = async () => {

  const res = await fetch('http://localhost:3000/api/users')
  const users = await res.json()
  console.log(users);
  return (
    <div className="grid grid-cols-4 gap-4">
      {
        users.map(user => <div key={user._id} className="bg-white shadow-md rounded-2xl p-5 flex flex-col items-center border border-gray-100 hover:shadow-lg transition-all duration-300">
          <img
            src={user.profile}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-green-500 mb-4"
          />
          <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500">{user.email}</p>
          <span
            className={`mt-2 px-3 py-1 text-xs font-medium rounded-full ${user.status === "Active"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-500"
              }`}
          >
            {user.status}
          </span>

          <div className="w-full mt-5 text-sm text-gray-600 space-y-2">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Role:</span>
              <span className="text-gray-500">{user.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Phone:</span>
              <span className="text-gray-500">{user.phone}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Address:</span>
              <span className="text-gray-500 text-right">{user.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Joined:</span>
              <span className="text-gray-500">{user.createdAt}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700">Last Login:</span>
              <span className="text-gray-500">{user.lastLogin}</span>
            </div>
          </div>

          <button className="mt-5 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition">
            View Profile
          </button>
        </div>)
      }
    </div>
  );
};

export default Users;