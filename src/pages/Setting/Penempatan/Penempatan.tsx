import React, { useEffect, useState } from 'react';
import AttributTable from '../../../components/Table/AttributTable';
import { useDispatch, useSelector} from 'react-redux';
import { getPenempatansTable, resetPenempatans } from '../../../stores/features/penempatansSlice';

const Penempatan = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [datas, setDatas] = useState([]);

  const {penempatans, isPenempatansSuccess} = useSelector(
    (state : any) => state.penempatansReducer 
  );

  useEffect(()=>{
    dispatch(getPenempatansTable({
      limit, page
    }));
  },[]);

  useEffect(()=>{
    if(penempatans && isPenempatansSuccess){
      setDatas(penempatans);
      dispatch(resetPenempatans());
    }
  },[penempatans, isPenempatansSuccess]);


  return (
    <>
      <div className='w-full'>
        <AttributTable
          datas={datas}
          linkView="/editPenempatan"
          linkCreate="/createPenempatan"
        />
      </div>
    </>
  )
}

export default Penempatan