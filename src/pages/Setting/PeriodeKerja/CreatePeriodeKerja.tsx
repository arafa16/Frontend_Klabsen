import React, {useEffect, useReducer, useState} from 'react';
import FormPeriodeKerja from '../../../components/Form/Attribute/FormPeriodeKerja'
import { createPeriodeKerjas, resetPeriodeKerjas } from '../../../stores/features/periodeKerjasSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CreatePeriodeKerja = () => {
    const [name, setName] = useState('');
    const [bulan, setBulan] = useState('');
    const [tahun, setTahun] = useState('');
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalSelesai, setTanggalSelesai] = useState('');
    const [jumlahHari, setJumlahHari] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {periodeKerjas, isPeriodeKerjasSuccess, isPeriodeKerjasError, messagePeriodeKerjas} = useSelector(
        (state : any) => state.periodeKerjasReducer
    )

    useEffect(()=>{
        if(messagePeriodeKerjas && isPeriodeKerjasSuccess){
            dispatch(resetPeriodeKerjas());
            alert('success');
            navigate('/periodeKerja');
        }
    },[messagePeriodeKerjas, isPeriodeKerjasSuccess])

    const submitPeriodeKerja = (e:any) => {
        e.preventDefault();
        dispatch(createPeriodeKerjas({
            name:name,
            bulan:bulan,
            tahun:tahun,
            tanggalMulai:tanggalMulai,
            tanggalSelesai:tanggalSelesai,
            jumlahHari:jumlahHari,
            code:code,
            isActive:isActive
        }));
    }

    return (
        <div>
            <FormPeriodeKerja
                name={name}
                setName={setName}
                bulan={bulan}
                setBulan={setBulan}
                tahun={tahun}
                setTahun={setTahun}
                tanggalMulai={tanggalMulai}
                setTanggalMulai={setTanggalMulai}
                tanggalSelesai={tanggalSelesai}
                setTanggalSelesai={setTanggalSelesai}
                jumlahHari={jumlahHari}
                setJumlahHari={setJumlahHari}
                code={code}
                setCode={setCode}
                isActive={isActive}
                setIsActive={setIsActive}
                linkBack='/periodeKerja'
                linkSubmit={submitPeriodeKerja}
            />
        </div>
    )
}

export default CreatePeriodeKerja