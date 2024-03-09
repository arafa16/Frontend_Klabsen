import React, { useEffect, useState } from 'react'
import { getMe, resetMeData } from '../../stores/features/meSlice';
import { getInOutsByUser, resetInOuts } from '../../stores/features/inOutsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from "../../components/Calendar";

import axios from 'axios';
import SlideOverDate from '../../components/SlideOver/SlideOverDate';

import { createKoreksis, resetKoreksis } from '../../stores/features/koresisSlice';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

const AbsenByDate = () => {
    const dispatch = useDispatch();
    const {date} = useParams();

    const [dataUser, setDataUser] = useState<any>([]);
    const [dataAbsen, setDataAbsen] = useState<any>([]);
    const [dataDate, setDataDate] = useState<any>([]);
    const [viewSlideOver, setViewSlideOver] = useState(false);
    const [subViewSlideOver, setSubViewSlideOver] = useState(0);
    const [dateSetting, setDateSetting] = useState(dayjs(date).format("YYYY-MM-DD"));

    useEffect(()=>{
        setDateSetting('2023-04-11');
    },[]);

    //koreksi
    const [keterangan, setKeterangan] = useState("");

    const {meData, isMeDataSuccess} = useSelector(
        (state: any) => state.meReducer
    );

    const {inOuts, isInOutsSuccess} = useSelector(
        (state: any) => state.inOutsReducer
    );

    useEffect(()=>{
        if(meData && isMeDataSuccess){
            setDataUser(meData);
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

    // useEffect(()=>{
    //     if(date === undefined){
    //         setDateSetting(dayjs(Date.now()).format("YYYY-MM-DD"));
    //     }
    //     else{
    //         setDateSetting(dayjs(date).format("YYYY-MM-DD"));
    //     }
    // },[date])

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
            // console.log('submit koreksi sukses');
        }
    },[messageKoreksis, isKoreksisSuccess])

    const submitKoreksiUser = (e : any) => {
        e.preventDefault();
        // console.log(dataDate.uuid, 'data absen');
        dispatch(createKoreksis({
            userId : dataUser.uuid, 
            inOutId :  dataDate.uuid, 
            keterangan : keterangan, 
            codeStatusKoreksi : 1, 
            isActive : 1,
            codeStatusInout : 2,
        }));
    }

    return (
        <>
            {/* <SlideOverDate 
                viewSlideOver = {viewSlideOver}
                setViewSlideOver = {setViewSlideOver}
                dataDate = {dataDate}
                subViewSlideOver = {subViewSlideOver}
                setSubViewSlideOver = {setSubViewSlideOver}
                keterangan={keterangan}
                setKeterangan={setKeterangan}
                submitKoreksiUser={submitKoreksiUser}
            /> */}
            
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
            </div>
        </>
    )
}

export default AbsenByDate