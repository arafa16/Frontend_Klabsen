import React, { useEffect, useRef, useState } from 'react'
import { Dialog } from '../../base-components/Headless';
import Button from '../../base-components/Button';
import {FormInput } from '../../base-components/Form';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword, resetUsers } from '../../stores/features/usersSlice';
import LoadingIcon from '../../base-components/LoadingIcon';

import Notification from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";

const ResetPassword = (props : any) => {
    const {modalPassword, setModalPassword, id} = props;
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const sendButtonRef = useRef(null);

    const dispatch = useDispatch();

    const NotificationResetPassword = useRef<NotificationElement>();

    const {isUsersSuccess, isUsersLoading, messageUsers, isUsersError} = useSelector(
        (state : any) => state.usersReducer
    )

    useEffect(()=>{
        if(isUsersSuccess && messageUsers){
            setMsg(messageUsers.msg)
            NotificationResetPassword.current?.showToast();
            dispatch(resetUsers());
            setPassword('');
        }
    },[isUsersSuccess, messageUsers]);

    useEffect(()=>{
        if(isUsersError && messageUsers){
            setMsg(messageUsers.msg)
            NotificationResetPassword.current?.showToast();
            dispatch(resetUsers());
            setPassword('');
        }
    },[isUsersError, messageUsers]);

    const resetPassword = (e : any) => {
        e.preventDefault();
        dispatch(changePassword({
            password, id
        }));
        setModalPassword(false);
    }

    return (
        <>
            <Notification
                getRef={(el) => {
                    NotificationResetPassword.current = el;
                }}
                options={{
                    duration: 3000,
                }}
                className="flex flex-col sm:flex-row text-red-500"
                >
                <div className="font-medium normal-case ">
                    {msg}
                </div>
            </Notification>
            {/* BEGIN: Modal Content */}
            <Dialog
                open={modalPassword}
                onClose={() => {
                    setModalPassword(false);
                }}
                initialFocus={sendButtonRef}
            >
                <form onSubmit={resetPassword}>
                    <Dialog.Panel>
                        <Dialog.Title>
                            <h2 className="mr-auto text-base font-medium">
                            Change Your Password
                            </h2>
                        </Dialog.Title>
                        <Dialog.Description className="grid grid-cols-12 gap-4 gap-y-3">
                            <div className="col-span-12 sm:col-span-12">
                            <FormInput
                                id="password"
                                type="text"
                                placeholder="new password"
                                name='password'
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                            />
                            </div>
                        </Dialog.Description>
                        <Dialog.Footer>
                            <div className='flex w-full items-center'>
                                <Button
                                    type="button"
                                    variant="outline-secondary"
                                    size='sm'
                                    onClick={() => {
                                        setModalPassword(false);
                                    }}
                                    className="w-20 mr-1"
                                    >
                                    Cancel
                                </Button>
                                {isUsersLoading 
                                    ? 
                                    <div className='w-4 h-4 mx-10'>
                                        <LoadingIcon icon="tail-spin" color='blue'/>
                                    </div>
                                    :
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        size='sm'
                                        className="w-32 sm:w-32"
                                        ref={sendButtonRef}
                                        >
                                        Change Now
                                    </Button>
                                }
                                
                                
                            </div>
                            
                        </Dialog.Footer>
                    </Dialog.Panel>
                </form>
                
            </Dialog>
            {/* END: Modal Content */}
        </>
    )
}

export default ResetPassword