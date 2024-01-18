import React from 'react'
import Lucide from '../../base-components/Lucide';
import { FormSelect } from '../../base-components/Form';
import Save from '../Button/Save';
const EditStatusUser = (props : any) => {
    const {title, viewEditStatus, changeEditStatus, isActive, setIsActive, statusId, setStatusId, dataStatus, datas, updateStatus} = props;
    
    return (
        <div className={`p-5 box intro-y ${!viewEditStatus ? 'hidden' : ''}`}>
            <div className="flex items-center pb-5 mb-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <div className="text-base font-medium truncate">{title}</div>
                <Lucide 
                    icon="Edit" 
                    className={`w-4 h-4 ml-auto text-blue-500 cursor-pointer hover:text-yellow-500 ${viewEditStatus ? 'hidden' : ''}`} 
                    onClick={()=>changeEditStatus(false)}
                    />
            </div>
            <form onSubmit={updateStatus}>
                <div className='grid grid-cols-2 md:grid-cols-2 gap-y-10 gap-x-4'>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Status
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='statusPerkawinanId'
                                value={statusId}
                                onChange={(e)=>setStatusId(e.target.value)}
                                >
                                <option></option>
                                {dataStatus.map((data :any, index : any)=>(
                                    <option key={index} value={data.id}>{data.name}</option>
                                ))}
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <div className="font-medium whitespace-nowrap">
                            Is Active 
                        </div>
                        <div className="mt-1 text-sm text-slate-500">
                            <FormSelect
                                formSelectSize="sm"
                                aria-label=".form-select-sm example"
                                name='statusPerkawinanId'
                                value={isActive}
                                onChange={(e)=>setIsActive(e.target.value)}
                                >
                                <option></option>
                                <option value={0}>no</option>
                                <option value={1}>yes</option>
                            </FormSelect>
                        </div>
                    </div>
                </div>
                <div>
                    <Save 
                        isLoading = {false}
                        active = {true}
                        clickBack = {()=>changeEditStatus(false)}
                    />
                </div>
            </form>
        </div>
    )
}

export default EditStatusUser