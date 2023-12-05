import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import Button from '../../base-components/Button';

const ViewKoreksiById = (props : any) => {
    const {datas, clickBack} = props;
    
    return (
        <div className="p-5 box intro-y mt-5">
            <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium truncate">
                    Pengajuan Koreksi
                </div>
                <Button
                    size='sm'
                    variant="primary"
                    onClick={()=>clickBack()}
                    >
                    Back
                </Button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10'>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        Tanggal Absen
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                        {dayjs(datas.in_out && datas.in_out.tanggalMulai).format('YYYY-MM-DD')}
                    </div>
                </div>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        Waktu/Jam
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                    {dayjs(datas.in_out && datas.in_out.tanggalMulai).format('HH:mm:ss')}
                    </div>
                </div>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        Keterangan
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                    {datas && datas.keterangan}
                    </div>
                </div>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        Status
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                    {datas.status_koreksi && datas.status_koreksi.name}
                    </div>
                </div>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        Approver
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                    {datas.user && datas.user.atasan[0].name}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewKoreksiById