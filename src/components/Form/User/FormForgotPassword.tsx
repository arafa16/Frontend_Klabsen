import React from 'react'
import Button from "../../../base-components/Button";
import { FormInput, FormCheck } from "../../../base-components/Form";
import { useNavigate } from "react-router-dom";
import LoadingIcon from '../../../base-components/LoadingIcon';

const FormForgotPassword = (props : any) => {
    const {
        logoUrl, 
        logoUrlColor, 
        email, setEmail,
        isAuthLoading
    } = props;
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center w-full min-h-screen p-5 md:p-20">
            <div className="w-96 intro-y">
            <img
                className="w-24 mx-auto hidden md:block"
                alt="KOPKARLA"
                src={logoUrl}
            />
            <img
                className="w-16 mx-auto block md:hidden"
                alt="KOPKARLA"
                src={logoUrlColor}
            />
            <div className="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                <FormInput
                    type="email"
                    className="block px-4 py-3"
                    placeholder="Email"
                    name='email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <div className="flex justify-end mt-4 text-xs text-slate-500 sm:text-sm">
                <p onClick={()=>navigate('/login')} className='cursor-pointer hover:text-blue-500'>Back to login ?</p>
                </div>
                <div className="mt-5 text-center xl:mt-8 xl:text-left">                    
                    {isAuthLoading 
                        ? 
                        <div className='h-6'>
                            <LoadingIcon icon="tail-spin" color='blue' className="w-4 h-4" /> 
                        </div>
                        :
                        <Button 
                            variant="primary" 
                            className="w-full xl:mr-3"
                            type='submit'
                            >
                            Send Email
                        </Button>
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default FormForgotPassword