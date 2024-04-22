import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import StatusEmploye from "../../components/Indicator/StatusEmploye";
import FormDataDiriUpdate from '../../components/Form/User/FormDataDiriUpdate';
import FormPendidikan from "../../components/Form/User/FormPendidikan";
import FormDataPendukung from "../../components/Form/User/FormDataPendukung";
import FormDataKesehatan from "../../components/Form/User/FormDataKesehatan";
import FormDataOperasionalKantor from "../../components/Form/User/FormDataOperasionalKantor";
import NextRegister from '../../components/Button/NextRegister'

import { getGanders } from "../../stores/features/ganderSlice";
import { getStatusPerkawinans } from "../../stores/features/statusPerkawinansSlice";
import { getPendidikans } from "../../stores/features/pendidikansSlice";
import { getBanks } from "../../stores/features/banksSlice";
import { getContacts } from "../../stores/features/contactsSlice";
import { getGolonganDarahs } from "../../stores/features/golonganDarahSlice";
import { getPenempatans } from "../../stores/features/penempatansSlice";
import { getJabatans } from "../../stores/features/jabatansSlice";
import { getJamOperasionalGroups } from "../../stores/features/jamOperasionalGroupsSlice";
import { getGroups } from "../../stores/features/groupsSlice";
import { getAtasans } from "../../stores/features/atasansSlice";
import { getStatus } from "../../stores/features/statusSlice";
import { UpdateUser, resetUsers, getUserById } from "../../stores/features/usersSlice";

import FormKelengkapanData from "../../components/Form/User/FormKelengkapanData";
import Save from "../../components/Button/Save";

import NotificationMsg from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";


