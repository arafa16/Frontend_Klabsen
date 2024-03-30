import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getTipePendapatansTable, resetTipePendapatans } from '../../../stores/features/tipePendapatanSlice';

const TipePendapatan = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {tipePendapatans, isTipePendapatansSuccess} = useSelector(
        (state : any) => state.tipePendapatansReducer
    )

    useEffect(()=>{
        dispatch(getTipePendapatansTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isTipePendapatansSuccess && tipePendapatans){
            setDatas(tipePendapatans);
            countData(tipePendapatans.count);
            dispatch(resetTipePendapatans());
        }
    },[tipePendapatans, isTipePendapatansSuccess]);

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
                linkView="/editTipePendapatan"
                linkCreate="/createTipePendapatan"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default TipePendapatan