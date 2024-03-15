import { useState, useEffect } from "react";
import Lucide from "../../base-components/Lucide";
import Breadcrumb from "../../base-components/Breadcrumb";
import { Menu, Popover} from "../../base-components/Headless";
import fakerData from "../../utils/faker";
import _ from "lodash";
import clsx from "clsx";
import ResetPassword from "../Modal/ResetPassword";
import { useNavigate } from "react-router-dom";
import userImage from '../../assets/images/user.jpg';
import { useDispatch, useSelector } from "react-redux";
import { resetPages } from "../../stores/features/pageSlice";

function Main(props: { toggleMobileMenu: (event: React.MouseEvent) => void; users:any; clickLogOut:any;}) {
  const [searchResultModal, setSearchResultModal] = useState(false);
  const [namePage, setNamePage] = useState(null);
  const {users, clickLogOut} = props;
  const [modalPassword, setModalPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  //show reset password modal
  const clickResetPasswordModal = () => {
    setModalPassword(!modalPassword)
  }

  //navigate to profile
  const clickProfile = () => {
    navigate(`/profile/${users && users.uuid}`)
  }

  // Show search result modal
  const showSearchResultModal = () => {
    setSearchResultModal(true);
  };

  // On press event (Ctrl+k)
  document.querySelectorAll("body")[0].onkeydown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.which == 75) {
      setSearchResultModal(true);
    }
  };

  const {pages, isPagesSuccess, isPagesError} = useSelector(
    (state : any) => state.pagesReducer
  );

  useEffect(()=>{
    if(pages && isPagesSuccess){
      setNamePage(pages && pages.pages);
      dispatch(resetPages());
    }
    if(isPagesError){
      setNamePage(null);
    }
  },[pages, isPagesSuccess, isPagesError])

  console.log(namePage, 'name page');

  return (
    <>
      <ResetPassword 
        modalPassword={modalPassword}
        setModalPassword={setModalPassword}
        id={users && users.uuid}
      />
      {/* BEGIN: Top Bar */}
      <div
        className={clsx([
          "h-[63px] z-[51] sticky top-[10px] xl:mx-[10px] flex items-center px-5",
          "before:content-[''] before:absolute before:h-3 before:top-0 before:inset-x-0 before:-mt-3 before:z-[-1] before:bg-gradient-to-b before:from-slate-100/50 before:to-slate-100/[0.93] before:dark:from-darkmode-700/50 before:dark:to-darkmode-700/[0.93]",
          "after:content-[''] after:shadow-[0_3px_15px_rgb(0_0_0_/_7%)] after:absolute after:inset-0 after:bg-white after:border after:border-slate-200 after:rounded-xl after:dark:bg-darkmode-600 after:dark:border-darkmode-500",
        ])}
      >
        {/* BEGIN: Breadcrumb */}
        <Breadcrumb className="hidden -intro-x xl:flex">
          {/* <Breadcrumb.Link to="#">APP</Breadcrumb.Link> */}
          <Breadcrumb.Link to="#" className={`${namePage === null ? 'hidden' : '' } text-gray-800 `}>{namePage}</Breadcrumb.Link>
          {/* <Breadcrumb.Link to="/">Administrator</Breadcrumb.Link>
          <Breadcrumb.Link to="/" >
            Dashboard
          </Breadcrumb.Link> */}
        </Breadcrumb>
        {/* END: Breadcrumb */}
        {/* BEGIN: Mobile Menu */}
        <div className="mr-3 -intro-x xl:hidden sm:mr-6">
          <div
            className="cursor-pointer w-[38px] h-[38px] rounded-full border border-slate-200 flex items-center justify-center dark:border-white/20"
            onClick={props.toggleMobileMenu}
          >
            <Lucide
              icon="BarChart2"
              className="w-5 h-5 transform rotate-90 dark:text-slate-500"
            />
          </div>
        </div>
        {/* END: Mobile Menu */}
        {/* BEGIN: Search */}
        <div className="relative ml-auto intro-x sm:mx-auto">
          
        </div>
        {/* END: Search */}
        {/* BEGIN: Account Menu */}
        <Menu className="h-10 intro-x">
          <Menu.Button className="flex items-center h-full dropdown-toggle">
            <div className="w-10 h-10 image-fit">
              <img
                alt="Rocketman - HTML Admin Template"
                className="border-2 border-white rounded-full shadow-lg border-opacity-10"
                src={users && users.url_image ? `${import.meta.env.VITE_REACT_APP_API_URL+users.url_image}` : userImage}
              />
            </div>
            <div className="hidden ml-3 md:block">
              <div className="max-w-[7rem] truncate font-medium capitalize">
                {users && users.name}
              </div>
              <div className="text-xs text-slate-400">
              {users && users.email}
              </div>
            </div>
          </Menu.Button>
          <Menu.Items className="w-56 mt-px">
            <Menu.Item
              onClick={()=>clickProfile()}
              >
              <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
            </Menu.Item>
            <Menu.Item
              onClick={()=>clickResetPasswordModal()}
            >
              <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Reset Password
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item
              onClick={()=>clickLogOut()}
            >
              <Lucide icon="ToggleRight" className="w-4 h-4 mr-2" /> Logout
            </Menu.Item>
          </Menu.Items>
        </Menu>
        {/* END: Account Menu */}
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;
