import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import JamOperasionalTable from '../../../components/Table/JamOperasionalTable';
import { getJamOperasionalsTable, resetJamOperasionals } from '../../../stores/features/jamOperasionalsSlice';

const JamOperasional = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {jamOperasionals, isJamOperasionalsSuccess} = useSelector(
        (state : any) => state.jamOperasionalsReducer
    )

    useEffect(()=>{
        dispatch(getJamOperasionalsTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isJamOperasionalsSuccess && jamOperasionals){
            setDatas(jamOperasionals);
            dispatch(resetJamOperasionals());
        }
    },[jamOperasionals, isJamOperasionalsSuccess]);

    return (
        <div>
            <JamOperasionalTable
                datas={datas}
                linkView="/editJamOperasional"
                linkCreate="/createJamOperasional"
            />
        </div>
    )
}

export default JamOperasional