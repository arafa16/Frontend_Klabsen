import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getEventsTable, resetEvents } from '../../../stores/features/eventsSlice';
import EventsTable from '../../../components/Table/EventsTable';

const EventPage = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {events, isEventsSuccess} = useSelector(
        (state : any) => state.eventsReducer
    )

    useEffect(()=>{
        dispatch(getEventsTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isEventsSuccess && events){
            setDatas(events);
            dispatch(resetEvents());
        }
    },[events, isEventsSuccess])

    return (
        <div>
            <EventsTable
                datas={datas}
                linkView="/editEvent"
                linkCreate="/createEvent"
            />
        </div>
    )
}

export default EventPage