import React, { useEffect, useState } from 'react'
import Lucide from '../../base-components/Lucide'
import {FormSelect } from "../../base-components/Form";
import Button from '../../base-components/Button';

import { resetPrivileges, createPrivileges } from '../../stores/features/privilegesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CreatePrivilege = (props : any) => {
    const {title, changeEditPrivilege, datas, viewCreatePriviege} = props;
    const {id} = useParams();

    const [dataPrivilege, setDataPrivilege] = useState([]);
    const [dashboard, setDashboard] = useState(0);
    const [editUserSub, setEditUserSub] = useState(0);
    const [absen, setAbsen] = useState(0);
    const [kalendarSub, setKalendarSub] = useState(0);
    const [pengajuanKoreksiSub, setPengajuanKoreksiSub] = useState(0);
    const [approvalKoreksiSub, setApprovalKoreksiSub] = useState(0);
    const [absenModal, setAbsenModal] = useState(0);
    const [wfhModal, setWfhModal] = useState(0);
    const [shiftModal, setShiftModal] = useState(0);
    const [slipGaji, setSlipGaji] = useState(0);
    const [pendapatanSub, setPendapatanSub] = useState(0);
    const [pendapatanLainSub, setPendapatanLainSub] = useState(0);
    const [pendapatanAdminSub, setPendapatanAdminSub] = useState(0);
    const [admin, setAdmin] = useState(0);
    const [userSub, setUserSub] = useState(0);
    const [eventSub, setEventSub] = useState(0);
    const [koreksiAdminSub, setKoreksiAdminSub] = useState(0);
    const [perhitunganNilaiSub, setPerhitunganNilaiSub] = useState(0);
    const [etiket, setEtiket] = useState(0);
    const [pengajuanKendalaSub, setPengajuanKendalaSub] = useState(0);
    const [setting, setSetting] = useState(0);
    const [userId, setUserId] = useState(0);
    const [idPrivilege, setIdPrivilege] = useState(null);

    const dispatch = useDispatch();
    console.log(datas, 'idPrivilege');

    const {privileges, isPrivilegesError, isPrivilegesSuccess, messagePrivileges} = useSelector(
        (state : any) => state.privilegesReducer
    )

    useEffect(()=>{
        if(datas.privilegeId !== 0){
            setDashboard(datas.privilege && datas.privilege.dashboard ? 1 : 0);
            setEditUserSub(datas.privilege && datas.privilege.editUserSub ? 1 : 0);
            setAbsen(datas.privilege && datas.privilege.absen ? 1 : 0);
            setKalendarSub(datas.privilege && datas.privilege.kalendarSub ? 1 : 0);
            setPengajuanKoreksiSub(datas.privilege && datas.privilege.pengajuanKoreksiSub ? 1 : 0);
            setApprovalKoreksiSub(datas.privilege && datas.privilege.approvalKoreksiSub ? 1 : 0);
            setAbsenModal(datas.privilege && datas.privilege.absenModal ? 1 : 0);
            setWfhModal(datas.privilege && datas.privilege.wfhModal ? 1 : 0);
            setShiftModal(datas.privilege && datas.privilege.shiftModal ? 1 : 0);
            setSlipGaji(datas.privilege && datas.privilege.slipGaji ? 1 : 0);
            setPendapatanSub(datas.privilege && datas.privilege.pendapatanSub ? 1 : 0);
            setPendapatanLainSub(datas.privilege && datas.privilege.pendapatanLainSub ? 1 : 0);
            setPendapatanAdminSub(datas.privilege && datas.privilege.pendapatanAdminSub ? 1 : 0);
            setAdmin(datas.privilege && datas.privilege.admin ? 1 : 0);
            setUserSub(datas.privilege && datas.privilege.userSub ? 1 : 0);
            setEventSub(datas.privilege && datas.privilege.eventSub ? 1 : 0);
            setKoreksiAdminSub(datas.privilege && datas.privilege.koreksiAdminSub ? 1 : 0);
            setPerhitunganNilaiSub(datas.privilege && datas.privilege.perhitunganNilaiSub ? 1 : 0);
            setSetting(datas.privilege && datas.privilege.setting ? 1 : 0);
            setIdPrivilege(datas.privilege && datas.privilege.uuid);
        }
        setUserId(datas && datas.uuid);
    },[datas]);

    useEffect(()=>{
        if(isPrivilegesSuccess && messagePrivileges){
            alert('berhasil');
            dispatch(resetPrivileges());
            changeEditPrivilege(false);
        }
    },[isPrivilegesSuccess, messagePrivileges])

    const sumbitPrivilege = (e : any) => {
        e.preventDefault();
        try {
            dispatch(createPrivileges({
                userId,
                dashboard, 
                editUserSub, 
                absen, 
                kalendarSub, 
                pengajuanKoreksiSub, 
                approvalKoreksiSub,
                absenModal,
                wfhModal,
                shiftModal,
                slipGaji,
                pendapatanSub,
                pendapatanLainSub,
                pendapatanAdminSub,
                admin,
                userSub,
                eventSub,
                koreksiAdminSub,
                perhitunganNilaiSub,
                etiket,
                pengajuanKendalaSub,
                setting
            }));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={`p-5 box intro-y ${!viewCreatePriviege ? 'hidden' : ''}`}>
        <form onSubmit={sumbitPrivilege}>
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium truncate">{userId} {title} </div>
                <div className='flex gap-2 justify-end w-full'>
                    <Button 
                        type='button'
                        size='sm'
                        variant='secondary'
                        onClick={()=>changeEditPrivilege(false)}
                        >
                        Cancel
                    </Button>
                    <Button 
                        type='submit'
                        size='sm'
                        variant='primary'
                        >
                        Submit
                    </Button>
                </div>
            </div>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            dashboard
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='dashboard'
                                value={dashboard}
                                onChange={(e : any)=>setDashboard(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Edit User Sub 
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='editUserSub'
                                value={editUserSub}
                                onChange={(e : any)=>setEditUserSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Absen
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='absen'
                                value={absen}
                                onChange={(e : any)=>setAbsen(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Kalendar Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='kalendarSub'
                                value={kalendarSub}
                                onChange={(e : any)=>setKalendarSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pengajuan Koreksi Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='pengajuanKoreksiSub'
                                value={pengajuanKoreksiSub}
                                onChange={(e : any)=>setPengajuanKoreksiSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Approval Koreksi Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='approvalKoreksiSub'
                                value={approvalKoreksiSub}
                                onChange={(e : any)=>setApprovalKoreksiSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Absen Modal
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='absenModal'
                                value={absenModal}
                                onChange={(e : any)=>setAbsenModal(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Wfh Modal
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='wfhModal'
                                value={wfhModal}
                                onChange={(e : any)=>setWfhModal(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            ShiftModal
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='shiftModal'
                                value={shiftModal}
                                onChange={(e : any)=>setShiftModal(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Slip Gaji
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='slipGaji'
                                value={slipGaji}
                                onChange={(e : any)=>setSlipGaji(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pendapatan Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='pendapatanSub'
                                value={pendapatanSub}
                                onChange={(e : any)=>setPendapatanSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pendapatan Lain Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='pendapatanLainSub'
                                value={pendapatanLainSub}
                                onChange={(e : any)=>setPendapatanLainSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pendapatan Admin Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='pendapatanAdminSub'
                                value={pendapatanAdminSub}
                                onChange={(e : any)=>setPendapatanAdminSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Admin	
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='admin'
                                value={admin}
                                onChange={(e : any)=>setAdmin(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            User Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='userSub'
                                value={userSub}
                                onChange={(e : any)=>setUserSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Event Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='eventSub'
                                value={eventSub}
                                onChange={(e : any)=>setEventSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Koreksi Admin Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='koreksiAdminSub'
                                value={koreksiAdminSub}
                                onChange={(e : any)=>setKoreksiAdminSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Perhitungan Nilai Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='perhitunganNilaiSub'
                                value={perhitunganNilaiSub}
                                onChange={(e : any)=>setPerhitunganNilaiSub(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                {/* <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Etiket	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div> */}
                {/* <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pengajuan Kendala Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Perbaikan Kendala Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div> */}
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Setting	
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='setting'
                                value={setting}
                                onChange={(e : any)=>setSetting(e.target.value)}
                                >
                                <option value={0}>non active</option>
                                <option value={1}>active</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                {/* <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            isActive	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div> */}
            </div>
        </form>
        </div>
    )
}

export default CreatePrivilege