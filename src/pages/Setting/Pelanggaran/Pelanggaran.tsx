import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPelanggaransTable, resetPelanggarans } from '../../../stores/features/pelanggaransSlice';
import AttributTable from '../../../components/Table/AttributTable';

export const Pelanggaran = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [datas, setDatas] = useState([]);

  const {pelanggarans, isPelanggaransSuccess} = useSelector(
    (state : any) => state.pelanggaransReducer
  );

  useEffect(()=>{
    dispatch(getPelanggaransTable({
      limit, page
    }))
  },[limit, page]);

  useEffect(()=>{
    if(pelanggarans && isPelanggaransSuccess){
      setDatas(pelanggarans);
      countData(pelanggarans.count);
      dispatch(resetPelanggarans());
    }
  },[pelanggarans, isPelanggaransSuccess]);

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
          linkView="/editPelanggaran"
          linkCreate="/createPelanggaran"
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          allPage={allPage}
        />
      </div>
    </>
  )
}
