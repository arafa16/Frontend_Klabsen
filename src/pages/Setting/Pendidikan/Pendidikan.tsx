import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPendidikansTable, resetPendidikans } from '../../../stores/features/pendidikansSlice';
import AttributTable from '../../../components/Table/AttributTable';

export const Pendidikan = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [datas, setDatas] = useState([]);

  const {pendidikans, isPendidikansSuccess} = useSelector(
    (state : any) => state.pendidikansReducer
  );

  useEffect(()=>{
    dispatch(getPendidikansTable({
      limit, page
    }))
  },[limit, page]);

  useEffect(()=>{
    if(pendidikans && isPendidikansSuccess){
      setDatas(pendidikans);
      countData(pendidikans.count);
      dispatch(resetPendidikans());
    }
  },[pendidikans, isPendidikansSuccess]);

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
        <AttributTable
          datas={datas}
          linkView="/editPendidikan"
          linkCreate="/createPendidikan"
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          allPage={allPage}
        />
      </div>
    </>
  )
}
