import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getStatusKoreksiTable, resetStatusKoreksi } from '../../../stores/features/statusKoreksiSlice';

const StatusKoreksi = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {statusKoreksi, isStatusKoreksiSuccess} = useSelector(
        (state : any) => state.statusKoreksiReducer
    )

    useEffect(()=>{
        dispatch(getStatusKoreksiTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isStatusKoreksiSuccess && statusKoreksi){
            setDatas(statusKoreksi);
            dispatch(resetStatusKoreksi());
        }
    },[statusKoreksi, isStatusKoreksiSuccess])

    return (
        <div className='w-full'>
            <AttributTable 
                datas={datas}
                linkView="/editStatusKoreksi"
                linkCreate="/createStatusKoreksi"
            />
        </div>
    )
}

export default StatusKoreksi