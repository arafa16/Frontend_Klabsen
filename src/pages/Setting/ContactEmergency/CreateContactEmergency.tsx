import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetContacts, createContacts } from '../../../stores/features/contactsSlice';
const CreateContactEmergency = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {contacts, isContactsSuccess} = useSelector(
        (state : any) => state.contactsReducer
    )

    useEffect(()=>{
        if(isContactsSuccess && contacts){
            navigate('/contactEmergency');
            dispatch(resetContacts());
        }
    },[isContactsSuccess, contacts])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createContacts({
            uuid, name, code, isActive
        }));
    }

  return (
    <div>
        <FormCreate
            name={name}
            setName={setName}
            code={code}
            setCode={setCode}
            isActive={isActive}
            setIsActive={setIsActive}
            linkBack={'/contactEmergency'}
            createDataSetting={createDataSetting}
        />
    </div>
  )
}

export default CreateContactEmergency