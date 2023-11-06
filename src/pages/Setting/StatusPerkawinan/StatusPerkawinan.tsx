import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getStatusPerkawinansTable, resetStatusPerkawinans } from '../../../stores/features/statusPerkawinansSlice';

const StatusPerkawinan = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {statusPerkawinans, isStatusPerkawinansSuccess} = useSelector(
        (state : any) => state.statusPerkawinansReducer
    )

    useEffect(()=>{
        dispatch(getStatusPerkawinansTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isStatusPerkawinansSuccess && statusPerkawinans){
            setDatas(statusPerkawinans);
            dispatch(resetStatusPerkawinans());
        }
    },[statusPerkawinans, isStatusPerkawinansSuccess])

    return (
        <div className='w-full'>
            <AttributTable 
                datas={datas}
                linkView="/editStatusPerkawinan"
                linkCreate="/createStatusPerkawinan"
            />
        </div>
    )
}

export default StatusPerkawinan