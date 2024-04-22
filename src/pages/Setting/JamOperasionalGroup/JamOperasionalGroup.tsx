import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import JamOperasionalTable from '../../../components/Table/JamOperasionalTable';
import { getJamOperasionalGroupsTable, resetJamOperasionalGroups } from '../../../stores/features/jamOperasionalGroupsSlice';

const JamOperasionalGroup = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {jamOperasionalGroups, isJamOperasionalGroupsSuccess} = useSelector(
        (state : any) => state.jamOperasionalGroupsReducer
    )

    useEffect(()=>{
        dispatch(getJamOperasionalGroupsTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isJamOperasionalGroupsSuccess && jamOperasionalGroups){
            setDatas(jamOperasionalGroups);
            countData(jamOperasionalGroups.count);
            dispatch(resetJamOperasionalGroups());
        }
    },[jamOperasionalGroups, isJamOperasionalGroupsSuccess]);

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
                linkView="/editJamOperasionalGroup"
                linkCreate="/createJamOperasionalGroup"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default JamOperasionalGroup