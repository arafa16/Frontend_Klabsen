import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getStatusPerkawinansTable, resetStatusPerkawinans } from '../../../stores/features/statusPerkawinansSlice';

const StatusPerkawinan = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {statusPerkawinans, isStatusPerkawinansSuccess} = useSelector(
        (state : any) => state.statusPerkawinansReducer
    )

    useEffect(()=>{
        dispatch(getStatusPerkawinansTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isStatusPerkawinansSuccess && statusPerkawinans){
            setDatas(statusPerkawinans);
            countData(statusPerkawinans.count);
            dispatch(resetStatusPerkawinans());
        }
    },[statusPerkawinans, isStatusPerkawinansSuccess])

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
                linkView="/editStatusPerkawinan"
                linkCreate="/createStatusPerkawinan"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default StatusPerkawinan