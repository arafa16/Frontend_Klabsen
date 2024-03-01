import React, {useEffect, useState} from 'react'
import PeriodeKerjaTable from '../../../components/Table/PeriodeKerjaTable'
import { getPeriodeKerjasTable, resetPeriodeKerjas } from '../../../stores/features/periodeKerjasSlice'
import { useDispatch, useSelector } from 'react-redux'

const PeriodeKerja = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {periodeKerjas, isPeriodeKerjasSuccess, isPeriodeKerjasError} = useSelector(
        (state : any) => state.periodeKerjasReducer
    )

    useEffect(()=>{
        dispatch(getPeriodeKerjasTable({
            limit, page
        }))
    },[limit, page])

    useEffect(()=>{
        if(periodeKerjas && isPeriodeKerjasSuccess){
            setDatas(periodeKerjas);
            dispatch(resetPeriodeKerjas());
        }
    },[periodeKerjas, isPeriodeKerjasSuccess])

    return (
        <div>
            <PeriodeKerjaTable 
                datas={datas}
                linkView="/editPeriodeKerja"
                linkCreate="/createPeriodeKerja"
            />
        </div>
    )
}

export default PeriodeKerja