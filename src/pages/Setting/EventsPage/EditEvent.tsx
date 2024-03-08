import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import FormEditEvent from '../../../components/Form/Attribute/FormEditEvent';
import { getEventsById, resetEvents, deleteEvents, updateEvents } from '../../../stores/features/eventsSlice';
import { getTipeEvents, resetTipeEvents } from '../../../stores/features/tipeEventSlice';
import dayjs from 'dayjs';

const EditEvent = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalSelesai, setTanggalSelesai] = useState('');
    const [tipeEventId, setTipeEventId] = useState('');
    const [dataTipeEvents, setDataTipeEvents] = useState([]);
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {events, isEventsSuccess, messageEvents} = useSelector(
        (state : any) => state.eventsReducer
    )

    const {tipeEvents, isTipeEventsSuccess} = useSelector(
        (state : any) => state.tipeEventsReducer
    )

    useEffect(()=>{
        dispatch(getEventsById({id}));
    },[]);

    useEffect(()=>{
        console.log(events, 'tipe event');
        if(isEventsSuccess && events){
            setName(events && events.name);
            setTanggalMulai(dayjs(events && events.tanggalMulai).format('YYYY-MM-DD HH:mm:ss') );
            setTanggalSelesai(dayjs(events && events.tanggalSelesai).format('YYYY-MM-DD HH:mm:ss'));
            setTipeEventId(events.tipe_event && events.tipe_event.uuid);
            setCode(events && events.code);
            setIsActive(events && events.isActive ? '1' : '0');
            dispatch(resetEvents());
        }
    },[events, isEventsSuccess]);

    useEffect(()=>{
        if(tipeEvents && isTipeEventsSuccess){
            setDataTipeEvents(tipeEvents);
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

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateEvents({
            id, name, tanggalMulai, tanggalSelesai, tipeEventId, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteEvents({
            id
        }));
    }

    return (
        <div>
            <FormEditEvent
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
                changeDataSetting={changeDataSetting}
                deleteDataSetting={deleteDataSetting}
            />
        </div>
    )
}

export default EditEvent