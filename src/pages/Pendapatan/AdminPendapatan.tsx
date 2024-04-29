import React, { useEffect, useState, useRef } from 'react'
import PendapatanTable from '../../components/Table/Pendapatan/PendapatanTable'
import { getPendapatansTable } from '../../stores/features/pendapatansSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormUploadPendapatan from '../../components/Form/Pendapatan/FormUploadPendapatan'
import Button from '../../base-components/Button'
import Notification from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";
import { FormInput, FormLabel } from '../../base-components/Form'
import { useNavigate } from 'react-router-dom'

const AdminPendapatan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [allPage, setAllPage] = useState(0);
  const [fromUpload, setFormUpload] = useState(false);
  const [msg, setMsg] = useState('');

  const NotificationRegister = useRef<NotificationElement>();

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
  },[limit, page, search]);

  const getPendapatans = () => {
    dispatch(getPendapatansTable({limit, page, search}));
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

const viewSlip = (data : any) => {
  if(data && data.tipe_pendapatan.code === '1'){
    navigate('/viewSlip/'+data.uuid);
  }
  else{
    navigate('/viewSlipBonus/'+data.uuid);
  }
}

  return (
    <div className='w-full'>
      <Notification
        getRef={(el) => {
          NotificationRegister.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium normal-case">
          {msg}
        </div>
      </Notification>
      <div className='grid grid-cols-12 grid-rows-2 mt-5'>
        <div className='col-start-1 col-span-6 row-span-2'>
          <FormUploadPendapatan 
            getPendapatans={getPendapatans}
            fromUpload={fromUpload}
            NotificationRegister={NotificationRegister}
            setMsg={setMsg}
            setFormUpload={setFormUpload}
          />
        </div>
        <div className='col-start-9 col-span-4 row-start-2 flex gap-4'>
          <FormInput
              formInputSize="sm"
              id="search"
              type="text"
              name='search'
              placeholder='search by name or nik'
              className='w-full'
              value={search}
              onChange={(e : any)=>setSearch(e.target.value)}
          />
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
            link={'/viewSlip/'}
            viewSlip={viewSlip}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminPendapatan