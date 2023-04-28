import React from "react";

type TagProps = {};

const Tag: React.FC<TagProps> = () => {
  return (
    <div className="inline-flex ml-8 mt-8">
      <div className="flex-1 text-center px-4 py-2 m-2">
        <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-2">
          <img
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-200 ease-out"
            src="https://i.pinimg.com/564x/07/bf/05/07bf0549115b103e1e54d06813ec3dd9.jpg"
          />
        </div>
        <h1 className="pt-16 text-base font-semibold text-gray-900">.</h1>
      </div>

      <div className="flex-1 text-center px-4 py-2 m-2">
        <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-2">
          <img
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-200 ease-out"
            src="https://i.pinimg.com/236x/be/54/38/be543823820629ad85d4ef7d6b8c0d1c.jpg"
          />
        </div>
        <h1 className="pt-16 text-base font-semibold text-gray-900">.</h1>
      </div>

      <div className="flex-1 text-center px-4 py-2 m-2">
        <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-2">
          <img
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-200 ease-out"
            src="https://i.pinimg.com/236x/ca/59/fc/ca59fc8519260e4727c19dd64142300b.jpg"
          />
        </div>
        <h1 className="pt-16 text-base font-semibold text-gray-900">.</h1>
      </div>

      <div className="flex-1 text-center px-4 py-2 m-2">
        <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-2">
          <img
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-200 ease-out"
            src="https://i.pinimg.com/236x/ab/f5/d6/abf5d69ffedb5c6d67d26cba02f0a5c6.jpg"
          />
        </div>
        <h1 className="pt-16 text-base font-semibold text-gray-900">.</h1>
      </div>

      <div className="flex-1 text-center px-4 py-2 m-2">
        <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-2">
          <img
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-200 ease-out"
            src="https://i.pinimg.com/236x/e5/ef/41/e5ef41e6d1bc0831e68e8482061977d9.jpg"
          />
        </div>
        <h1 className="pt-16 text-base font-semibold text-gray-900">.</h1>
      </div>

      <div className="flex-1 text-center px-4 py-2 m-2">
        <div className="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-2">
          <img
            className="object-cover w-full h-full hover:scale-110 transition-transform duration-200 ease-out"
            src="https://i.pinimg.com/236x/13/ba/54/13ba54fadb9c96d79367aef90f19acad.jpg"
          />
        </div>
        <h1 className="pt-16 text-base font-semibold text-gray-900">.</h1>
      </div>
    </div>
  );
};
export default Tag;
