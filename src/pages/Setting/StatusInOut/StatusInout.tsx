import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getStatusInoutTable, resetStatusInout } from '../../../stores/features/statusInoutSlice';

const StatusInout = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {statusInout, isStatusInoutSuccess} = useSelector(
        (state : any) => state.statusInoutReducer
    )

    useEffect(()=>{
        dispatch(getStatusInoutTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isStatusInoutSuccess && statusInout){
            setDatas(statusInout);
            dispatch(resetStatusInout());
        }
    },[statusInout, isStatusInoutSuccess])

    return (
        <div className='w-full'>
            <AttributTable 
                datas={datas}
                linkView="/editStatusInout"
                linkCreate="/createStatusInout"
            />
        </div>
    )
}

export default StatusInout