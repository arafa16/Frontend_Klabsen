import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getBanksTable, resetBanks } from '../../../stores/features/banksSlice';
import AttributTable from '../../../components/Table/AttributTable';

const Bank = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {banks, isBanksSuccess} = useSelector(
        (state : any) => state.banksReducer
    )

    useEffect(()=>{
        dispatch(getBanksTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isBanksSuccess && banks){
            setDatas(banks);
            countData(banks.count);
            dispatch(resetBanks());
        }
    },[banks, isBanksSuccess]);

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
        <div className='w-full'>
            <AttributTable 
                datas={datas}
                linkView="/editBank"
                linkCreate="/createBank"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default Bank