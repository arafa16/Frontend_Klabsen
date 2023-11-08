import React, {useEffect, useState} from 'react'
import FormCreate from '../../../components/Form/Attribute/FormCreate'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { resetTipePendapatans, createTipePendapatans } from '../../../stores/features/tipePendapatanSlice';

const CreateTipePendapatan = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {isTipePendapatansSuccess, messageTipePendapatans} = useSelector(
        (state : any) => state.tipePendapatansReducer
    )

    useEffect(()=>{
        if(isTipePendapatansSuccess && messageTipePendapatans){
            navigate('/tipePendapatan');
            dispatch(resetTipePendapatans());
        }
    },[isTipePendapatansSuccess, messageTipePendapatans])

    const createDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(createTipePendapatans({
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
                linkBack={'/tipePendapatan'}
                createDataSetting={createDataSetting}
            />
        </div>
    )
}

export default CreateTipePendapatan