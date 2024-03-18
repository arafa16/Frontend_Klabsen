import React from 'react'
import { FormInput, FormLabel, FormSelect } from "../../../base-components/Form";

const FormDataOperasionalKantor = (props : any) => {
    const {
        statusNumber,
        penempatanId, setPenempatanId,
        jabatanId, setJabatanId,
        atasanId, setAtasanId,
        jamOperasionalId, setJamOperasionalId,
        groupId, setGroupId,
        extention, setExtention,
        quote, setQuote,
        penempatans,
        jabatans,
        jamOperasionals,
        groups,
        atasans
    } = props;
    return (
        <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5 ${statusNumber !== 5 ? 'hidden' : ''}`}>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Penempatan *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='penempatanId'
                    value={penempatanId}
                    onChange={(e)=>setPenempatanId(e.target.value)}
                    >
                        <option></option>
                        {penempatans && penempatans.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Jabatan *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='jabatanId'
                    value={jabatanId}
                    onChange={(e)=>setJabatanId(e.target.value)}
                    >
                        <option></option>
                        {jabatans && jabatans.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Atasan</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='atasanId'
                    value={atasanId}
                    onChange={(e)=>setAtasanId(e.target.value)}
                    >
                        <option></option>
                        {atasans && atasans.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Jam Operasional *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='jamOperasionalId'
                    value={jamOperasionalId}
                    onChange={(e)=>setJamOperasionalId(e.target.value)}
                    >
                        <option></option>
                        {jamOperasionals && jamOperasionals.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Group *</FormLabel>
                <FormSelect
                    formSelectSize="sm"
                    aria-label=".form-select-sm example"
                    name='groupsId'
                    value={groupId}
                    onChange={(e)=>setGroupId(e.target.value)}
                    >
                        <option></option>
                        {groups && groups.map((data : any, index : any)=>(
                            <option key={index} value={data.id}>{data.name}</option>
                        ))}
                </FormSelect>
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Extention *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="extention"
                    type="text"
                    placeholder=""
                    name='extention'
                    value={extention}
                    onChange={(e)=>setExtention(e.target.value)}
                />
            </div>
            <div className="col-span-12 intro-y sm:col-span-4">
                <FormLabel htmlFor="input-wizard-1">Quote *</FormLabel>
                <FormInput
                    formInputSize="sm"
                    id="quote"
                    type="text"
                    placeholder=""
                    name='quote'
                    value={quote}
                    onChange={(e)=>setQuote(e.target.value)}
                />
            </div>
        </div>
    )
}

export default FormDataOperasionalKantor