import _ from "lodash";

import UpdateProfileButton from "../../components/Button/UpdateProfileButton";
import ProfileCover from "../../components/Profile/ProfileCover";

import DataUser from "../../components/Profile/DataUser";
import ExperienceUser from "../../components/Profile/ExperienceUser";
import SkillUser from "../../components/Profile/SkillUser";
import EducationUser from "../../components/Profile/EducationUser";
import FriendsUser from "../../components/Profile/FriendsUser";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserById } from "../../stores/features/usersSlice";
import { useEffect } from "react";

const UserProfile = () => {
  const {id} = useParams();
  const dispatch = useDispatch()

  const {users} = useSelector(
    (state : any) => state.usersReducer
  )

  useEffect(()=>{
    getDataUser();
  },[]);

  const getDataUser = () => {
    dispatch(getUserById({id}));
  }
  return (
    <>
      <UpdateProfileButton />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <ProfileCover 
          users={users}
        />
        {/* BEGIN: Profile Content */}
        <div className="col-span-12 xl:col-span-8">
          <DataUser 
            users={users}
          />
          {/* <ExperienceUser /> */}
          <SkillUser />
        </div>
        {/* END: Profile Content */}
        {/* BEGIN: Profile Side Menu */}
        <div className="col-span-12 xl:col-span-4">
          {/* <EducationUser 
            users={users}
          /> */}
          <FriendsUser />
        </div>
        {/* END: Profile Side Menu */}
      </div>
    </>
  );
}

export default UserProfile;
