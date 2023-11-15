import React, {useState, useEffect} from 'react'
import EmployeTable from '../../components/Table/EmployeTable'

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsersTable, resetUsers } from "../../stores/features/usersSlice";

const DataEmploye = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  
  const dispatch = useDispatch()

  const {users, isUsersSuccess} = useSelector(
    (state : any) => state.usersReducer
  )

  useEffect(()=>{
    if(isUsersSuccess && users){
      setDatas(users);
      dispatch(resetUsers());
    }
  },[users, isUsersSuccess])

  useEffect(()=>{
    dispatch(getUsersTable({
      limit, page
    }));
  },[])

  return (
    <div className="grid grid-cols-12 gap-5 mt-5">
      <div className="col-span-12 xl:col-span-12">
        <EmployeTable 
          datas={datas}
          linkCreate='/createEmploye'
          linkView='/viewEmploye'
        />
      </div>
    </div>
  )
}

export default DataEmploye