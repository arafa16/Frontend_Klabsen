import React from 'react'
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";

const UpdateProfileButton = () => {
  return (
    <div className="flex flex-col items-center mt-8 intro-y sm:flex-row w-full justify-end ">
        <div className="flex mt-4 sm:w-auto sm:mt-0">
            <Button 
            variant="primary" 
            className="mr-2 shadow-md"
            size="sm"
            >
            <Lucide icon="Pencil" className="w-4 h-4 mr-2" /> Update Profile
            </Button>
            <Button variant="outline-secondary" className="shadow-md" size="sm">
            <Lucide icon="Download" className="w-4 h-4 mr-2" /> View Profile
            </Button>
        </div>
    </div>
  )
}

export default UpdateProfileButton