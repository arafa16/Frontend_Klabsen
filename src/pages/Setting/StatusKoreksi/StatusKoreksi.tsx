import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getStatusKoreksiTable, resetStatusKoreksi } from '../../../stores/features/statusKoreksiSlice';

const StatusKoreksi = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {statusKoreksi, isStatusKoreksiSuccess} = useSelector(
        (state : any) => state.statusKoreksiReducer
    )

    useEffect(()=>{
        dispatch(getStatusKoreksiTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isStatusKoreksiSuccess && statusKoreksi){
            setDatas(statusKoreksi);
            countData(statusKoreksi.count);
            dispatch(resetStatusKoreksi());
        }
    },[statusKoreksi, isStatusKoreksiSuccess])

    //table
    const countData = (allData : any) =>{
        const count = allData / limit;
        setAllPage(Math.ceil(count))
    }

    const nextPage = () => {
        if(page < allPage){
            const count = page + 1;
            setPage(count);
        }
    }

    const prevPage = () => {
        if(page > 1){
            const count = page - 1;
            setPage(count);
        }
    }

    return (
        <div className='w-full'>
            <AttributTable 
                datas={datas}
                linkView="/editStatusKoreksi"
                linkCreate="/createStatusKoreksi"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default StatusKoreksi