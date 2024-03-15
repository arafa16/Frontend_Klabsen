import React, { useState } from 'react'
import FormSortingPeriodeGroup from '../../components/Form/PerhitunganAbsen/FormSortingPeriodeGroup'
import { FormSelect } from '../../base-components/Form'
const PerhitunganAbsen = () => {
    const [dataPerhitungan, setDataPerhitungan] = useState([]);
    const [viewFormSortingPeriodeGroup, setViewFormSortingPeriodeGroup] = useState(false);

    const clickPeriodeGroup = (data:any) => {
        if(data === 'periode&group'){
            setViewFormSortingPeriodeGroup(data);
        }
        if(data === ''){
            setViewFormSortingPeriodeGroup(false);
        }
    }
    return (
        <div>
            <div className='w-full grid grid-cols-2 mt-6 '>
                <div>
                    <FormSortingPeriodeGroup 
                        isView={viewFormSortingPeriodeGroup}
                        setIsView={setViewFormSortingPeriodeGroup}
                    />
                </div>
                <div className='flex justify-end'>
                    <div>
                        <FormSelect
                            className="w-40 mt-3 md:ml-auto md:mt-0 dark:bg-darkmode-600 dark:border-darkmode-400"
                            aria-label="General report filter"
                            onChange={(e:any)=>clickPeriodeGroup(e.target.value)}
                            >
                            <option></option>
                            <option value={'periode&group'}>Periode & Group</option>
                        </FormSelect>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-between mt-6'>
                
            </div>
        </div>
    )
}

export default PerhitunganAbsen