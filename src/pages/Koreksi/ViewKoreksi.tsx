import React, {useEffect, useState} from 'react'
import ViewKoreksiById from '../../components/Koreksi/ViewKoreksiById'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getKoreksisById, resetKoreksis } from '../../stores/features/koresisSlice';

const ViewKoreksi = () => {
  const {id} = useParams();
  const [datas, setDatas] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {koreksis, isKoreksisSuccess} = useSelector(
      (state : any) => state.koreksisReducer
  )

  useEffect(()=>{
      if(koreksis && isKoreksisSuccess){
          setDatas(koreksis);
          console.log(koreksis, 'koreksis');
      }
  },[koreksis, isKoreksisSuccess])

  useEffect(()=>{
      dispatch(getKoreksisById({id}));
  },[]);

  const clickBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <ViewKoreksiById 
        datas={datas}
        clickBack={clickBack}
      />
    </div>
  )
}

export default ViewKoreksi