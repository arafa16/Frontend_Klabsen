import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getTipeNotificationsTable, resetTipeNotifications } from '../../../stores/features/tipeNotificationSlice';

const TipeNotification = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {tipeNotifications, isTipeNotificationsSuccess} = useSelector(
        (state : any) => state.tipeNotificationsReducer
    )

    useEffect(()=>{
        dispatch(getTipeNotificationsTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isTipeNotificationsSuccess && tipeNotifications){
            setDatas(tipeNotifications);
            dispatch(resetTipeNotifications());
        }
    },[tipeNotifications, isTipeNotificationsSuccess])

    return (
        <div>
            <AttributTable 
                datas={datas}
                linkView="/editTipeNotification"
                linkCreate="/createTipeNotification"
            />
        </div>
    )
}

export default TipeNotification