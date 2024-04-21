import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FormLabel, FormSelect, FormInput } from '../../../base-components/Form';
import Button from '../../../base-components/Button';
import { useNavigate } from 'react-router-dom';

const FormEditMesinAbsen = (props : any) => {
    const {
        name, setName, 
        ipMesin, setIpMesin,
        code, setCode,  
        isActive, setIsActive, 
        linkBack,
        changeDataSetting,
        deleteDataSetting
    } = props;
    const navigate = useNavigate();

    return (
        <div className="p-5 mt-5 box intro-y">
            <form onSubmit={changeDataSetting}>
                <div className={`grid grid-cols-12 gap-4 mt-5 gap-y-5`}>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Name</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="name"
                            type="text"
                            name='name'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="ipMesin">IP Mesin</FormLabel>
                        <FormInput
                            formInputSize="sm"
                            id="ipMesin"
                            type="text"
                            name='ipMesin'
                            value={ipMesin}
                            onChange={(e)=>setIpMesin(e.target.value)}
                        />
                    </div>
                    <div className="col-span-12 intro-y sm:col-span-6">
                        <FormLabel htmlFor="input-wizard-1">Code</FormLabel>
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
                        <FormLabel htmlFor="input-wizard-1">Is Active ?</FormLabel>
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
                        onClick={()=>deleteDataSetting()}
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

export default FormEditMesinAbsen