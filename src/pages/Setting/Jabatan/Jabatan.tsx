import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getJabatansTable, resetJabatans} from '../../../stores/features/jabatansSlice';
import AttributTable from '../../../components/Table/AttributTable';

const Jabatan = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [allPage, setAllPage] = useState(0);
    const [page, setPage] = useState(1);

    const {jabatans, isJabatansSuccess} = useSelector(
        (state : any) => state.jabatansReducer
    )

    useEffect(()=>{
        dispatch(getJabatansTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isJabatansSuccess && jabatans){
            setDatas(jabatans);
            countData(jabatans.count);
            dispatch(resetJabatans());
        }
    },[jabatans, isJabatansSuccess])

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

    // navigator.geolocation.getCurrentPosition(function(position) {
    //     console.log("Latitude is :", position.coords.latitude);
    //     console.log("Longitude is :", position.coords.longitude);
    // });

    return (
        <div className='w-full'>
            <AttributTable 
                datas={datas}
                linkView="/editJabatan"
                linkCreate="/createJabatan"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
    )
}

export default Jabatan