import React, { useEffect, useState } from 'react';
import AttributTable from '../../../components/Table/AttributTable';
import { useDispatch, useSelector} from 'react-redux';
import { getPenempatansTable, resetPenempatans } from '../../../stores/features/penempatansSlice';

const Penempatan = () => {
  const dispatch = useDispatch();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [datas, setDatas] = useState([]);

  const {penempatans, isPenempatansSuccess} = useSelector(
    (state : any) => state.penempatansReducer 
  );

  useEffect(()=>{
    dispatch(getPenempatansTable({
      limit, page
    }));
  },[limit, page]);

  useEffect(()=>{
    if(penempatans && isPenempatansSuccess){
      setDatas(penempatans);
      countData(penempatans.count);
      dispatch(resetPenempatans());
    }
  },[penempatans, isPenempatansSuccess]);

  //table
  const countData = (allData : any) =>{
    const count = allData / limit;
    setAllPage(Math.ceil(count))
  }

  const nextPage = () => {
    if(page < allPage){
        const count = page + 1;
        setPage(count);
    }
  }

  const prevPage = () => {
      if(page > 1){
          const count = page - 1;
          setPage(count);
      }
  }

  return (
    <>
      <div className='w-full'>
        <AttributTable
          datas={datas}
          linkView="/editPenempatan"
          linkCreate="/createPenempatan"
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          allPage={allPage}
        />
      </div>
    </>
  )
}

export default Penempatan