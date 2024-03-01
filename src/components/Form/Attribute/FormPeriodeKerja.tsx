import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FormLabel, FormSelect, FormInput } from '../../../base-components/Form';
import Button from '../../../base-components/Button';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const FormPeriodeKerja = (props : any) => {

    const {
        name, setName,
        bulan, setBulan,
        tahun, setTahun,
        tanggalMulai, setTanggalMulai,
        tanggalSelesai, setTanggalSelesai,
        jumlahHari, setJumlahHari,
        code, setCode,
        isActive, setIsActive,
        linkBack,
        linkSubmit
    } = props;
    
    const navigate = useNavigate();

    useEffect(()=>{
        setBulan(dayjs(name).format('M'));
        setTahun(dayjs(name).format('YYYY'));
    },[name]);

    return (
        <div className="p-5 mt-5 box intro-y">
            <form onSubmit={linkSubmit}>
                <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="name">Name {bulan}-{tahun}</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="month"
                            name='name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="tanggalMulai">Tanggal Mulai</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="tanggalMulai"
                            type="datetime-local"
                            step='1'
                            name='tanggalMulai'
                            value={dayjs(tanggalMulai).format('YYYY-MM-DD HH:mm:ss')}
                            onChange={(e)=>setTanggalMulai(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="tanggalSelesai">Tanggal Selesai</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="tanggalSelesai"
                            type="datetime-local"
                            step='1'
                            name='tanggalSelesai'
                            value={dayjs(tanggalSelesai).format('YYYY-MM-DD HH:mm:ss')}
                            onChange={(e)=>setTanggalSelesai(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="jumlahHari">Jumlah Hari</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="jumlahHari"
                            type="number"
                            name='jumlahHari'
                            value={jumlahHari}
                            onChange={(e)=>setJumlahHari(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="code">Code</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="code"
                            type="text"
                            name='code'
                            value={code}
                            onChange={(e)=>setCode(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="isActive">Is Active ?</FormLabel>
                        <FormSelect
                            formSelectSize="sm"
                            aria-label=".form-select-sm example"
                            name='isActive'
                            value={isActive}
                            onChange={(e)=>setIsActive(e.target.value)}
                            >
                            <option></option>
                            <option value={`0`}>Non Active</option>
                            <option value={`1`}>Active</option>
                        </FormSelect>
                    </div>
                </div>
                <div className={`flex items-center justify-center col-span-12 mt-10 mx-10 intro-y sm:justify-end`}>
                    <Button
                        variant="danger" 
                        className="w-24"
                        size='sm'
                        type='button'
                        // onClick={()=>deleteDataSetting()}
                        >
                        Delete
                    </Button>
                    <Button
                        variant="secondary" 
                        className="w-24 ml-2"
                        size='sm'
                        type='button'
                        onClick={()=>navigate(linkBack)}
                        >
                        Cancel
                    </Button>
                    {/* {isAuthLoading ?   
                        <LoadingIcon icon="tail-spin" color='blue' className="w-4 h-4" /> 
                        :  */}
                        <Button
                            variant="primary" 
                            className={`w-36 ml-2`}
                            size='sm'
                            type='submit'
                            >
                            Save
                        </Button>
                    {/* } */}
                </div>
            </form>
        </div>
        
    )
}

export default FormPeriodeKerja