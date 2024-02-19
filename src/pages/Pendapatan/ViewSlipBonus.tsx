import React, { useEffect, useState, useRef } from 'react'
import Lucide from "../../base-components/Lucide";
import Button from "../../base-components/Button";
import Table from "../../base-components/Table";
import Logo from '../../assets/images/logo_kopkarla_color.png';
import { useParams } from 'react-router-dom';
import { getPendapatansById, resetPendapatans } from '../../stores/features/pendapatansSlice';
import { useDispatch, useSelector } from 'react-redux';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import qrcode from 'qrcode';

const ViewSlipBonus = () => {
    const {id} = useParams();
    const [data, setData] = useState<any>([]);
    const [totalPendapatan, setTotalPendapatan] = useState(0);
    const [totalPengeluaran, setTotalPengeluaran] = useState(0);
    const [linkQr, setLinkQr] = useState('');

    const dispatch = useDispatch();
    const printRef = useRef<any>();

    const generateQR = async (text:any) => {
        try {
            setLinkQr(await qrcode.toDataURL(text))
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(()=>{
        
    },[]);

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    const {pendapatans, isPendapatansSuccess} = useSelector(
        (state : any) => state.pendapatansReducer
    )

    useEffect(()=>{
        if(pendapatans && isPendapatansSuccess){
            setData(pendapatans);
            const totalPengeluaran = Number(pendapatans.pph21);
            
            const totalPendapatan =  Number(pendapatans.thr) + Number(pendapatans.shu) + Number(pendapatans.bonus) + Number(pendapatans.incentive)
                                    +Number(pendapatans.kompensasi) + Number(pendapatans.pph21);
                                    
            setTotalPendapatan(totalPendapatan);
            setTotalPengeluaran(totalPengeluaran);
            generateQR(import.meta.env.VITE_REACT_APP_URL+'/viewSlip/'+pendapatans.uuid);
        }
    },[pendapatans, isPendapatansSuccess])

    console.log(data, 'data');

    useEffect(()=>{
        dispatch(getPendapatansById({id}))
    },[id]);

    const rupiah = (number : number)=>{
        return new Intl.NumberFormat("id-ID", {
          style: "decimal"
        }).format(number)+',00';
    }

    return (
        <>
        <div className="flex justify-end flex-col items-center mt-8 intro-y sm:flex-row">
            <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
            <Button variant="primary" className="mr-2 shadow-md" onClick={()=>handlePrint()}>
                <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print Invoice
            </Button>
            <Button className="!box">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
            </Button>
            </div>
        </div>
        <div className="mt-5 box">
            <div ref={printRef}>
                <div className="flex justify-between px-20 pt-20">
                    <div className="font-semibold text-primary">
                        <img src={Logo} className='w-16' />
                    </div>
                    <div className="grid grid-cols-1 gap-2 text-xs">
                        {/* <div className="text-xl font-medium text-primary">Februari 2024</div> */}
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            <div className=''>Nama</div>
                            <div>: {data.user && data.user.name}</div>
                        </div>
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            <div className=''>NIK</div>
                            <div>: {data.user && data.user.nik}</div>
                        </div>
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            <div className=''>Group</div>
                            <div>: {data.user && data.user.group.name}</div>
                        </div>
                        <div className="mt-1 grid grid-cols-2 gap-4">
                            <div className=''>Pendapatan</div>
                            <div>: {data && data.pendapatanAtas}</div>
                        </div>
                    </div>
                </div>
                <div className="px-5 py-10 sm:px-16 sm:py-5 text-xs">
                <div className="overflow-x-auto">
                    <Table>
                    <Table.Thead>
                        <Table.Tr>
                        <Table.Th 
                            colSpan={2}
                            className="border-b-2 dark:border-darkmode-400 whitespace-nowrap ">
                            PENDAPATAN
                        </Table.Th>
                        <Table.Th 
                            colSpan={2}
                            className="border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                            PENGELUARAN
                        </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            THR
                        </Table.Td>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.thr)}</div>
                            </div>
                        </Table.Td>
                        <Table.Td className=" border-b dark:border-darkmode-400 w-1/6">
                            PAJAK (PPH 21)
                        </Table.Td>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.pph21)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            SHU
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.shu)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Bonus
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.bonus)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Incentive
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.incentive)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            Uang Kompensasi (UPK)
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.kompensasi)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="border-b dark:border-darkmode-400 w-1/6">
                            PAJAK (PPH 21)
                        </Table.Td>
                        <Table.Td className="text-right border-b dark:border-darkmode-400 w-1/6">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(data && data.pph21)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                        <Table.Td className="!pt-6 border-transparent dark:!border-transparent font-medium w-1/4">
                            Total Pendapatan
                        </Table.Td>
                        <Table.Td className="!pt-6 border-transparent dark:!border-transparent text-right font-medium w-1/4">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(totalPendapatan)}</div> 
                            </div>
                        </Table.Td>
                        <Table.Td
                            className="!pt-6 border-transparent dark:!border-transparent font-medium w-1/4"
                        >
                            Total Pengeluaran
                        </Table.Td>
                        <Table.Td className="!pt-6 border-transparent dark:!border-transparent text-right font-medium w-1/4">
                            <div className='flex justify-between'>
                                <div>Rp.</div>
                                <div>{rupiah(totalPengeluaran)}</div>
                            </div>
                        </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td
                                colSpan={2}
                                className="border-transparent dark:!border-transparent font-medium w-1/4"
                            >
                                
                            </Table.Td>
                            <Table.Td
                                className="border-transparent dark:!border-transparent font-medium w-1/4"
                            >
                                Pendapatan Bersih
                            </Table.Td>
                            <Table.Td className="border-transparent dark:!border-transparent text-right font-medium w-1/4">
                                <div className='flex justify-between'>
                                    <div>Rp.</div>
                                    <div>{rupiah(data && data.total)}</div>
                                </div>
                            </Table.Td>
                        </Table.Tr>
                        <Table.Tr>
                            <Table.Td colSpan={4} className="border-transparent dark:!border-transparent text-right font-medium">
                                <div className='flex justify-end'>
                                    <img src={linkQr} className='w-24' />
                                </div>
                            </Table.Td>
                        </Table.Tr>
                    </Table.Tbody>
                    </Table>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ViewSlipBonus