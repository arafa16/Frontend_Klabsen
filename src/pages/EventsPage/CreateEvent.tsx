import React, {useEffect, useState} from 'react'
import FormCreateEvent from '../../components/Form/Attribute/FormCreateEvent'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { createEvents, resetEvents } from '../../stores/features/eventsSlice';
import { getTipeEvents, resetTipeEvents } from '../../stores/features/tipeEventSlice';
import dayjs from 'dayjs';
const CreateEvent = () => {
    const [name, setName] = useState('');
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalSelesai, setTanggalSelesai] = useState('');
    const [tipeEventId, setTipeEventId] = useState('');
    const [dataTipeEvents, setDataTipeEvents] = useState([]);
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isEventsSuccess, messageEvents} = useSelector(
        (state : any) => state.eventsReducer
    )

    const {tipeEvents, isTipeEventsSuccess} = useSelector(
        (state : any) => state.tipeEventsReducer
    )

    useEffect(()=>{
        if(tipeEvents && isTipeEventsSuccess){
            setDataTipeEvents(tipeEvents);
            dispatch(resetTipeEvents());
        }
    },[tipeEvents, isTipeEventsSuccess])

    useEffect(()=>{
        dispatch(getTipeEvents());
    },[])

    useEffect(()=>{
        if(isEventsSuccess && messageEvents){
            navigate('/events');
            dispatch(resetEvents());
        }
    },[isEventsSuccess, messageEvents])

    const createEvent = (e : any) => {
        e.preventDefault();
        dispatch(createEvents({
            name, 
            bulan:dayjs(tanggalMulai).format('M'),
            tahun:dayjs(tanggalMulai).format('YYYY'),
            tanggalMulai, 
            tanggalSelesai, 
            tipeEventId, 
            code, 
            isActive
        }));
    }

    return (
        <div>
            <FormCreateEvent
                name={name}
                setName={setName}
                tanggalMulai={tanggalMulai}
                setTanggalMulai={setTanggalMulai}
                tanggalSelesai={tanggalSelesai}
                setTanggalSelesai={setTanggalSelesai}
                tipeEventId={tipeEventId}
                setTipeEventId={setTipeEventId}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                dataTipeEvents={dataTipeEvents}
                linkBack={'/events'}
                createEvent={createEvent}
            />
        </div>
    )
}

export default CreateEvent