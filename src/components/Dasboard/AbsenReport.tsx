import React, {useEffect, useState} from 'react'
import clsx from "clsx";
import DataAbsen from "./ReportData/DataAbsen";
import { getInOutsByIdAndMonth, resetInOuts } from '../../stores/features/inOutsSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const AbsenReport = (props:any) => {
    const {dataPeriodeKerja, dataUser} = props;
    const [dataInOut, setDataInOut] = useState<any>([]);

    const dispatch = useDispatch();

    // const {inOuts, messageInOuts, isInOutsSuccess} = useSelector(
    //     (state: any) => state.inOutsReducer
    // );

    // useEffect(()=>{
    //     if(inOuts && isInOutsSuccess){
    //         setDataInOut(inOuts);
    //         dispatch(resetInOuts());
    //     }
    // },[inOuts, isInOutsSuccess])

    // useEffect(()=>{
    //     dispatch(getInOutsByIdAndMonth({
    //             id:dataUser.uuid,
    //             tanggalMulai:dataPeriodeKerja.tanggalMulai,
    //             tanggalSelesai:dataPeriodeKerja.tanggalSelesai
    //         })
    //     );
    // },[dataUser, dataPeriodeKerja]);

    console.log(dataInOut, 'data');

    const getData = async() => {
        const response = await axios.get(import.meta.env.VITE_REACT_APP_API_URL+`/inOuts/idAndMonth/${dataUser.uuid}&${dataPeriodeKerja.tanggalMulai}&${dataPeriodeKerja.tanggalSelesai}`);
        // console.log(response.data, 'response');
        setDataInOut(response.data);
    } 

    useEffect(()=>{
        getData();
    },[dataPeriodeKerja]);

    console.log(dataInOut, 'data in out')

    const dataIn = dataInOut.filter((data: { tipeAbsenId: number; }) => data.tipeAbsenId === 1);
    const dataOut = dataInOut.filter((data: { tipeAbsenId: number; }) => data.tipeAbsenId === 2);
    const dataTidakAbsen = dataInOut.filter((data: { tipeAbsenId: number; }) => data.tipeAbsenId === 3);


    return (
        <div>
            {/* BEGIN: Seller Report */}
            <div className="col-span-12 mt-4 sm:col-span-6 md:col-span-4 lg:col-span-3 lg:mt-6">
                <div
                    className={clsx([
                    "mt-4 intro-y",
                    "before:content-[''] before:w-[90%] before:shadow-[0px_3px_5px_#0000000b] before:h-full before:bg-slate-50 before:border before:border-slate-200 before:mt-3 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60",
                    ])}
                >
                    <div className="p-5 box">
                    <div className="relative px-3">
                        <div className="w-40 mx-auto lg:w-auto">
                        <DataAbsen
                            className="relative z-10 mt-3"
                            height={190}
                            dataAbsen={dataPeriodeKerja.jumlahHari}
                            dataIn={dataIn.length}
                            dataOut={dataOut.length}
                            dataTidakAbsen={dataTidakAbsen.length}
                        />
                        </div>
                        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full">
                        <div className="text-xl font-medium leading-7">{dataPeriodeKerja.name}</div>
                        <div className="mt-1 text-slate-500">{dataPeriodeKerja.jumlahHari} Days</div>
                        </div>
                    </div>
                    <div className="mx-auto mt-8 w-52 lg:w-auto">
                        <div className="flex items-center">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-primary/50 border-primary/50"></div>
                            <span className="truncate">Jumlah Absen</span>
                            <span className="ml-auto">{dataInOut.length}</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-pending/50 border-pending/50"></div>
                            <span className="truncate">Data Masuk</span>
                            <span className="ml-auto">{dataIn.length}</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-warning/50 border-warning/60"></div>
                            <span className="truncate">Data Pulang</span>
                            <span className="ml-auto">{dataOut.length}</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-2 h-2 mr-3 border rounded-full bg-warning/50 border-warning/60"></div>
                            <span className="truncate">Data Tidak Absen</span>
                            <span className="ml-auto">{dataTidakAbsen.length}</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* END: Seller Report */}
        </div>
    )
}

export default AbsenReport