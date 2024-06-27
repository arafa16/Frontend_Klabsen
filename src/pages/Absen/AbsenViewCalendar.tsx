import React, {useEffect, useState} from 'react'
import CalendarAdmin from '../../components/Calendar/calendarAdmin'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getInOutsById, getInOutsByUser, deleteInOuts, resetInOuts } from '../../stores/features/inOutsSlice';
import { getUserById, resetUsers } from '../../stores/features/usersSlice';
import { getPages, resetPages } from '../../stores/features/pageSlice';
import SlideOverEditDate from '../../components/SlideOver/SlideOverEditDate';
import SlideOverEditEvent from '../../components/SlideOver/SlideOverEditEvent';
import { getEvents, resetEvents } from '../../stores/features/eventsSlice';
import FormImportInOut from '../../components/Form/InOut/FormImportInOut';

const AbsenViewCalendar = () => {
  const { uuid } = useParams();
  const [dataAbsen, setDataAbsen] = useState([]);
  const [dataUser, setDataUser] = useState<any>([]);
  const [openFormByDate, setOpenFormByDate] = useState(false);
  const [openFormByEvent, setOpenFormByEvent] = useState(false);
  const [dataInfo, setDataInfo] = useState(null);
  const [dataEvent, setDataEvent] = useState(null);
  const [dataEventInternal, setDataEventInternal] = useState<any>([]);

  const dispatch = useDispatch();

  const {inOuts, inOutsById, messageInOuts, isInOutsSuccess, isDeleteInOutsSuccess} = useSelector(
    (state: any) => state.inOutsReducer
  );

  const {users, isUsersSuccess} = useSelector(
    (state : any) => state.usersReducer
  )

  useEffect(()=>{
    dispatch(getPages({pages : `Data Absen ( ${dataUser && dataUser.name} )`}))
  },[dataUser])

  useEffect(()=>{
    if(inOuts && isInOutsSuccess){
      setDataAbsen(inOuts);
      dispatch(resetInOuts());
    }
  },[inOuts, isInOutsSuccess]);

  useEffect(()=>{
    if(isUsersSuccess && users){
      setDataUser(users);
      dispatch(resetUsers());
    }
  },[users, isUsersSuccess])

  useEffect(()=>{
    dispatch(getInOutsByUser({uuid}));
    dispatch(getUserById({id:uuid}));
  },[uuid]);

  const reloadInOut = ()=>{
    dispatch(getInOutsByUser({uuid}));
    dispatch(getUserById({id:uuid}));
  }

  const clickDate = (info : any) => {
    setDataInfo(info);
    setOpenFormByDate(true);
  }

  useEffect(()=>{
    if(inOutsById && isInOutsSuccess){
      setDataEvent(inOutsById);
      setOpenFormByEvent(true);
      dispatch(resetInOuts());
    }
  },[inOutsById, isInOutsSuccess]);

  console.log(dataEvent, 'in out by id');

  const getDataEvent = (uuid : any) => {
    dispatch(getInOutsById({uuid}));
  };

  const clickEvent = (data : any) => {
    alert('click absen');
    getDataEvent(data.publicId);
  }

  useEffect(()=>{
    if(messageInOuts && isDeleteInOutsSuccess){
      setOpenFormByEvent(false);
      dispatch(resetInOuts());
      alert('delete success');
      dispatch(getInOutsByUser({uuid}));
    }
  },[messageInOuts, isDeleteInOutsSuccess, uuid])

  const clickDeleteEvent = (uuid : any) => {
    dispatch(deleteInOuts({uuid}))
  }

  //event
  const {events, isEventsSuccess} = useSelector(
    (state : any) => state.eventsReducer
  )

  useEffect(()=>{
      dispatch(getEvents());
  },[]);

  useEffect(()=>{
      if(isEventsSuccess && events){
          // console.log(events, 'event');
          setDataEventInternal(events);
          dispatch(resetEvents());
      }
  },[events, isEventsSuccess])

  return (
    <>
      <SlideOverEditDate
        open={openFormByDate}
        setOpen={setOpenFormByDate}
        dataInfo={dataInfo}
        dataUser={dataUser}
        uuid={uuid}
      />
      <SlideOverEditEvent 
        open={openFormByEvent}
        setOpen={setOpenFormByEvent}
        dataInfo={dataEvent}
        // dataUser={dataUser}
        uuid={uuid}
        deleteEvent={clickDeleteEvent}
      />
      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="p-5 box">
            <CalendarAdmin 
              dataAbsen={dataAbsen}
              clickDate={clickDate}
              clickEvent={clickEvent}
              dataEventInternal = {dataEventInternal}
            />
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          
          <div className="p-2 box">
            <FormImportInOut 
              reloadInOut={reloadInOut}
            />
          </div>
        </div>
      </div>
    </>
    
  )
}

export default AbsenViewCalendar