import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getTipeAbsensTable, resetTipeAbsens } from '../../../stores/features/tipeAbsenSlice';
import TipeAbsenTable from '../../../components/Table/TipeAbsen/TipeAbsenTable';

const TipeNotification = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {tipeAbsens, isTipeAbsensSuccess} = useSelector(
        (state : any) => state.tipeAbsensReducer
    )

    useEffect(()=>{
        dispatch(getTipeAbsensTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isTipeAbsensSuccess && tipeAbsens){
            setDatas(tipeAbsens);
            dispatch(resetTipeAbsens());
        }
    },[tipeAbsens, isTipeAbsensSuccess])

    return (
        <div>
            <TipeAbsenTable
                datas={datas}
                linkView="/editTipeAbsen"
                linkCreate="/createTipeAbsen"
            />
        </div>
    )
}

export default TipeNotification