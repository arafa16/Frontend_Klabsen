import React, {useEffect, useState} from 'react'
import { FormLabel, FormInput, FormSelect } from '../../../base-components/Form'
import Button from '../../../base-components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getPeriodeKerjas, resetPeriodeKerjas } from '../../../stores/features/periodeKerjasSlice'
import { getGroups, resetGroups } from '../../../stores/features/groupsSlice'

const FormSortingPeriodeGroup = (props:any) => {
    const {setDataPerhitungan, isView, setIsView} = props;
    const [periodesData, setPeriodesData] = useState([]);
    const [groupsData, setGroupsData] = useState([]);

    const dispatch = useDispatch();

    //get periode select
    const {periodeKerjas, isPeriodeKerjasSuccess, isPeriodeKerjasError} = useSelector(
        (state : any) => state.periodeKerjasReducer
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
            <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="name">Periode</FormLabel>
                    <FormSelect
                        formSelectSize="sm"
                        aria-label=".form-select-sm example"
                        name='isSelect'
                        // value={isSelect}
                        // onChange={(e)=>setIsSelect(e.target.value)}
                        >
                        <option></option>
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
                        // value={isSelect}
                        // onChange={(e)=>setIsSelect(e.target.value)}
                        >
                        <option></option>
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
                            onClick={()=>setIsView(false)}
                            >
                            Close
                        </Button>
                        {/* {isAuthLoading ?   
                            <LoadingIcon icon="tail-spin" color='blue' className="w-4 h-4" /> 
                            :  */}
                            <Button
                                variant="primary" 
                                className={`w-36 ml-2`}
                                size='sm'
                                type='submit'
                                >
                                Calculate
                            </Button>
                        {/* } */}
                </div>
            </div>
        </div>
    )
}

export default FormSortingPeriodeGroup