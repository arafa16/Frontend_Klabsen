import React from 'react'
import preview16Url from "../../assets/images/fakers/preview-16.jpg";
import preview12Url from "../../assets/images/fakers/profile-12.jpg";
import userImage from '../../assets/images/user.jpg';
import Lucide from "../../base-components/Lucide";

const ProfileCover = (props : any) => {
    const {users} = props;
  return (
    <div className="col-span-12">
        <div className="px-3 pt-3 pb-5 box intro-y">
        <div className="image-fit h-80 before:content-[''] before:absolute before:w-full before:h-full before:bg-gradient-to-b from-black/20 to-black before:rounded-md before:z-10">
            <img
            alt="user dashboard"
            className="rounded-md md:object-[0px_-170px]"
            src={preview16Url}
            />
        </div>
        <div className="flex flex-col items-center justify-center text-center 2xl:flex-row 2xl:text-left">
            <div className="z-20 -mt-20 2xl:-mt-10 2xl:ml-10">
            <div className="w-40 h-40 overflow-hidden border-4 border-white rounded-full shadow-md image-fit">
                <img
                alt="user image"
                src={users && users.url_image ? `${import.meta.env.VITE_REACT_APP_API_URL+users.url_image}` : userImage}
                />
            </div>
            </div>
            <div className="2xl:ml-5">
                <h2 className="mt-5 text-xl font-medium uppercase">
                    {users && users.name}
                </h2>
                    <div className="flex items-center justify-center mt-2 text-slate-500 2xl:justify-start">
                        <Lucide icon="Briefcase" className="w-4 h-4 mr-2" />
                        {users && users.jabatan.name}
                    </div>
                    <div className="flex items-center justify-center mt-2 text-slate-500 2xl:justify-start">
                        <Lucide icon="MapPin" className="w-4 h-4 mr-2" />
                        {users && users.penempatan.name}
                    </div>
                </div>
            <div className="grid h-20 grid-cols-2 2xl:grid-cols-2 px-10 mx-auto mt-5 mb-6 border-dashed gap-y-2 md:gap-y-0 gap-x-5 2xl:border-l border-slate-200 2xl:mb-0">
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                    <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                    {users && users.email}
                </div>
                <div className="flex items-center justify-center col-span-2 md:col-span-1 2xl:justify-start">
                    <Lucide icon="Smartphone" className="w-4 h-4 mr-2" />
                    {users && users.nomorHp}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProfileCover