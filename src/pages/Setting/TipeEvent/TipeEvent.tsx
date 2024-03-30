import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getTipePendapatansTable, resetTipePendapatans } from '../../../stores/features/tipePendapatanSlice';
import { getTipeEventsTable, resetTipeEvents } from '../../../stores/features/tipeEventSlice';

const TipeEvent = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {tipeEvents, isTipeEventsSuccess} = useSelector(
        (state : any) => state.tipeEventsReducer
    )

    useEffect(()=>{
        dispatch(getTipeEventsTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isTipeEventsSuccess && tipeEvents){
            setDatas(tipeEvents);
            countData(tipeEvents.count);
            dispatch(resetTipeEvents());
        }
    },[tipeEvents, isTipeEventsSuccess])

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
        <div>
            <AttributTable 
                datas={datas}
                linkView="/editTipeEvent"
                linkCreate="/createTipeEvent"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default TipeEvent