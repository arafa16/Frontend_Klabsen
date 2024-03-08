import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getTipePendapatansTable, resetTipePendapatans } from '../../../stores/features/tipePendapatanSlice';
import { getTipeEventsTable, resetTipeEvents } from '../../../stores/features/tipeEventSlice';

const TipeEvent = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {tipeEvents, isTipeEventsSuccess} = useSelector(
        (state : any) => state.tipeEventsReducer
    )

    useEffect(()=>{
        dispatch(getTipeEventsTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isTipeEventsSuccess && tipeEvents){
            setDatas(tipeEvents);
            dispatch(resetTipeEvents());
        }
    },[tipeEvents, isTipeEventsSuccess])

    return (
        <div>
            <AttributTable 
                datas={datas}
                linkView="/editTipeEvent"
                linkCreate="/createTipeEvent"
            />
        </div>
    )
}

export default TipeEvent