import React from 'react'
import Button from '../../base-components/Button'

const NextRegister = (props : any) => {
    const {clickNext, clickPrevious, clickBack} = props;

    return (
        <div className="flex items-center justify-center col-span-12 mt-10 mx-10 intro-y sm:justify-end">
            <Button
                variant="secondary" 
                className="w-24"
                size='sm'
                onClick={()=>clickPrevious()}
                >
                Previous
            </Button>
            <Button 
                variant="secondary" 
                className="w-24 ml-2"
                size='sm'
                onClick={()=>clickNext()}
                >
                Next
            </Button>
        </div>
    )
}

export default NextRegister