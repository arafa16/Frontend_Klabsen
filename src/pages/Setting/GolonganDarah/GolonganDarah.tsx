import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getGolonganDarahsTable, resetGolonganDarahs } from '../../../stores/features/golonganDarahSlice';

const GolonganDarah = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {golonganDarahs, isGolonganDarahsSuccess} = useSelector(
        (state : any) => state.golonganDarahsReducer
    )

    useEffect(()=>{
        dispatch(getGolonganDarahsTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isGolonganDarahsSuccess && golonganDarahs){
            setDatas(golonganDarahs);
            countData(golonganDarahs.count);
            dispatch(resetGolonganDarahs());
        }
    },[golonganDarahs, isGolonganDarahsSuccess]);

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
            <AttributTable 
                datas={datas}
                linkView="/editGolonganDarah"
                linkCreate="/createGolonganDarah"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
  )
}

export default GolonganDarah