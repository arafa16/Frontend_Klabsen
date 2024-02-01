import React, { useEffect, useState } from 'react'
import PendapatanTable from '../../components/Table/Pendapatan/PendapatanTable'
import { getPendapatansTable } from '../../stores/features/pendapatansSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormUploadPendapatan from '../../components/Form/Pendapatan/FormUploadPendapatan'
import Button from '../../base-components/Button'

const AdminPendapatan = () => {
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [fromUpload, setFormUpload] = useState(false);

  const {pendapatans, isPendapatansSuccess} = useSelector(
    (state : any) => state.pendapatansReducer
  )

  useEffect(()=>{
    if(pendapatans && isPendapatansSuccess){
      setDatas(pendapatans);
      countData(pendapatans.count);
    }
  },[pendapatans, isPendapatansSuccess]);

  useEffect(()=>{
    getPendapatans();
  },[limit, page]);

  const getPendapatans = () => {
    dispatch(getPendapatansTable({limit, page}));
  }

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
      <div className='grid grid-cols-12 grid-rows-2 mt-5'>
        <div className='col-start-1 col-span-6 row-span-2'>
          <FormUploadPendapatan 
            getPendapatans={getPendapatans}
            fromUpload={fromUpload}
          />
        </div>
        <div className='col-start-12 col-span-1 row-start-2'>
          <Button
            variant="primary"
            size='sm'
            className='w-full'
            onClick={()=>setFormUpload(!fromUpload)}
          >Upload Slip</Button>
        </div>
      </div>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <PendapatanTable 
            datas={datas} 
            page={page}
            limit={limit}
            nextPage={nextPage}
            prevPage={prevPage}
            allPage={allPage}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminPendapatan