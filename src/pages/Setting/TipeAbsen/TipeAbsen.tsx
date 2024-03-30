import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getTipeAbsensTable, resetTipeAbsens } from '../../../stores/features/tipeAbsenSlice';
import TipeAbsenTable from '../../../components/Table/TipeAbsen/TipeAbsenTable';

const TipeNotification = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {tipeAbsens, isTipeAbsensSuccess} = useSelector(
        (state : any) => state.tipeAbsensReducer
    )

    useEffect(()=>{
        dispatch(getTipeAbsensTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isTipeAbsensSuccess && tipeAbsens){
            setDatas(tipeAbsens);
            countData(tipeAbsens.count);
            dispatch(resetTipeAbsens());
        }
    },[tipeAbsens, isTipeAbsensSuccess]);

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
            <TipeAbsenTable
                datas={datas}
                linkView="/editTipeAbsen"
                linkCreate="/createTipeAbsen"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default TipeNotification