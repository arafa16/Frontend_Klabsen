import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getContactsTable, resetContacts } from '../../../stores/features/contactsSlice';
const ContactEmergency = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {contacts, isContactsSuccess} = useSelector(
        (state : any) => state.contactsReducer
    )

    useEffect(()=>{
        dispatch(getContactsTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isContactsSuccess && contacts){
            setDatas(contacts);
            dispatch(resetContacts());
        }
    },[contacts, isContactsSuccess])

    return (
        <div className='w-full'>
            <AttributTable 
                datas={datas}
                linkView="/editContactEmergency"
                linkCreate="/createContactEmergency"
            />
        </div>
    )
}

export default ContactEmergency