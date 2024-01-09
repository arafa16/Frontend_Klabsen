import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import DataUser from '../../components/Profile/DataUser';
import { AnyIfEmpty, useDispatch, useSelector} from 'react-redux';
import { resetUsers, getUserById, deleteUser, UpdateStatusUser } from '../../stores/features/usersSlice';
import { getStatus } from '../../stores/features/statusSlice';
import StatusUser from '../../components/Profile/StatusUser';
import ProfileCover from '../../components/Profile/ProfileCover';
import Button from '../../base-components/Button';
import { Menu } from '../../base-components/Headless';
import EditStatusUser from '../../components/Profile/EditStatusUser';
import UploadPhoto from '../../components/Modal/UploadPhoto';

const ViewEmploye = () => {
    const {id} = useParams();
    const [datas, setDatas] = useState<any>([]);
    const [viewEditStatus, setViewEditStatus] = useState(false);
    const [statusId, setStatusId] = useState(0);
    const [dataStatus, setDataStatus] = useState([]);
    const [isActive, setIsActive] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {users, isUsersSuccess,isUpdateUsersSuccess, messageUsers} = useSelector(
        (state : any) => state.usersReducer
    )

    const {status, isStatusSuccess} = useSelector(
        (state : any) => state.statusReducer
    )

    useEffect(()=>{
        if(isUsersSuccess && users){
          setDatas(users);
          setStatusId(users && users.status.id);
          setIsActive(users && users.isActive ? 1 : 0);
          dispatch(resetUsers());
        }
    },[users, isUsersSuccess])

    useEffect(()=>{
        if(isUsersSuccess && messageUsers){
          dispatch(resetUsers());
          navigate('/dataEmploye');
        }
    },[messageUsers, isUsersSuccess]);

    useEffect(()=>{
        if(isUpdateUsersSuccess && messageUsers){
          dispatch(resetUsers());
          setViewEditStatus(false);
          getDataUser();
        }
    },[messageUsers, isUsersSuccess]);

    useEffect(()=>{
        getDataUser();
    },[]);
    
    const getDataUser = () => {
    dispatch(getUserById({id}));
    }

    const deleteUserById = () => {
        dispatch(deleteUser({id}));
    }

    const changeEditStatus = (status : boolean) => {
        setViewEditStatus(status);
    }

    useEffect(()=>{
        dispatch(getStatus());
    },[])

    useEffect(()=>{
        if(status && isStatusSuccess){
            setDataStatus(status);
        }
    },[status, isStatusSuccess])

    const updateStatus = (e:any) => {
        e.preventDefault();
        dispatch(UpdateStatusUser({
            id, statusId, isActive
        }));
    }

    const uploadPhoto = () => {
        setShowModal(true);
    }

    return (
        <div className="grid grid-cols-12 gap-4 mt-5">
            <div className="col-span-12 xl:col-span-12 flex w-full justify-end gap-4 z-50">
                <Menu>
                    <Menu.Button>
                        <Button  variant='primary' size='sm'>
                            Action
                        </Button>
                    </Menu.Button>
                    <Menu.Items className="w-40">
                        <Menu.Item 
                            onClick={()=>navigate(`/updateEmploye/${id}`)}
                            >
                            Update User
                        </Menu.Item>
                        <Menu.Item 
                            className={`hover:bg-red-500 hover:text-white`}
                            onClick={()=>deleteUserById()}
                            >
                            Delete
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
                <Button
                    variant={`secondary`}
                    size='sm'
                    onClick={()=>navigate('/dataEmploye')}
                    >
                    Back to Employe
                </Button>
            </div>
            <div className="col-span-12 xl:col-span-12">
                <ProfileCover 
                    users={datas}
                    uploadPhoto={uploadPhoto}
                />
                <UploadPhoto 
                    showModal={showModal}
                    setShowModal={setShowModal}
                    getDataUser={getDataUser}
                />
            </div>
            <div className="col-span-12 xl:col-span-8">
                <DataUser 
                    users={datas}
                    title={`Data User`}
                />
            </div>
            <div className="col-span-12 xl:col-span-4">
                <StatusUser 
                    title={`Status User`}
                    datas={datas}
                    changeEditStatus={changeEditStatus}
                    viewEditStatus={viewEditStatus}
                />
                <EditStatusUser 
                    title={`Edit Status User`}
                    viewEditStatus={viewEditStatus}
                    changeEditStatus={changeEditStatus}
                    statusId={statusId}
                    isActive={isActive}
                    datas={datas}
                    setStatusId={setStatusId}
                    setIsActive={setIsActive}
                    dataStatus={dataStatus}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
}

export default ViewEmploye