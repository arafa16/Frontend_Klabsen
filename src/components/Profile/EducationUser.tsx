import React from 'react'
import Button from '../../base-components/Button'
import Lucide from '../../base-components/Lucide'

const EducationUser = (props : any) => {
    const {users} = props;
  return (
    <div className="p-5 box intro-y">
        <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
            <div className="text-base font-medium truncate">Education</div>
            <Lucide icon="Edit" className="w-4 h-4 ml-auto text-slate-500" />
        </div>
        <div>
            <div className="flex pb-5 mb-5 border-b border-dashed border-slate-200 last:border-b-0 last:pb-0 last:mb-0">
            <div className="flex items-center justify-center w-16 h-16 text-base font-medium rounded-full bg-slate-200 dark:bg-darkmode-400">
                SU
            </div>
            <div className="ml-5">
                <div className="text-base font-medium uppercase">
                    {users && users.namaSekolah}
                </div>
                <div className="mt-1 text-slate-500 capitalize">
                {users && users.jurusanSekolah} 
                </div>
                <div className="mt-1">IPK/Nilai : {users && users.ipk} </div>
                <div className="mt-1">{users && users.tahunLulus}</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default EducationUser