const UpdateEmploye = () => {
  const {id} = useParams();
  const [statusNumber, setStatusNumber] = useState(1);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //value data pribadi
  const [absenId, setAbsenId] = useState('');
  const [nik, setNik] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ganderId, setGanderId] = useState('');
  const [tempatLahir, setTempatLahir] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [statusPerkawinanId, setStatusPerkawinanId] = useState('');
  const [jumlahAnak, setJumlahAnak] = useState('');
  const [namaIbu, setNamaIbu] = useState('');

  //value pendidikan
  const [pendidikanId, setPendidikanId] = useState('');
  const [namaSekolah, setNamaSekolah] = useState('');
  const [jurusanSekolah, setJurusanSekolah] = useState('');
  const [tahunLulus, setTahunLulus] = useState('');
  const [ipk, setIpk] = useState('');

  //value data pendukung
  const [nomorHp, setNomorHp] = useState('');
  const [nomorKtp, setNomorKtp] = useState('');
  const [alamatKtp, setAlamatKtp] = useState('');
  const [alamatDomisili, setAlamatDomisili] = useState('');
  const [bankId, setBankId] = useState('');
  const [nomorRekening, setNomorRekening] = useState('');
  const [nomorNpwp, setNomorNpwp] = useState('');

  //value data kesehatan
  const [nomorBpjsKesehatan, setNomorBpjsKesehatan] = useState('');
  const [nomorBpjsKetenagakerjaan, setNomorBpjsKetenagakerjaan] = useState('');
  const [contactEmergencyId, setContactEmergencyId] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState('');
  const [emergencyAddress, setEmergencyAddress] = useState('');
  const [nomorSim, setNomorSim] = useState('');
  const [golonganDarahId, setGolonganDarahId] = useState('');

  //value data operasional
  const [penempatanId, setPenempatanId] = useState('');
  const [jabatanId, setJabatanId] = useState('');
  const [atasanId, setAtasanId] = useState();
  const [jamOperasionalGroupId, setJamOperasionalGroupId] = useState('');
  const [groupId, setGroupId] = useState('');
  const [extention, setExtention] = useState('');
  const [quote, setQuote] = useState('');

  //value kelengkapan data
  const [statusId, setStatusId] = useState('');
  const [isActive, setIsActive] = useState('');

  //data select
  const {ganders} = useSelector(
    (state : any) => state.ganderReducer
  );

  const {statusPerkawinans} = useSelector(
    (state : any) => state.statusPerkawinansReducer
  );

  const {pendidikans} =useSelector(
    (state : any) => state.pendidikansReducer
  );

  const {banks} = useSelector(
    (state : any) => state.banksReducer
  );

  const {contacts} = useSelector(
    (state : any) => state.contactsReducer
  );

  const {golonganDarahs} = useSelector(
    (state : any) => state.golonganDarahsReducer
  );

  const {penempatans} = useSelector(
    (state : any) => state.penempatansReducer 
  );

  const {jabatans} = useSelector(
    (state : any) => state.jabatansReducer
  );

  const {jamOperasionalGroups} = useSelector(
    (state : any) => state.jamOperasionalGroupsReducer
  );

  const {groups} = useSelector(
    (state: any) => state.groupsReducer
  )

  const {atasans} = useSelector(
    (state : any) => state.atasansReducer
  );

  const {status} = useSelector(
    (state : any) => state.statusReducer
  )

  useEffect(()=>{
    dispatch(getGanders());
    dispatch(getStatusPerkawinans());
    dispatch(getPendidikans());
    dispatch(getBanks());
    dispatch(getContacts());
    dispatch(getGolonganDarahs());
    dispatch(getPenempatans());
    dispatch(getJabatans());
    dispatch(getJamOperasionalGroups());
    dispatch(getGroups());
    dispatch(getAtasans());
    dispatch(getStatus());
  },[])

  //next or prev
  const clickPrevious = () => {
    if(statusNumber > 1){
      const response = statusNumber - 1;
      setStatusNumber(response);
    }
  }
  
  const clickNext = () => {
    if(statusNumber < 6){
      setStatusNumber(statusNumber + 1);
    }
  }

  const clickBack = () => {
    navigate(`/viewEmploye/${id}`);
  }
  
  const {users, isUsersSuccess, messageUsers} = useSelector(
    (state : any) => state.usersReducer
  )

  //get user by id

  useEffect(()=>{
    dispatch(getUserById({id}))
  },[])

  useEffect(()=>{
    if(isUsersSuccess && users){
      changeValue(users);
      console.log(users, 'view user');
      dispatch(resetUsers());
    }
  },[isUsersSuccess, users]);

  const changeValue = (data : any) => {

    //value data pribadi
    setAbsenId(data && data.absenId);
    setNik(data && data.nik);
    setName(data && data.name);
    setEmail(data && data.email);
    setGanderId(data && data.ganderId);
    setTempatLahir(data && data.tempatLahir);
    setTanggalLahir(data && data.tanggalLahir);
    setStatusPerkawinanId(`${data && data.statusPerkawinanId}`);
    setJumlahAnak(data && data.jumlahAnak);
    setNamaIbu(data && data.namaIbu);

    //value pendidikan
    setPendidikanId(data && data.pendidikanId);
    setNamaSekolah(data && data.pendidikanId);
    setJurusanSekolah(data && data.jurusanSekolah);
    setTahunLulus(data && data.tahunLulus);
    setIpk(data && data.ipk);

    //value data pendukung
    setNomorHp(data && data.nomorHp);
    setNomorKtp(data && data.nomorKtp);
    setAlamatKtp(data && data.alamatKtp);
    setAlamatDomisili(data && data.alamatDomisili);
    setBankId(data && data.bankId);
    setNomorRekening(data && data.nomorRekening);
    setNomorNpwp(data && data.nomorNpwp);

    //value data kesehatan
    setNomorBpjsKesehatan(data && data.nomorBpjsKesehatan);
    setNomorBpjsKetenagakerjaan(data && data.nomorBpjsKetenagakerjaan);
    setContactEmergencyId(data && data.contactEmergencyId);
    setEmergencyNumber(data && data.emergencyNumber);
    setEmergencyAddress(data && data.emergencyAddress);
    setNomorSim(data && data.nomorSim);
    setGolonganDarahId(data && data.golonganDarahId);

    //value data operasional
    setPenempatanId(data && data.penempatanId);
    setJabatanId(data && data.jabatanId);
    setAtasanId(data && data.atasanId);
    setJamOperasionalGroupId(data && data.jamOperasionalGroupId);
    setGroupId(data && data.groupId);
    setExtention(data && data.extention);
    setQuote(data && data.quote);

    //value kelengkapan data
    setStatusId(data && data.statusId);
    setIsActive(data && data.isActive ? '1' : '0');

    console.log(data && data.groupId, 'data && data.groupsId')
  }

  

  //update user

  useEffect(()=>{
    if(isUsersSuccess && messageUsers){
      setMsg(messageUsers.msg);
      if(msg !== ''){
        Notif.current?.showToast();
      }
      
      dispatch(resetUsers());
      navigate(`/viewEmploye/${id}`);
    }
  },[isUsersSuccess, messageUsers]);

  const infoError = () => {
    setMsg("Mohon lengkapi data anda terlebih dahulu.");
    Notif.current?.showToast();
  }

  const Notif = useRef<NotificationElement>();

  const submitUpdate = (e : any) => {
    e.preventDefault();
    if(
      (absenId 
      && nik 
      && name 
      && email
      && ganderId
      && tempatLahir
      && tanggalLahir
      && statusPerkawinanId
      && jumlahAnak
      && namaIbu
      && pendidikanId
      && namaSekolah
      && jurusanSekolah
      && tahunLulus
      && ipk
      && nomorHp
      && nomorKtp
      && alamatKtp
      && alamatDomisili
      && bankId
      && nomorRekening
      && nomorNpwp
      && nomorBpjsKesehatan
      && nomorBpjsKetenagakerjaan
      && contactEmergencyId
      && emergencyNumber
      && emergencyAddress
      && nomorSim
      && golonganDarahId
      && penempatanId
      && jabatanId
      && jamOperasionalGroupId
      && groupId
      && extention
      && quote
      && statusId
      && isActive)
       === (null || '')) return infoError();

    dispatch(UpdateUser({
      id,
      absenId, 
      nik, 
      name, 
      email,
      ganderId,
      tempatLahir,
      tanggalLahir,
      statusPerkawinanId,
      jumlahAnak,
      namaIbu,
      pendidikanId,
      namaSekolah,
      jurusanSekolah,
      tahunLulus,
      ipk,
      nomorHp,
      nomorKtp,
      alamatKtp,
      alamatDomisili,
      bankId,
      nomorRekening,
      nomorNpwp,
      nomorBpjsKesehatan,
      nomorBpjsKetenagakerjaan,
      contactEmergencyId,
      emergencyNumber,
      emergencyAddress,
      nomorSim,
      golonganDarahId,
      penempatanId,
      jabatanId,
      atasanId,
      jamOperasionalGroupId,
      groupId,
      extention,
      quote,
      statusId,
      isActive
      }));
  }

  navigator.geolocation.getCurrentPosition(function(position) {
    // console.log("Latitude is :", position.coords);
    // console.log("Longitude is :", position.coords.longitude);
  });

  return (
    <div className="w-full mt-5 box py-5">
      <NotificationMsg
        getRef={(el) => {
          Notif.current = el;
        }}
        options={{
          duration: 3000,
        }}
        className="flex flex-col sm:flex-row"
      >
        <div className="font-medium normal-case">
          haii
        </div>
      </NotificationMsg>
      <div className='my-10'>
        <StatusEmploye 
          statusNumber={statusNumber}
        />
      </div>
      <form onSubmit={submitUpdate}>
        <div>
          <Save
            clickBack={clickBack}
            active={true}
            isLoading=""
          />
        </div>
        <div className="px-5 pt-10 mt-2 border-t sm:px-10 border-slate-200/60 dark:border-darkmode-400">
          <FormDataDiriUpdate 
              statusNumber={statusNumber}
              absenId={absenId}
              setAbsenId={setAbsenId}
              nik={nik}
              setNik={setNik}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              ganderId={ganderId}
              setGanderId={setGanderId}
              tempatLahir={tempatLahir}
              setTempatLahir={setTempatLahir}
              tanggalLahir={tanggalLahir}
              setTanggalLahir={setTanggalLahir}
              statusPerkawinanId={statusPerkawinanId}
              setStatusPerkawinanId={setStatusPerkawinanId}
              jumlahAnak={jumlahAnak}
              setJumlahAnak={setJumlahAnak}
              namaIbu={namaIbu}
              setNamaIbu={setNamaIbu}
              //data select
              ganders={ganders}
              statusPerkawinans={statusPerkawinans}
          />
          <FormPendidikan 
            statusNumber={statusNumber}
            pendidikanId={pendidikanId}
            setPendidikanId={setPendidikanId}
            namaSekolah={namaSekolah}
            setNamaSekolah={setNamaSekolah}
            jurusanSekolah={jurusanSekolah}
            setJurusanSekolah={setJurusanSekolah}
            tahunLulus={tahunLulus}
            setTahunLulus={setTahunLulus}
            ipk={ipk}
            setIpk={setIpk}
            //data select
            pendidikans={pendidikans}
          />
          <FormDataPendukung
            statusNumber={statusNumber}
            nomorHp={nomorHp}
            setNomorHp={setNomorHp}
            nomorKtp={nomorKtp}
            setNomorKtp={setNomorKtp}
            alamatKtp={alamatKtp}
            setAlamatKtp={setAlamatKtp}
            alamatDomisili={alamatDomisili}
            setAlamatDomisili={setAlamatDomisili}
            bankId={bankId}
            setBankId={setBankId}
            nomorRekening={nomorRekening}
            setNomorRekening={setNomorRekening}
            nomorNpwp={nomorNpwp}
            setNomorNpwp={setNomorNpwp}
            //data select
            banks={banks}
          />
          <FormDataKesehatan
            statusNumber={statusNumber}
            nomorBpjsKesehatan={nomorBpjsKesehatan}
            setNomorBpjsKesehatan={setNomorBpjsKesehatan}
            nomorBpjsKetenagakerjaan={nomorBpjsKetenagakerjaan}
            setNomorBpjsKetenagakerjaan={setNomorBpjsKetenagakerjaan}
            contactEmergencyId={contactEmergencyId}
            setContactEmergencyId={setContactEmergencyId}
            emergencyNumber={emergencyNumber}
            setEmergencyNumber={setEmergencyNumber}
            emergencyAddress={emergencyAddress}
            setEmergencyAddress={setEmergencyAddress}
            nomorSim={nomorSim}
            setNomorSim={setNomorSim}
            golonganDarahId={golonganDarahId}
            setGolonganDarahId={setGolonganDarahId}
            //select data
            contacts={contacts}
            golonganDarahs={golonganDarahs}
          />
          <FormDataOperasionalKantor
            statusNumber={statusNumber}
            penempatanId={penempatanId}
            setPenempatanId={setPenempatanId}
            jabatanId={jabatanId}
            setJabatanId={setJabatanId}
            atasanId={atasanId}
            setAtasanId={setAtasanId}
            jamOperasionalGroupId={jamOperasionalGroupId}
            setJamOperasionalGroupId={setJamOperasionalGroupId}
            groupId={groupId}
            setGroupId={setGroupId}
            extention={extention}
            setExtention={setExtention}
            quote={quote}
            setQuote={setQuote}
            //select data
            penempatans={penempatans}
            jabatans={jabatans}
            jamOperasionalGroups={jamOperasionalGroups}
            groups={groups}
            atasans={atasans}
          />
          <FormKelengkapanData 
            status={status}
            statusNumber={statusNumber}
            statusId={statusId}
            setStatusId={setStatusId}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>
      </form>
      <NextRegister 
        clickNext={clickNext}
        clickPrevious={clickPrevious}
      />
    </div>
    
  )
}

export default UpdateEmploye