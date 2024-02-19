import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getKoreksisTableByApprover, getKoreksisByApprover } from '../../stores/features/koresisSlice';
import KoreksiTable from '../../components/Table/KoreksiTable';
import KoreksiTableUser from '../../components/Table/KoreksiTableUser';
import GeneralReportKoreksi from '../../components/GeneralReport/GeneralReportKoreksi';
import { useParams } from 'react-router-dom';

const DataKoreksiByApprover = (props: any) => {
    
    const [datasTable, setDatasTable] = useState<any>([]);
    const [datas, setDatas] = useState<any>([]);
    const [id, setId] = useState('');
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [statusCode, setStatusCode] = useState(1);
    const [allPage, setAllPage] = useState(0);

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
            setDatasTable(koreksisTable);
            countData(koreksisTable.count);
        }
    },[koreksisTable, isKoreksisSuccess])

    useEffect(()=>{
        if(koreksis && isKoreksisSuccess){
            setDatas(koreksis);
            
        }
    },[koreksis, isKoreksisSuccess])

    useEffect(()=>{
        if(!id){
            console.log('id belum ada');
        }
        else{
            dispatch(getKoreksisByApprover({id}));
        }
    },[id])

    useEffect(()=>{
        console.log(id, 'id');
        if(!id){
            console.log('id belum ada');
        }
        else{
            dispatch(getKoreksisTableByApprover({limit, page, statusCode, id}));
        }
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
                <GeneralReportKoreksi 
                    datas={datas}
                    clickStatus={clickStatus}
                />
            </div>
            <div>
                <KoreksiTableUser 
                    datas={datasTable}
                    page={page}
                    limit={limit}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    allPage={allPage}
                    linkView={'/viewKoreksiToApprove'}
                    linkCreate={'/'}
                    statusCode={statusCode}
                />
            </div>
        </div>
    )
}

export default DataKoreksiByApprover