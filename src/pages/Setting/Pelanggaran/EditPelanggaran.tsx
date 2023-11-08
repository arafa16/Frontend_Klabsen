import React, {useEffect, useState}  from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updatePelanggarans, deletePelanggarans, resetPelanggarans, getPelanggaransById } from '../../../stores/features/pelanggaransSlice';
import FormEdit from '../../../components/Form/Attribute/FormEdit';

const EditPelanggaran = () => {
    const {uuid} = useParams();
    const [name, setName] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {pelanggarans, isPelanggaransSuccess, isPelanggaransError, messagePelanggarans} = useSelector(
        (state : any) => state.pelanggaransReducer
    );

    useEffect(()=>{
        dispatch(getPelanggaransById({uuid}));
    },[]);

    useEffect(()=>{
        if(isPelanggaransSuccess && pelanggarans){
            setName(pelanggarans && pelanggarans.name);
            setCode(pelanggarans && pelanggarans.code);
            setIsActive(pelanggarans && pelanggarans.isActive ? '1' : '0');
            dispatch(resetPelanggarans());
        }
    },[pelanggarans, isPelanggaransSuccess]);

    useEffect(()=>{
        if(isPelanggaransSuccess && messagePelanggarans){
            navigate('/pelanggaran');
            dispatch(resetPelanggarans());
        }
    },[isPelanggaransSuccess, messagePelanggarans]);

    const changeDataSetting = (e : any) => {
        e.preventDefault();
        dispatch(updatePelanggarans({
            uuid, name, code, isActive
        }));
    }

    const deleteDataSetting = () => {
        dispatch(deletePelanggarans({
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
            linkBack={'/pelanggaran'}
            changeDataSetting={changeDataSetting}
            deleteDataSetting={deleteDataSetting}
        />
    </div>
  )
}

export default EditPelanggaran