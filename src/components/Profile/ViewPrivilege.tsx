import React, { useEffect, useState } from 'react'
import Lucide from '../../base-components/Lucide'
import { FormSelect } from '../../base-components/Form';

const ViewPrivilege = (props : any) => {
    const {title, changeEditPrivilege, datas, viewEditPriviege} = props;
    const [dataPrivilege, setDataPrivilege] = useState([]);
    const [dashboard, setDashboard] = useState(0);

    useEffect(()=>{
        if(datas.privilegeId !== 0){
            setDataPrivilege(datas && datas.privilege);
        }
    },[datas])

    console.log(datas.privilege, 'edit privilege');

    console.log(dataPrivilege, 'data privilege');
    return (
        <div className={`p-5 box intro-y ${viewEditPriviege ? 'hidden' : ''}`}>
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium truncate">{title}</div>
                <Lucide 
                    icon="Edit" 
                    className="w-4 h-4 ml-auto z-30 text-blue-500 cursor-pointer hover:text-yellow-500" 
                    onClick={()=>changeEditPrivilege(true)}
                    />
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-1 gap-y-10 ${dataPrivilege ? 'hidden' : ''}`}>
                <div>
                    <div className="font-medium whitespace-nowrap flex justify-center">
                        privilege belum di setting
                    </div>
                </div>
            </div>
            <div className={` ${!dataPrivilege ? 'hidden' : ''}`}>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Dashboard
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.dashboard ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Edit User Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.editUserSub ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Absen
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.absen ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Kalendar Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.kalendarSub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pengajuan Koreksi Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.pengajuanKendalaSub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Approval Koreksi Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.approvalKoreksiSub ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Absen Modal
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.absenModal ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Wfh Modal
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.wfhModal ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            ShiftModal
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.shiftModal ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Slip Gaji
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.slipGaji ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pendapatan Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.pendapatanSub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pendapatan Lain Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.pendapatanLainSub ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Admin	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.admin ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            User Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.userSub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Event Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.eventSub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Koreksi Admin Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.koreksiAdminSub ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Perhitungan Nilai Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.perhitunganNilaiSub ? 'Yes' : 'No'}
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
                        <div className="mt-1 text-sm text-slate-500">
                            {datas.privilege && datas.privilege.setting ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            isActive	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPrivilege