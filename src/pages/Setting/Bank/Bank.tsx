import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getBanksTable, resetBanks } from '../../../stores/features/banksSlice';
import AttributTable from '../../../components/Table/AttributTable';

const Bank = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {banks, isBanksSuccess} = useSelector(
        (state : any) => state.banksReducer
    )

    useEffect(()=>{
        dispatch(getBanksTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isBanksSuccess && banks){
            setDatas(banks);
            dispatch(resetBanks());
        }
    },[banks, isBanksSuccess])

    return (
        <div className='w-full'>
            <AttributTable 
                datas={datas}
                linkView="/editBank"
                linkCreate="/createBank"
            />
        </div>
    )
}

export default Bank