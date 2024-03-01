import {
    PreviewComponent,
    Preview,
    Source,
    Highlight,
  } from "../../base-components/PreviewComponent";
import { Menu, Slideover } from "../../base-components/Headless";
import {
    FormLabel,
    FormInput,
    FormSelect,
    FormSwitch,
    FormTextarea,
} from "../../base-components/Form";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { useEffect, useState } from "react";
import { getPelanggarans, resetPelanggarans } from "../../stores/features/pelanggaransSlice";
import { getTipeAbsens, resetTipeAbsens } from "../../stores/features/tipeAbsenSlice";
import { getStatusInout, resetStatusInout } from "../../stores/features/statusInoutSlice";
import { getJamOperasionals, resetJamOperasionals } from '../../stores/features/jamOperasionalsSlice';
import { useDispatch, useSelector } from "react-redux";
import { createInOuts, getInOutsByUser, resetInOuts } from "../../stores/features/inOutsSlice";
import { createKoreksisByDate, resetKoreksis } from "../../stores/features/koresisSlice";

import dayjs from "dayjs";

const SlideOverDateKoreksiUser = (props : any) => {
    const {open, setOpen, dataInfo, dataUser} = props;

    const [dataPelanggaran, setDataPelanggaran] = useState([]);
    const [dataTipeAbsen, setDataTipeAbsen] = useState([]);
    const [dataStatusInOut, setDataStatusInOut] = useState([]);
    const [dataJamOperasional, setDataJamOperasional] = useState([]);

    //form
    const [time, setTime] = useState('');
    const [keterangan, setKeterangan] = useState('');
    const [pelanggaranId, setPelanggaranId] = useState('');
    const [tipeAbsenId, setTipeAbsenId] = useState('');
    const [statusInoutId, setStatusInOutId] = useState('');
    const [jamOperasionalId, setJamOperasionalId] = useState('');
    const [isAbsenWeb, setIsAbsenWeb] = useState(0);

    const dispatch = useDispatch(); 

    const {pelanggarans, isPelanggaransSuccess} = useSelector(
        (state : any) => state.pelanggaransReducer
    );

    const {tipeAbsens, isTipeAbsensSuccess} = useSelector(
        (state : any) => state.tipeAbsensReducer
    );

    const {statusInout, isStatusInoutSuccess} = useSelector(
        (state : any) => state.statusInoutReducer
    )

    const {jamOperasionals, isJamOperasionalsSuccess} = useSelector(
        (state : any) => state.jamOperasionalsReducer
    )

    const {inOuts, messageInOuts, isInOutsSuccess} = useSelector(
        (state: any) => state.inOutsReducer
    );

    const {messageKoreksis, isKoreksisSuccess} = useSelector(
        (state : any) => state.koreksisReducer
    )

    console.log(dataStatusInOut, 'data pelanggaran');

    useEffect(()=>{
        if(pelanggarans && isPelanggaransSuccess){
            setDataPelanggaran(pelanggarans);
            resetPelanggarans();
        }
    },[pelanggarans, isPelanggaransSuccess]);

    useEffect(()=>{
        if(tipeAbsens && isTipeAbsensSuccess){
            setDataTipeAbsen(tipeAbsens);
            resetTipeAbsens();
        }
    },[tipeAbsens, isTipeAbsensSuccess])

    useEffect(()=>{
        if(isStatusInoutSuccess && statusInout){
            setDataStatusInOut(statusInout);
            dispatch(resetStatusInout());
        }
    },[statusInout, isStatusInoutSuccess])

    useEffect(()=>{
        if(isJamOperasionalsSuccess && jamOperasionals){
            setDataJamOperasional(jamOperasionals);
            dispatch(resetJamOperasionals());
        }
    },[jamOperasionals, isJamOperasionalsSuccess]);


    useEffect(()=>{
        dispatch(getPelanggarans());
        dispatch(getTipeAbsens());
        dispatch(getStatusInout());
        dispatch(getJamOperasionals());
    },[])

    console.log(dataInfo && dataInfo.dateStr + ' ' + time);

    // useEffect(()=>{
    //     if(messageInOuts && isInOutsSuccess){
    //         // alert(messageInOuts.msg);
    //         setOpen(false);
    //         dispatch(resetInOuts());
    //         // dispatch(getInOutsByUser({uuid}));
    //     }
    // },[inOuts, isInOutsSuccess]);

    useEffect(()=>{
        const uuid = dataUser.uuid;
        if(messageKoreksis && isKoreksisSuccess){
            alert('input success');
            dispatch(resetKoreksis());
            dispatch(getInOutsByUser({uuid}));
            setOpen(false);
        }
    },[messageKoreksis, isKoreksisSuccess, dataUser])

    const submitForm = (e : any) => {
        e.preventDefault();
        const dateStart = dataInfo.dateStr+' '+time;
        const tanggalMulai = dayjs(dateStart).format('YYYY-MM-DD HH:mm:ss');
        
        // userId, tanggalMulai, tanggalSelesai, codeTipeAbsen, codePelanggaran,  codeStatusKoreksi, isActive, codeStatusInout
        dispatch(createKoreksisByDate({
            userId:dataUser.uuid,
            tanggalMulai:tanggalMulai,
            tanggalSelesai:tanggalMulai,
            tipeAbsenId:tipeAbsenId,
            codePelanggaran:2,
            codeStatusInout:2,
            codeStatusKoreksi:1,
            keterangan:keterangan,
            jamOperasionalId:jamOperasionalId,
            isAbsenWeb:1,
        }));

    }

    return (
        <>
            <div id="header-footer-slideover">
                {/* BEGIN: Slide Over Content */}
                <Slideover
                open={open}
                onClose={() => {
                    setOpen(false);
                }}
                >
                {/* BEGIN: Slide Over Header */}
                <Slideover.Panel>
                    <a
                    onClick={(event: React.MouseEvent) => {
                        event.preventDefault();
                        setOpen(false);
                    }}
                    className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                    href="#"
                    >
                    <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                    </a>
                    <Slideover.Title>
                    <h2 className="mr-auto text-base font-medium">
                        {dataUser && dataUser.name} | {dataInfo && dataInfo.dateStr}
                    </h2>
                    </Slideover.Title>
                    {/* END: Slide Over Header */}
                    <form onSubmit={submitForm}>
                        {/* BEGIN: Slide Over Body */}
                        <Slideover.Description>
                        <div className="mt-3">
                            <FormLabel htmlFor="modal-form-6">Tipe Absen</FormLabel>
                            <FormSelect 
                                id="tipe_absen"
                                onChange={(e : any)=>setTipeAbsenId(e.target.value)}
                                value={tipeAbsenId}
                                required
                                >
                                <option value={''}></option> 
                                {dataTipeAbsen.map((data : any, key)=>(
                                    <option key={key} value={data && data.uuid} className={`${(data && data.isSelect ? '' : 'hidden')}`}>{data && data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                        <div className="mt-3">
                            <FormLabel htmlFor="modal-form-1">Pukul</FormLabel>
                            <FormInput
                            id="modal-form-1"
                            type="time"
                            step="1"
                            required
                            value={time}
                            onChange={(e : any) => setTime(e.target.value)}
                            placeholder=""
                            />
                        </div>
                        <div className="mt-3">
                            <FormLabel htmlFor="modal-form-2">Jam Operasional</FormLabel>
                            <FormSelect 
                                id="jam_operasional"
                                onChange={(e : any)=>setJamOperasionalId(e.target.value)}
                                value={jamOperasionalId}
                                required
                                >
                            <option value={''}></option> 
                            {dataJamOperasional.map((data : any, key)=>(
                                <option key={key} value={data && data.uuid}>{data && data.name}</option>
                            ))}
                            </FormSelect>
                        </div>
                        <div className="mt-3">
                            <FormLabel htmlFor="keterangan">Keterangan</FormLabel>
                            <FormTextarea
                                id="keterangan"
                                required
                                value={keterangan}
                                onChange={(e : any) => setKeterangan(e.target.value)}
                                placeholder=""
                            />
                        </div>
                        </Slideover.Description>
                        {/* END: Slide Over Body */}
                        {/* BEGIN: Slide Over Footer */}
                        <Slideover.Footer>
                        <Button
                            variant="outline-secondary"
                            type="button"
                            onClick={() => {
                            setOpen(false);
                            }}
                            className="w-20 mr-1"
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="primary"
                            type="submit"
                            className="w-20"
                        >
                            Submit
                        </Button>
                        </Slideover.Footer>
                    </form>
                </Slideover.Panel>
                {/* END: Slide Over Footer */}
                </Slideover>
                {/* END: Slide Over Content */}
            </div>
        </>
    );
  }
  
  export default SlideOverDateKoreksiUser
  