import React, {useEffect, useState} from 'react'
import { FormLabel, FormInput, FormSelect } from '../../../base-components/Form'
import Button from '../../../base-components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getPeriodeKerjas, resetPeriodeKerjas } from '../../../stores/features/periodeKerjasSlice'
import { getGroups, resetGroups } from '../../../stores/features/groupsSlice'
import LoadingIcon from '../../../base-components/LoadingIcon'

const FormSortingPeriodeGroup = (props:any) => {
    const {
        idGroup, setIdGroup, 
        idPeriode, setIdPeriode,
        isView, setIsView,
        submitGroupPeriode,
        downloadFile,
        clickClose
    } = props;
    const [periodesData, setPeriodesData] = useState([]);
    const [groupsData, setGroupsData] = useState([]);

    const dispatch = useDispatch();

    //get periode select
    const {periodeKerjas, isPeriodeKerjasSuccess, isPeriodeKerjasError} = useSelector(
        (state : any) => state.periodeKerjasReducer
    )

    const {dataPerhitungan, isPerhitunganError, isPerhitunganSuccess, messagePerhitungan, isPerhitunganLoading, isPerhitunganLoading2} = useSelector(
        (state : any) => state.perhitunganReducer
    )

    useEffect(()=>{
        dispatch(getPeriodeKerjas())
    },[])

    useEffect(()=>{
        if(periodeKerjas && isPeriodeKerjasSuccess){
            setPeriodesData(periodeKerjas);
            dispatch(resetPeriodeKerjas());
        }
    },[periodeKerjas, isPeriodeKerjasSuccess])

    //get group select
    const {groups, isGroupsSuccess} = useSelector(
        (state : any) => state.groupsReducer
    )

    useEffect(()=>{
        dispatch(getGroups())
    },[]);

    useEffect(()=>{
        if(isGroupsSuccess && groups){
            setGroupsData(groups);
            dispatch(resetGroups());
        }
    },[groups, isGroupsSuccess])

    return (
        <div className={`box w-full p-4 ${isView ? '' : 'hidden'}`}>
            <form onSubmit={submitGroupPeriode}>
                <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="name">Periode</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='isSelect'
                            value={idPeriode}
                            onChange={(e)=>setIdPeriode(e.target.value)}
                            >
                            <option value=''></option>
                            {periodesData.map((data :any, index:any)=>(
                                <option key={index} value={data.uuid}>{data.name}</option>
                            ))}
                        </FormSelect>
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="name">Group</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='isSelect'
                            value={idGroup}
                            onChange={(e)=>setIdGroup(e.target.value)}
                            >
                            <option value=''></option>
                            {groupsData.map((data :any, index:any)=>(
                                <option key={index} value={data.uuid}>{data.name}</option>
                            ))}
                        </FormSelect>
                    </div>
                    <div className={`flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end`}>
                            <Button
                                variant="secondary" 
                                className="w-24"
                                size='sm'
                                type='button'
                                onClick={()=>clickClose()}
                                >
                                Close
                            </Button>
                            {isPerhitunganLoading ?   
                                <LoadingIcon icon="tail-spin" color='blue' className="w-4 h-4" /> 
                                : 
                                <Button
                                    variant="primary" 
                                    className={`w-36 ml-2`}
                                    size='sm'
                                    type='submit'
                                    >
                                    View Calculate
                                </Button>
                            }
                            {isPerhitunganLoading2 ?   
                                <LoadingIcon icon="tail-spin" color='blue' className="w-4 h-4" /> 
                                : 
                            <Button
                                variant="primary" 
                                className={`w-36 ml-2`}
                                size='sm'
                                type='button'
                                onClick={()=>downloadFile()}
                                >
                                Download Perhitungan
                            </Button>
                            }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormSortingPeriodeGroup