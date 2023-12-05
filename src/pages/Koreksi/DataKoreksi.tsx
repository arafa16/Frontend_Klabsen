import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getKoreksisByUser } from '../../stores/features/koresisSlice';
import KoreksiTable from '../../components/Table/KoreksiTable';
import KoreksiTableUser from '../../components/Table/KoreksiTableUser';

const DataKoreksi = () => {
    const [datas, setDatas] = useState<any>([]);
    const [id, setId] = useState('');
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);

    const dispatch = useDispatch();

    const {meData, isMeDataSuccess} = useSelector(
        (state : any)=>state.meReducer
    )

    const {koreksis, isKoreksisSuccess} = useSelector(
        (state : any) => state.koreksisReducer
    );

    useEffect(()=>{
        if(meData && isMeDataSuccess){
            setId(meData.uuid);
        }
    },[meData, isMeDataSuccess]);

    useEffect(()=>{
        if(koreksis && isKoreksisSuccess){
            setDatas(koreksis);
            countData(koreksis.count);
        }
    },[koreksis, isKoreksisSuccess])

    useEffect(()=>{
        if(limit && page && id){
            dispatch(getKoreksisByUser({limit, page, id}));
        }
    },[limit, page, id]);

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
        <KoreksiTableUser 
            datas={datas}
            page={page}
            limit={limit}
            nextPage={nextPage}
            prevPage={prevPage}
            allPage={allPage}
            linkView={'/viewKoreksi'}
            linkCreate={'/'}
        />
    </div>
  )
}

export default DataKoreksi