import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getTipeNotificationsTable, resetTipeNotifications } from '../../../stores/features/tipeNotificationSlice';

const TipeNotification = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {tipeNotifications, isTipeNotificationsSuccess} = useSelector(
        (state : any) => state.tipeNotificationsReducer
    )

    useEffect(()=>{
        dispatch(getTipeNotificationsTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isTipeNotificationsSuccess && tipeNotifications){
            setDatas(tipeNotifications);
            countData(tipeNotifications.count);
            dispatch(resetTipeNotifications());
        }
    },[tipeNotifications, isTipeNotificationsSuccess]);

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
                linkView="/editTipeNotification"
                linkCreate="/createTipeNotification"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default TipeNotification