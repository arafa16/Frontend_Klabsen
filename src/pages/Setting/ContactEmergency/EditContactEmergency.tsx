import React, {useEffect, useState} from 'react'
import FormEdit from '../../../components/Form/Attribute/FormEdit'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getContactsById, resetContacts, updateContacts, deleteContacts } from '../../../stores/features/contactsSlice';

const EditContactEmergency = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {contacts, isContactsSuccess, messageContacts} = useSelector(
        (state : any) => state.contactsReducer
    )

    useEffect(()=>{
        dispatch(getContactsById({uuid}));
    },[]);

    useEffect(()=>{
        if(isContactsSuccess && contacts){
            setName(contacts && contacts.name);
            setCode(contacts && contacts.code);
            setIsActive(contacts && contacts.isActive ? '1' : '0');
            dispatch(resetContacts());
        }
    },[contacts, isContactsSuccess]);

    useEffect(()=>{
        if(isContactsSuccess && messageContacts){
            navigate('/contactEmergency');
            dispatch(resetContacts());
        }
    },[isContactsSuccess, messageContacts])

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updateContacts({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deleteContacts({
            uuid
        }));
    }




  return (
    <div>
        <FormEdit
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isActive={isActive}
            setIsActive={setIsActive}
            linkBack={'/contactEmergency'}
            changeDataSetting={changeDataSetting}
            deleteDataSetting={deleteDataSetting}
        />
    </div>
  )
}

export default EditContactEmergency