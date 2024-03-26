
import ReportDonutChart1 from "../../components/ReportDonutChart1";
import { useState, useEffect } from "react";
import clsx from "clsx";
import _ from "lodash";
import Lucide from '../../base-components/Lucide'

import { getMe, resetMeData } from "../../stores/features/meSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPages } from '../../stores/features/pageSlice';
import UserProfile from "../../components/Dasboard/UserProfile";
import EventShow from "../../components/Dasboard/EventShow";
import dayjs from "dayjs";

import { getEvents, getEventsByMonth, resetEvents } from "../../stores/features/eventsSlice";
import AbsenReport from "../../components/Dasboard/AbsenReport";
import { getPeriodeKerjasTableStatus, resetPeriodeKerjas } from "../../stores/features/periodeKerjasSlice";


const DasboardUser = () => {
  const [dataUser, setDataUser] = useState<any>([]);
  const [dataEvents, setDataEvents] = useState<any>([]);
  const [bulan, setBulan] = useState(dayjs(Date.now()).format("M"));
  const [tahun, setTahun] = useState(dayjs(Date.now()).format("YYYY"));
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [dataPeriodeKerjas, setDataPeriodeKerjas] = useState<any>([]);
  const [limitProdeKerja, setLimitProdeKerja] = useState(4);
  const [pageProdeKerja, setPageProdeKerja] = useState(1);
  const [allPagePeriodeKerja, setAllPagePeriodeKerja] = useState(0);

  const dispatch = useDispatch();

  //get data user login
  const {meData, isMeDataError, isMeDataSuccess, messageMeData} = useSelector(
    (state : any) => state.meReducer
  );

  useEffect(()=>{
    dispatch(getPages({pages : `Dashboard : ${dataUser && dataUser.name}`}))
  },[dataUser])

  useEffect(()=>{
    if(isMeDataSuccess && meData){
      setDataUser(meData);
      // console.log(meData, 'me data');
      // dispatch(resetMeData());
    }
  },[isMeDataSuccess, meData]);

  useEffect(()=>{
    dispatch(getMe());
  },[]);

  // get data event

  const {events, isEventsSuccess} = useSelector(
    (state : any) => state.eventsReducer
  )

  useEffect(()=>{
      dispatch(getEventsByMonth({
        bulan:bulan,
        tahun:tahun,
        limit:limit,
        page:page,
      }));
  },[bulan, tahun, limit, page]);

  console.log(allPage, bulan, tahun);

  useEffect(()=>{
      if(isEventsSuccess && events){
        setDataEvents(events.rows);
        countData(events.count);
        dispatch(resetEvents());
      }
  },[events, isEventsSuccess])

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

  //get periode data

  const {periodeKerjas, isPeriodeKerjasSuccess, isPeriodeKerjasError} = useSelector(
    (state : any) => state.periodeKerjasReducer
  )

  useEffect(()=>{
    dispatch(getPeriodeKerjasTableStatus({
        limit:limitProdeKerja, 
        page:pageProdeKerja,
        isActive:1
    }))
  },[limitProdeKerja, pageProdeKerja])

  useEffect(()=>{
      if(periodeKerjas && isPeriodeKerjasSuccess){
          setDataPeriodeKerjas(periodeKerjas);
          console.log()
          countDataPeriodeKerja(periodeKerjas.count)
          dispatch(resetPeriodeKerjas());
      }
  },[periodeKerjas, isPeriodeKerjasSuccess])

  console.log(dataPeriodeKerjas, 'periode kerjas');
  //table
  const countDataPeriodeKerja = (allData : any) =>{
    const count = allData / limitProdeKerja;
    setAllPagePeriodeKerja(Math.ceil(count))
  }

  const nextPagePeriodeKerja = () => {
    if(pageProdeKerja < allPagePeriodeKerja){
        const count = pageProdeKerja + 1;
        setPageProdeKerja(count);
    }
  }

  const prevPagePeriodeKerja = () => {
      if(pageProdeKerja > 1){
          const count = pageProdeKerja - 1;
          setPageProdeKerja(count);
      }
  }
  

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* <div className="col-span-12 2xl:col-span-9">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 mt-4 sm:col-span-6 lg:col-span-3 sm:row-start-4 md:row-start-3 lg:row-start-auto">
            <UserProfile 
              dataUser={dataUser}
            />
          </div>
          <div className="col-span-12 mt-4 sm:col-span-6 lg:col-span-9 sm:row-start-4 md:row-start-3 lg:row-start-auto">
            <EventShow 
              dataEvents={dataEvents}
              page={page}
              limit={limit}
              nextPage={nextPage}
              prevPage={prevPage}
              allPage={allPage}
            />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {dataPeriodeKerjas.rows && dataPeriodeKerjas.rows.map((dataPeriodeKerja:any, index:any)=>(
            <div key={index} className="col-span-12 mt-4 sm:col-span-6 lg:col-span-3 sm:row-start-4 md:row-start-3 lg:row-start-auto">
              <AbsenReport
                dataPeriodeKerja={dataPeriodeKerja}
                dataUser={dataUser}
              />
            </div>
          ))}
          <div className="col-span-12 flex flex-col-reverse px-5 py-4 border-b sm:flex-row text-slate-500 border-slate-200/60">
              <div className="flex items-center justify-end sm:ml-auto">
                  <div className="text-xs">{pageProdeKerja <= allPagePeriodeKerja ? pageProdeKerja : allPagePeriodeKerja} of {allPagePeriodeKerja} slide </div>
              <div
                  className="flex items-center justify-center w-5 h-5 ml-5"
              >
                  < Lucide 
                      icon="ChevronLeft" 
                      className="w-4 h-4 hover:cursor-pointer" 
                      onClick={()=>prevPagePeriodeKerja()}
                      />
              </div>
              <div
                  className="flex items-center justify-center w-5 h-5 ml-5"
              >
                  <Lucide 
                      icon="ChevronRight" 
                      className="w-4 h-4 hover:cursor-pointer"
                      onClick={()=>nextPagePeriodeKerja()}
                      />
              </div>
              </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default DasboardUser;
