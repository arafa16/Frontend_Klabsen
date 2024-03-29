import React from 'react'
import Button from "../../../base-components/Button";
import { FormInput, FormCheck } from "../../../base-components/Form";
import { useNavigate } from "react-router-dom";
import LoadingIcon from '../../../base-components/LoadingIcon';

const FormLogin = (props : any) => {
    const {
        logoUrl, 
        logoUrlColor, 
        email, setEmail,
        password, setPassword,
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
                <FormInput
                    type="password"
                    className="block px-4 py-3 mt-4"
                    placeholder="Password"
                    name='password'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <div className="flex justify-end mt-4 text-xs text-slate-500 sm:text-sm">
                <p onClick={()=>navigate('/forgotPassword')} className='cursor-pointer hover:text-blue-500'>Forgot Password?</p>
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
                            Login
                        </Button>
                    }
                    
                    <Button 
                        type='button'
                        variant="outline-secondary" 
                        className="w-full mt-3"
                        onClick={()=>navigate('/register')}
                        >
                        Registration
                    </Button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FormLogin