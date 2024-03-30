import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import JamOperasionalTable from '../../../components/Table/JamOperasionalTable';
import { getJamOperasionalsTable, resetJamOperasionals } from '../../../stores/features/jamOperasionalsSlice';

const JamOperasional = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {jamOperasionals, isJamOperasionalsSuccess} = useSelector(
        (state : any) => state.jamOperasionalsReducer
    )

    useEffect(()=>{
        dispatch(getJamOperasionalsTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isJamOperasionalsSuccess && jamOperasionals){
            setDatas(jamOperasionals);
            countData(jamOperasionals.count);
            dispatch(resetJamOperasionals());
        }
    },[jamOperasionals, isJamOperasionalsSuccess]);

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
            <JamOperasionalTable
                datas={datas}
                linkView="/editJamOperasional"
                linkCreate="/createJamOperasional"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default JamOperasional