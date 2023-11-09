import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getJabatansTable, resetJabatans} from '../../../stores/features/jabatansSlice';
import AttributTable from '../../../components/Table/AttributTable';

const Jabatan = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {jabatans, isJabatansSuccess} = useSelector(
        (state : any) => state.jabatansReducer
    )

    useEffect(()=>{
        dispatch(getJabatansTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isJabatansSuccess && jabatans){
            setDatas(jabatans);
            dispatch(resetJabatans());
        }
    },[jabatans, isJabatansSuccess])

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
            />
        </div>
    )
}

export default Jabatan