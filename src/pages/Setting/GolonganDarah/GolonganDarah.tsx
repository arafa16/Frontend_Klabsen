import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getGolonganDarahsTable, resetGolonganDarahs } from '../../../stores/features/golonganDarahSlice';
const GolonganDarah = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {golonganDarahs, isGolonganDarahsSuccess} = useSelector(
        (state : any) => state.golonganDarahsReducer
    )

    useEffect(()=>{
        dispatch(getGolonganDarahsTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isGolonganDarahsSuccess && golonganDarahs){
            setDatas(golonganDarahs);
            dispatch(resetGolonganDarahs());
        }
    },[golonganDarahs, isGolonganDarahsSuccess])

  return (
        <div>
            <AttributTable 
                datas={datas}
                linkView="/editGolonganDarah"
                linkCreate="/createGolonganDarah"
            />
        </div>
  )
}

export default GolonganDarah