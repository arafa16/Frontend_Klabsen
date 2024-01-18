import React, { useEffect, useState } from 'react'
import Lucide from '../../base-components/Lucide'
import {FormSelect } from "../../base-components/Form";

const EditViewPrivilege = (props : any) => {
    const {title, changeEditPrivilege, datas, viewEditPriviege} = props;
    const [dataPrivilege, setDataPrivilege] = useState([]);
    const [dashboard, setDashboard] = useState(0);

    useEffect(()=>{
        if(datas.privilegeId !== 0){
            setDashboard(datas && datas.dashboard);
        }
    },[datas]);

    return (
        <div className={`p-5 box intro-y ${!viewEditPriviege ? 'hidden' : ''}`}>
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium truncate">{title}</div>
                <Lucide 
                    icon="Edit" 
                    className="w-4 h-4 ml-auto z-30 text-blue-500 cursor-pointer hover:text-yellow-500" 
                    onClick={()=>changeEditPrivilege(false)}
                    />
            </div>
            <div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            dashboard {dashboard}
                        </div>
                        <div className="mt-1 text-sm text-slate-500 pr-6">
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='ganderId'
                            value={dashboard}
                            onChange={(e : any)=>setDashboard(e.target.value)}
                            >
                            <option></option>
                            <option value={0}>non active</option>
                            <option value={1}>active</option>
                        </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Edit User Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Absen
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Kalendar Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pengajuan Koreksi Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Approval Koreksi Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Absen Modal
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Wfh Modal
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            ShiftModal
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Slip Gaji
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pendapatan Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Pendapatan Lain Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Admin	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 mt-10 border-b border-slate-200/60'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            User Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Event Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Koreksi Admin Sub	
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Perhitungan Nilai Sub
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            {datas && datas.isActive ? 'Yes' : 'No'}
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
                            {datas && datas.isActive ? 'Yes' : 'No'}
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

export default EditViewPrivilege