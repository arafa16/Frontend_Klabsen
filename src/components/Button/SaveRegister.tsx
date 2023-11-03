import React from 'react'
import Button from '../../base-components/Button'
import LoadingIcon from '../../base-components/LoadingIcon';

const SaveRegister = (props : any) => {
    const {clickBack, statusNumber, isAuthLoading} = props;
    return (
        <div className={`flex items-center justify-center col-span-12 mt-10 mx-10 intro-y sm:justify-end`}>
            <Button
                variant="secondary" 
                className="w-24"
                size='sm'
                type='button'
                onClick={()=>clickBack()}
                >
                Cancel
            </Button>
            {isAuthLoading ? 
                <LoadingIcon icon="tail-spin" color='blue' className="w-4 h-4" /> 
                : 
                <Button
                    variant="primary" 
                    className={`${statusNumber === 5 ? '' : 'hidden'} w-36 ml-2`}
                    size='sm'
                    type='submit'
                    >
                    Send Register
                </Button>
            }
        </div>
    )
}

export default SaveRegister