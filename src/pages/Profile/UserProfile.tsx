import _ from "lodash";
import { useEffect, useState } from "react";
import UpdateProfileButton from "../../components/Button/UpdateProfileButton";
import ProfileCover from "../../components/Profile/ProfileCover";

import DataUser from "../../components/Profile/DataUser";
import ExperienceUser from "../../components/Profile/ExperienceUser";
import SkillUser from "../../components/Profile/SkillUser";
import EducationUser from "../../components/Profile/EducationUser";
import FriendsUser from "../../components/Profile/FriendsUser";
import UploadPhoto from '../../components/Modal/UploadPhoto';

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, resetUsers } from "../../stores/features/usersSlice";


const UserProfile = () => {
  const {id} = useParams();
  const [datas, setDatas] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch()

  const {users, isUsersSuccess} = useSelector(
    (state : any) => state.usersReducer
  )

  useEffect(()=>{
    if(isUsersSuccess && users){
      setDatas(users);
      dispatch(resetUsers());
    }
  },[users, isUsersSuccess])

  useEffect(()=>{
    getDataUser();
  },[]);

  const getDataUser = () => {
    dispatch(getUserById({id}));
  }

  const uploadPhoto = () => {
    setShowModal(true);
  }
  
  return (
    <>
      <UpdateProfileButton />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <ProfileCover 
          users={datas}
          uploadPhoto={uploadPhoto}
        />
        <UploadPhoto 
            showModal={showModal}
            setShowModal={setShowModal}
            getDataUser={getDataUser}
        />
        {/* BEGIN: Profile Content */}
        <div className="col-span-12 xl:col-span-8">
          <DataUser 
            users={datas}
            title={`Profile`}
          />
          {/* <ExperienceUser /> */}
          {/* <SkillUser /> */}
        </div>
        {/* END: Profile Content */}
        {/* BEGIN: Profile Side Menu */}
        <div className="col-span-12 xl:col-span-4">
          {/* <EducationUser 
            users={users}
          /> */}
          {/* <FriendsUser /> */}
        </div>
        {/* END: Profile Side Menu */}
      </div>
    </>
  );
}

export default UserProfile;
