import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import DataUser from '../../components/Profile/DataUser';
import { AnyIfEmpty, useDispatch, useSelector} from 'react-redux';
import { resetUsers, getUserById, deleteUser } from '../../stores/features/usersSlice';
import StatusUser from '../../components/Profile/StatusUser';
import ProfileCover from '../../components/Profile/ProfileCover';
import Button from '../../base-components/Button';
import { Menu } from '../../base-components/Headless';

const ViewEmploye = () => {
    const {id} = useParams();
    const [datas, setDatas] = useState<any>([]);
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const {users, isUsersSuccess, messageUsers} = useSelector(
        (state : any) => state.usersReducer
    )

    useEffect(()=>{
        if(isUsersSuccess && users){
          setDatas(users);
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
        getDataUser();
    },[]);
    
    const getDataUser = () => {
    dispatch(getUserById({id}));
    }

    const deleteUserById = () => {
        dispatch(deleteUser({id}));
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
                />
            </div>
        </div>
    )
}

export default ViewEmploye