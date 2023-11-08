import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPelanggaransTable, resetPelanggarans } from '../../../stores/features/PelanggaransSlice';
import AttributTable from '../../../components/Table/AttributTable';

export const Pelanggaran = () => {

  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([]);

  const {pelanggarans, isPelanggaransSuccess} = useSelector(
    (state : any) => state.pelanggaransReducer
  );

  useEffect(()=>{
    dispatch(getPelanggaransTable({
      limit, page
    }))
  },[]);

  useEffect(()=>{
    if(pelanggarans && isPelanggaransSuccess){
      setDatas(pelanggarans);
      dispatch(resetPelanggarans());
    }
  },[pelanggarans, isPelanggaransSuccess]);

  return (
    <>
      <div className='w-full'>
        <AttributTable
          datas={datas}
          linkView="/editPelanggaran"
          linkCreate="/createPelanggaran"
        />
      </div>
    </>
  )
}
