import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import FormPeriodeKerja from '../../../components/Form/Attribute/FormPeriodeKerja';
import { getPeriodeKerjasById, resetPeriodeKerjas, updatePeriodeKerjas } from '../../../stores/features/periodeKerjasSlice';

const EditPeriodeKerja = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [bulan, setBulan] = useState('');
    const [tahun, setTahun] = useState('');
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalSelesai, setTanggalSelesai] = useState('');
    const [jumlahHari, setJumlahHari] = useState('');
    const [code, setCode] = useState('');
    const [isActive, setIsActive] = useState('');

    const [datas, setDatas] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const {periodeKerjas, isPeriodeKerjasSuccess} = useSelector(
    //   (state:any)=>state.periodeKerjasReducer
    // )

    const {periodeKerjas, isPeriodeKerjasSuccess, isPeriodeKerjasError, messagePeriodeKerjas} = useSelector(
      (state : any) => state.periodeKerjasReducer
    )

    useEffect(()=>{
      if(periodeKerjas && isPeriodeKerjasSuccess){
        setDatas(periodeKerjas);
        setName(periodeKerjas && periodeKerjas.name);
        setBulan(periodeKerjas && periodeKerjas.bulan);
        setTahun(periodeKerjas && periodeKerjas.tahun);
        setTanggalMulai(periodeKerjas && periodeKerjas.tanggalMulai);
        setTanggalSelesai(periodeKerjas && periodeKerjas.tanggalSelesai);
        setJumlahHari(periodeKerjas && periodeKerjas.jumlahHari)
        setCode(periodeKerjas && periodeKerjas.code)
        setIsActive(periodeKerjas && periodeKerjas.isActive ? '1' : '0')
        dispatch(resetPeriodeKerjas());
      }
    },[periodeKerjas, isPeriodeKerjasSuccess])

    useEffect(()=>{
      dispatch(getPeriodeKerjasById({id}));
    },[id]);

    console.log(datas, 'datas');

    useEffect(()=>{
      if(messagePeriodeKerjas && isPeriodeKerjasSuccess){
        alert(messagePeriodeKerjas.msg);
        dispatch(resetPeriodeKerjas());
        navigate('/periodeKerja');
      }
    },[messagePeriodeKerjas, isPeriodeKerjasSuccess])

    const submitEditPeriodeKerja = (e:any) => {
      e.preventDefault();
      dispatch(updatePeriodeKerjas({
        id:id,
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
        linkSubmit={submitEditPeriodeKerja}
      />
    </div>
  )
}

export default EditPeriodeKerja