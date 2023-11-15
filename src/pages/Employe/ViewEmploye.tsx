import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import DataUser from '../../components/Profile/DataUser';
import { AnyIfEmpty, useDispatch, useSelector} from 'react-redux';
import { resetUsers, getUserById } from '../../stores/features/usersSlice';
import StatusUser from '../../components/Profile/StatusUser';

const ViewEmploye = () => {
    const {id} = useParams();
    const [datas, setDatas] = useState<any>([]);
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

    console.log(users, 'data users');

    return (
        <div className="grid grid-cols-12 gap-5 mt-5">
            <div className="col-span-12 xl:col-span-8">
                <DataUser 
                    users={datas}
                    title={`Data : ${datas && datas.name}`}
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