import React from "react";

const JoinFormModal = ({ isOpen, setIsOpen }) => {
  const [formType, setFormType] = React.useState("user");

  if (!isOpen) return null; // Prevent modal from rendering if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#d6f8f3]/90 bg-opacity-50 z-50">
        
        <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md relative">
        
        {/* Close Button */}
        <button
          className="absolute top-2 right-4 text-gray-500 hover:text-red-500 text-lg font-bold"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>

        <h1 className='bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-center bg-clip-text text-transparent text-[20px] 
        md:text-[30px] font-bold'>
            Join Clean
        </h1>
        {/* Toggle Buttons */}
        <div className="bg-[#f0f4f9] flex p-1 rounded-xl justify-between mt-5 mb-4">
            <button
                className={`px-6 py-2 rounded-lg font-bold cursor-pointer ${formType === "user" ? "bg-[#f7fafc] text-black w-full" : "bg-transparent text-gray-700 w-full"}`}
                onClick={() => setFormType("user")}
            >
                Customer
            </button>

            <button
            className={`px-6 py-2 rounded-lg font-bold cursor-pointer ${formType === "business" ? "bg-[#f7fafc] text-black w-full" : "bg-transparent text-gray-700 w-full"}`}
            onClick={() => setFormType("business")}
            >
                Laundry Shop
            </button>
        </div>

        {/* Forms */}
        <div className="w-full">
          {formType === "user" ? (
            <form>
              <h2 className="text-xl font-bold mb-4">User Registration</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter your full name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter your phone number" />
              </div>
              <button className="w-full bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-white py-2 rounded-lg mt-4 cursor-pointer
              hover:shadow-xl transition-transform-y duration-300 hover:scale-102">Submit</button>
            </form>
          ) : (
            <form>
              <h2 className="text-xl font-bold mb-4">Business Registration</h2>
              <div className="mb-4">
                <label className="block text-gray-700">Business Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter business name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Business Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg" placeholder="Enter business email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Business Type</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg" placeholder="e.g. Laundry Service" />
              </div>
              <button className="w-full bg-gradient-to-r from-[#1f9df4] to-[#1fd9ba] text-white py-2 rounded-lg mt-4 cursor-pointer">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinFormModal;
