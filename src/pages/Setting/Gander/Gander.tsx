import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getGandersTable, resetGanders } from '../../../stores/features/ganderSlice';

const Gander = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {ganders, isGandersSuccess} = useSelector(
        (state : any) => state.ganderReducer
    )

    useEffect(()=>{
        dispatch(getGandersTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isGandersSuccess && ganders){
            setDatas(ganders);
            countData(ganders.count);
            dispatch(resetGanders());
        }
    },[ganders, isGandersSuccess]);

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
                linkView="/editGander"
                linkCreate="/createGander"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default Gander