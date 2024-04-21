import React from 'react';
import { Link } from 'react-router-dom';

export default function EditButton() {
  return (
      <div className="container mx-auto py-5 min-h-screen flex items-center justify-center">
        <div className="lg:w-9/12 xl:w-7/12">
          <div className="bg-white shadow rounded-lg">
            <div className="flex items-center justify-start bg-black text-white rounded-t-lg p-5">
              <div className="mr-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                  alt="Generic placeholder image" className="rounded-full w-36" />
                <button className="mt-4 px-4 py-2 border border-white rounded text-white">
                  Edit profile
                </button>
              </div>
    
            </div>

            <div className="p-4 text-black">
     
              <div className="flex justify-between items-center mb-4">
                <p className="text-lg font-semibold mb-0">My properties</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                  alt="image 1" className="w-full rounded-lg" />
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                  alt="image 2" className="w-full rounded-lg" />
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                  alt="image 3" className="w-full rounded-lg" />
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                  alt="image 4" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}