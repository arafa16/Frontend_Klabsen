import React, {useEffect, useState} from 'react'
import PeriodeKerjaTable from '../../../components/Table/PeriodeKerjaTable'
import { getPeriodeKerjasTable, resetPeriodeKerjas } from '../../../stores/features/periodeKerjasSlice'
import { useDispatch, useSelector } from 'react-redux'

const PeriodeKerja = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

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
            countData(periodeKerjas.count);
            dispatch(resetPeriodeKerjas());
        }
    },[periodeKerjas, isPeriodeKerjasSuccess]);

    //table
    const countData = (allData : any) =>{
        const count = allData / limit;
        setAllPage(Math.ceil(count))
    }

    const nextPage = () => {
        if(page < allPage){
            const count = page + 1;
            setPage(count);
        }
    }

    const prevPage = () => {
        if(page > 1){
            const count = page - 1;
            setPage(count);
        }
    }

    return (
        <div>
            <PeriodeKerjaTable 
                datas={datas}
                linkView="/editPeriodeKerja"
                linkCreate="/createPeriodeKerja"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default PeriodeKerja