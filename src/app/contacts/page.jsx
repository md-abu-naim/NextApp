import React from 'react';

const Contacts = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="bg-black rounded-xl shadow-md p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          Contact Us
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-white">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-white">Message</label>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <button className="w-full bg-yellow-500 text-white font-medium py-2 rounded hover:bg-yellow-600 transition-colors">
            Send Message
          </button>
        </div>

        <div className="mt-6 text-center text-gray-300 text-sm">
          Or reach us at: <br />
          <span className="font-medium">contact@yourdomain.com</span> <br />
          Phone: <span className="font-medium">+880 1234 567890</span>
        </div>
      </div>
    </div>
    );
};

export default Contacts;