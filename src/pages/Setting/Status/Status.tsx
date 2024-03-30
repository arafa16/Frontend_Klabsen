import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getStatusTable, resetStatus } from '../../../stores/features/statusSlice';

const Status = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {status, isStatusSuccess} = useSelector(
        (state : any) => state.statusReducer
    )

    useEffect(()=>{
        dispatch(getStatusTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isStatusSuccess && status){
            setDatas(status);
            countData(status.count);
            dispatch(resetStatus());
        }
    },[status, isStatusSuccess]);

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
                linkView="/editStatus"
                linkCreate="/createStatus"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default Status