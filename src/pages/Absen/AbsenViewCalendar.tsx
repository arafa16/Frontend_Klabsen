import React, {useEffect, useState} from 'react'
import CalendarAdmin from '../../components/Calendar/calendarAdmin'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getInOutsByUser } from '../../stores/features/inOutsSlice';

const AbsenViewCalendar = () => {
  const { uuid } = useParams();
  const [dataAbsen, setDataAbsen] = useState([]);

  const dispatch = useDispatch();
  const {inOuts, messageInOuts, isInOutsSuccess} = useSelector(
    (state: any) => state.inOutsReducer
  );

  useEffect(()=>{
    if(inOuts && isInOutsSuccess){
      setDataAbsen(inOuts);
    }
  },[inOuts, isInOutsSuccess]);

  useEffect(()=>{
    dispatch(getInOutsByUser({
      uuid:uuid
    }));
  },[uuid]);

  return (
    <div className="grid grid-cols-12 gap-5 mt-5">
      <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
        <div className="p-5 box">
          <CalendarAdmin 
            dataAbsen={dataAbsen}
          />
        </div>
      </div>
    </div>
  )
}

export default AbsenViewCalendar