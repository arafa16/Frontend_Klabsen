import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getStatusTable, resetStatus } from '../../../stores/features/statusSlice';

const Status = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {status, isStatusSuccess} = useSelector(
        (state : any) => state.statusReducer
    )

    useEffect(()=>{
        dispatch(getStatusTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isStatusSuccess && status){
            setDatas(status);
            dispatch(resetStatus());
        }
    },[status, isStatusSuccess])

    return (
        <div className='w-full'>
            <AttributTable 
                datas={datas}
                linkView="/editStatus"
                linkCreate="/createStatus"
            />
        </div>
    )
}

export default Status