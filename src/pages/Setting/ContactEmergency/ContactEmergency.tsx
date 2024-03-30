import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getContactsTable, resetContacts } from '../../../stores/features/contactsSlice';
const ContactEmergency = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {contacts, isContactsSuccess} = useSelector(
        (state : any) => state.contactsReducer
    )

    useEffect(()=>{
        dispatch(getContactsTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isContactsSuccess && contacts){
            setDatas(contacts);
            countData(contacts.count);
            dispatch(resetContacts());
        }
    },[contacts, isContactsSuccess]);

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
            <AttributTable 
                datas={datas}
                linkView="/editContactEmergency"
                linkCreate="/createContactEmergency"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default ContactEmergency