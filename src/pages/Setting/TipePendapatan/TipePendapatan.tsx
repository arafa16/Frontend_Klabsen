import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getTipePendapatansTable, resetTipePendapatans } from '../../../stores/features/tipePendapatanSlice';

const TipePendapatan = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {tipePendapatans, isTipePendapatansSuccess} = useSelector(
        (state : any) => state.tipePendapatansReducer
    )

    useEffect(()=>{
        dispatch(getTipePendapatansTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isTipePendapatansSuccess && tipePendapatans){
            setDatas(tipePendapatans);
            dispatch(resetTipePendapatans());
        }
    },[tipePendapatans, isTipePendapatansSuccess])

    return (
        <div>
            <AttributTable 
                datas={datas}
                linkView="/editTipePendapatan"
                linkCreate="/createTipePendapatan"
            />
        </div>
    )
}

export default TipePendapatan