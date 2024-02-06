import React, { useEffect, useState, useRef } from 'react'
import PendapatanTable from '../../components/Table/Pendapatan/PendapatanTable'
import { getPendapatansTableById } from '../../stores/features/pendapatansSlice'
import { useDispatch, useSelector } from 'react-redux'
import FormUploadPendapatan from '../../components/Form/Pendapatan/FormUploadPendapatan'
import Button from '../../base-components/Button'
import Notification from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";
import { FormInput, FormLabel } from '../../base-components/Form';
import { getMe } from '../../stores/features/meSlice'

const Pendapatan = () => {
  const dispatch = useDispatch();
  const [id, setId] =useState<any>(null);
  const [type, setType] = useState<any>(1);
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

  const {meData, isMeDataSuccess} = useSelector(
      (state: any) => state.meReducer
  );

  useEffect(()=>{
    if(meData && isMeDataSuccess){
      console.log(meData, 'meData');
      setId(meData.uuid);
    }
  },[meData, isMeDataSuccess]);

  useEffect(()=>{
    getMe();
  },[]);

  useEffect(()=>{
    if(pendapatans && isPendapatansSuccess){
      setDatas(pendapatans);
      countData(pendapatans.count);
    }
  },[pendapatans, isPendapatansSuccess]);

  useEffect(()=>{
    getPendapatans();
  },[limit, page, id, type, search]);

  const getPendapatans = () => {
    dispatch(getPendapatansTableById({limit, page, id, type, search}));
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
    <div>
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
        <div className='col-start-9 col-span-4 row-start-2 flex gap-4'>
          <FormInput
              formInputSize="sm"
              id="search"
              type="text"
              name='search'
              placeholder='search by month'
              className='w-full'
              value={search}
              onChange={(e : any)=>setSearch(e.target.value)}
          />
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

export default Pendapatan