import React, { useEffect, useState } from 'react'
import FormSortingPeriodeGroup from '../../components/Form/PerhitunganAbsen/FormSortingPeriodeGroup'
import { FormSelect } from '../../base-components/Form'
import { useDispatch, useSelector } from 'react-redux';
import { getPerhitunganByGroupPeriode, downloadPerhitunganByGroupPeriode } from '../../stores/features/perhitunganSlice';
import PerhitunganAbsenTable from '../../components/Table/PerhitunganAbsen/PerhitunganAbsenTable';
import axios from 'axios';
import fileDownload from "js-file-download";

const PerhitunganAbsen = () => {
    const [dataHasil, setDataHasil] = useState([]);
    const [viewFormSortingPeriodeGroup, setViewFormSortingPeriodeGroup] = useState(false);
    const [idGroup, setIdGroup] = useState('');
    const [idPeriode, setIdPeriode] = useState('');
    const [selectForm, setSelectForm] = useState('');

    const dispatch = useDispatch();

    const clickPeriodeGroup = () => {
        if(selectForm === 'periode&group'){
            setViewFormSortingPeriodeGroup(true);
        }
        if(selectForm === ''){
            setViewFormSortingPeriodeGroup(false);
        }
    }

    useEffect(()=>{
        clickPeriodeGroup()
    },[selectForm])

    const {dataPerhitungan, isPerhitunganError, isPerhitunganSuccess, messagePerhitungan} = useSelector(
        (state : any) => state.perhitunganReducer
    )

    useEffect(()=>{
        if(dataPerhitungan && isPerhitunganSuccess){
            console.log(dataPerhitungan);
            setDataHasil(dataPerhitungan);
        }
    },[dataPerhitungan, isPerhitunganSuccess])

    console.log(dataHasil, 'data hasil');

    const submitGroupPeriode = (e:any)=>{
        e.preventDefault();
        dispatch(getPerhitunganByGroupPeriode({idGroup, idPeriode}))
    }

    const downloadFile = async(data:any) => {
        dispatch(downloadPerhitunganByGroupPeriode({
            idGroup:idGroup,
            idPeriode:idPeriode,
            name:data.name
        }))
    }

    const clickClose = () => {
        setViewFormSortingPeriodeGroup(false);
        setDataHasil([]);
        setIdGroup('');
        setIdPeriode('');
        setSelectForm('');
    }

    return (
        <div>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 mt-6 '>
                <div className='flex justify-start'>
                    <div>
                        <FormSelect
                            className="w-40 mt-3 md:ml-auto md:mt-0 dark:bg-darkmode-600 dark:border-darkmode-400"
                            aria-label="General report filter"
                            value={selectForm}
                            onChange={(e:any)=>setSelectForm(e.target.value)}
                            >
                            <option></option>
                            <option value={'periode&group'}>Periode & Group</option>
                        </FormSelect>
                    </div>
                </div>
                <div>
                    <FormSortingPeriodeGroup 
                        isView={viewFormSortingPeriodeGroup}
                        setIsView={setViewFormSortingPeriodeGroup}
                        idGroup={idGroup}
                        setIdGroup={setIdGroup}
                        idPeriode={idPeriode}
                        setIdPeriode={setIdPeriode}
                        submitGroupPeriode={submitGroupPeriode}
                        downloadFile={downloadFile}
                        clickClose={clickClose}
                    />
                </div>
            </div>
            <div className={`${dataHasil.length === 0 ? 'hidden' : ''}`}>
                <PerhitunganAbsenTable 
                    datas={dataHasil}
                />
            </div>
        </div>
    )
}

export default PerhitunganAbsen