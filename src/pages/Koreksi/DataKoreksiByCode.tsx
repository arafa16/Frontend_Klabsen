import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getKoreksisTableByUser, getKoreksisByUser, resetKoreksis } from '../../stores/features/koresisSlice';
import KoreksiTable from '../../components/Table/KoreksiTable';
import KoreksiTableUser from '../../components/Table/KoreksiTableUser';
import GeneralReport from '../../components/GeneralReport/GeneralReportKoreksi';
import { useParams } from 'react-router-dom';

const DataKoreksiByCode = () => {
    const {code} = useParams();
    
    const [dataTables, setDataTables] = useState<any>([]);
    const [datas, setDatas] = useState<any>([]);
    const [id, setId] = useState('');
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [statusCode, setStatusCode] = useState(code);

    const dispatch = useDispatch();

    const {meData, isMeDataSuccess} = useSelector(
        (state : any)=>state.meReducer
    )

    const {koreksis, koreksisTable, isKoreksisSuccess} = useSelector(
        (state : any) => state.koreksisReducer
    );

    useEffect(()=>{
        if(meData && isMeDataSuccess){
            setId(meData.uuid);
        }
    },[meData, isMeDataSuccess]);

    useEffect(()=>{
        if(koreksisTable && isKoreksisSuccess){
            setDataTables(koreksisTable);
            countData(koreksisTable.count);
            dispatch(resetKoreksis())
        }
    },[koreksisTable, isKoreksisSuccess])

    useEffect(()=>{
        if(koreksis && isKoreksisSuccess){
            setDatas(koreksis);
            dispatch(resetKoreksis())
        }
    },[koreksis, isKoreksisSuccess])

    useEffect(()=>{
        dispatch(getKoreksisByUser({id}));
    },[id]);

    useEffect(()=>{
        dispatch(getKoreksisTableByUser({limit, page, id, statusCode}));
    },[limit, page, id, statusCode]);

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

    const clickStatus = (code : any) => {
        setStatusCode(code);
    }

  return (
    <div>
        <div>
            <GeneralReport 
                datas={datas}
                clickStatus={clickStatus}
            />
        </div>
        <div>
            <KoreksiTableUser 
                datas={dataTables}
                page={page}
                limit={limit}
                nextPage={nextPage}
                prevPage={prevPage}
                allPage={allPage}
                linkView={'/viewKoreksi'}
                linkCreate={'/'}
                statusCode={statusCode}
            />
        </div>
        
    </div>
  )
}

export default DataKoreksiByCode