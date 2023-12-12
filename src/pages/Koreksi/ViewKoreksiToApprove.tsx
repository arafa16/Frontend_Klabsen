import React, {useEffect, useState} from 'react'
import ViewKoreksiById from '../../components/Koreksi/ViewKoreksiById'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getKoreksisById, resetKoreksis, approverKoreksis } from '../../stores/features/koresisSlice';

const ViewKoreksiToApprove = () => {
    const {id} = useParams();
    const [datas, setDatas] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {koreksis, isKoreksisSuccess, messageKoreksis} = useSelector(
        (state : any) => state.koreksisReducer
    )

    useEffect(()=>{
        if(koreksis && isKoreksisSuccess){
            setDatas(koreksis);
            dispatch(resetKoreksis());
        }
    },[koreksis, isKoreksisSuccess])

    useEffect(()=>{
        if(messageKoreksis && isKoreksisSuccess){
            dispatch(getKoreksisById({id}));
        }
    },[messageKoreksis, isKoreksisSuccess])

    useEffect(()=>{
        dispatch(getKoreksisById({id}));
    },[]);

    const clickBack = () => {
        navigate(-1)
    }

    const clickApprove = (codeStatusKoreksi : any) => {
        console.log('click approve');
        dispatch(approverKoreksis({id, codeStatusKoreksi}));
    }

    return (
        <div>
            <ViewKoreksiById 
                datas={datas}
                clickBack={clickBack}
                clickApprove={clickApprove}
                isOpen={true}
            />
        </div>
    )
}

export default ViewKoreksiToApprove