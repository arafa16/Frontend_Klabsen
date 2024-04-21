import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MesinAbsensTable from '../../../components/Table/MesinAbsensTable';
import { getMesinAbsensTable, resetMesinAbsens } from '../../../stores/features/mesinAbsensSlice';

const MesinAbsen = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {mesinAbsensTable, isMesinAbsensSuccess} = useSelector(
        (state : any) => state.mesinAbsensReducer
    );

    useEffect(()=>{
        dispatch(getMesinAbsensTable({
          limit, page, status
        }))
    },[limit, page, status]);

    useEffect(()=>{
        if(mesinAbsensTable && isMesinAbsensSuccess){
          setDatas(mesinAbsensTable);
          countData(mesinAbsensTable.count);
          dispatch(resetMesinAbsens());
        }
      },[mesinAbsensTable, isMesinAbsensSuccess]);

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
        <>
            <div className='w-full'>
                <MesinAbsensTable
                    datas={datas}
                    linkView="/editMesinAbsen"
                    linkCreate="/createMesinAbsen"
                    nextPage={nextPage}
                    prevPage={prevPage}
                    page={page}
                    allPage={allPage}
                />
            </div>
        </>
    )
}

export default MesinAbsen