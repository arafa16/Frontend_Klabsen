import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getGandersTable, resetGanders } from '../../../stores/features/ganderSlice';

const Gander = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {ganders, isGandersSuccess} = useSelector(
        (state : any) => state.ganderReducer
    )

    useEffect(()=>{
        dispatch(getGandersTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isGandersSuccess && ganders){
            setDatas(ganders);
            dispatch(resetGanders());
        }
    },[ganders, isGandersSuccess])

    return (
        <div>
            <AttributTable 
                datas={datas}
                linkView="/editGander"
                linkCreate="/createGander"
            />
        </div>
    )
}

export default Gander