import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import SlideOverDate from '../../components/SlideOver/SlideOverDate';
import Calendar from "../../components/Calendar";

import dayjs from 'dayjs';
import ButtonAbsen from '../../components/Button/ButtonAbsen';

import { getMe, resetMeData } from '../../stores/features/meSlice';
import { getInOutsByUser, createInOutsByAbsenWeb, resetInOuts } from '../../stores/features/inOutsSlice';
import { createKoreksis, resetKoreksis } from '../../stores/features/koresisSlice';

const Absen = () => {
    const dispatch = useDispatch();

    const [dataUser, setDataUser] = useState<any>([]);
    const [dataAbsen, setDataAbsen] = useState<any>([]);
    const [dataDate, setDataDate] = useState<any>([]);
    const [viewSlideOver, setViewSlideOver] = useState(false);
    const [subViewSlideOver, setSubViewSlideOver] = useState(0);
    const [dateSetting, setDateSetting] = useState(dayjs(Date.now()).format("YYYY-MM-DD"));

    useEffect(()=>{
        setDateSetting('2023-04-11');
    },[]);

    //koreksi
    const [keterangan, setKeterangan] = useState("");

    const {meData, isMeDataSuccess} = useSelector(
        (state: any) => state.meReducer
    );

    const {inOuts, messageInOuts, isInOutsSuccess} = useSelector(
        (state: any) => state.inOutsReducer
    );

    useEffect(()=>{
        if(meData && isMeDataSuccess){
            setDataUser(meData);
            console.log(meData, 'me')
        }
    },[meData, isMeDataSuccess])

    useEffect(()=>{
        if(inOuts && isInOutsSuccess){
            setDataAbsen(inOuts);
            dispatch(resetInOuts());
        }
    },[inOuts, isInOutsSuccess])

    useEffect(()=>{
        dispatch(getMe());
    },[]);

    useEffect(()=>{
        if(dataUser.uuid !== undefined){
            dispatch(getInOutsByUser({uuid:dataUser.uuid}));
        }
    },[dataUser]);

    const clickDate = async(info : any) => {
        // alert(info.event.id);
        // e.preventDefault();
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/${info.event.id}`);
        setDataDate(response.data);
        setViewSlideOver(true);
        setSubViewSlideOver(0);
    }

    //submit koreksi

    const {messageKoreksis, isKoreksisSuccess} = useSelector(
        (state : any) => state.koreksisReducer
    )
    
    useEffect(()=>{
        if(messageKoreksis && isKoreksisSuccess){
            dispatch(resetKoreksis());
            setViewSlideOver(false);
            setDataDate([]);
            setKeterangan("");
        }
    },[messageKoreksis, isKoreksisSuccess])

    const submitKoreksiUser = (e : any) => {
        e.preventDefault();
        dispatch(createKoreksis({
            userId : dataUser.uuid, 
            inOutId :  dataDate.uuid, 
            keterangan : keterangan, 
            codeStatusKoreksi : 1, 
            isActive : 1,
            codeStatusInout : 2,
        }));
    }

    //absen By Web

    useEffect(()=>{
        if(messageInOuts && isInOutsSuccess){
            if(dataUser.uuid !== undefined){
                dispatch(getInOutsByUser({uuid:dataUser.uuid}));
            }
            alert(messageInOuts.msg);
        }
    },[messageInOuts, isInOutsSuccess, dataUser])

    const clickAbsen = (codeTipeAbsen :any) => {
        const dateNow = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
        alert(codeTipeAbsen);
        dispatch(createInOutsByAbsenWeb({
            userId:dataUser.uuid,
            tanggalMulai:dateNow,
            tanggalSelesai:dateNow,
            //codeTipeAbsen menggunakan kode menin absen
            codeTipeAbsen:codeTipeAbsen
        }));
    }

    return (
        <>
            <SlideOverDate 
                viewSlideOver = {viewSlideOver}
                setViewSlideOver = {setViewSlideOver}
                dataDate = {dataDate}
                subViewSlideOver = {subViewSlideOver}
                setSubViewSlideOver = {setSubViewSlideOver}
                keterangan={keterangan}
                setKeterangan={setKeterangan}
                submitKoreksiUser={submitKoreksiUser}
            />
            <div className="grid grid-cols-12 gap-5 mt-5">
                <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
                    <div className="p-5 box">
                        <Calendar 
                            dataAbsen = {dataAbsen}
                            clickDate = {clickDate}
                            dateSetting={dateSetting}
                        />
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-4 2xl:col-span-9">
                    <div className="mb-4">
                        <ButtonAbsen 
                            name='Absen'
                            nameButton1='Masuk'
                            nameButton2='Pulang'
                            idButton1={0}
                            idButton2={1}
                            actionButton1={clickAbsen}
                            actionButton2={clickAbsen}
                            isView={dataUser.privilege && dataUser.privilege.absenModal}
                        />
                    </div>
                    <div className="mb-4">
                        <ButtonAbsen 
                            name='Absen Shift'
                            nameButton1='Masuk'
                            nameButton2='Pulang'
                            idButton1={4}
                            idButton2={5}
                            actionButton1={clickAbsen}
                            actionButton2={clickAbsen}
                            isView={dataUser.privilege && dataUser.privilege.shiftModal}
                        />
                    </div>
                    <div className="mb-4">
                        <ButtonAbsen 
                            name='Absen WFH'
                            nameButton1='Masuk'
                            nameButton2='Pulang'
                            idButton1={8}
                            idButton2={9}
                            actionButton1={clickAbsen}
                            actionButton2={clickAbsen}
                            isView={dataUser.privilege && dataUser.privilege.wfhModal}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Absen