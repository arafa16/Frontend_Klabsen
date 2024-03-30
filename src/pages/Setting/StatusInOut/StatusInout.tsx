import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getStatusInoutTable, resetStatusInout } from '../../../stores/features/statusInoutSlice';

const StatusInout = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {statusInout, isStatusInoutSuccess} = useSelector(
        (state : any) => state.statusInoutReducer
    )

    useEffect(()=>{
        dispatch(getStatusInoutTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isStatusInoutSuccess && statusInout){
            setDatas(statusInout);
            countData(statusInout.count);
            dispatch(resetStatusInout());
        }
    },[statusInout, isStatusInoutSuccess]);

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
                linkView="/editStatusInout"
                linkCreate="/createStatusInout"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default StatusInout