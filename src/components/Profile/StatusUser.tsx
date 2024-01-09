import React from 'react'
import Lucide from '../../base-components/Lucide'

const StatusUser = (props : any) => {
    const {datas, title, changeEditStatus, viewEditStatus} = props;

    return (
        <div className={`p-5 box intro-y ${viewEditStatus ? 'hidden' : ''}`}>
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium truncate">{title}</div>
                <Lucide 
                    icon="Edit" 
                    className="w-4 h-4 ml-auto z-30 text-blue-500 cursor-pointer hover:text-yellow-500" 
                    onClick={()=>changeEditStatus(true)}
                    />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10'>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        Status
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                        {datas.status && datas.status.name}
                    </div>
                </div>
                <div>
                    <div className="font-medium whitespace-nowrap">
                        Is Active 
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                        {datas && datas.isActive ? 'Yes' : 'No'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatusUser