import React, {useState, useEffect} from 'react'
import EmployeTable from '../../components/Table/EmployeTable'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUsersTable, resetUsers } from "../../stores/features/usersSlice";
import GeneralReportEmploye from '../../components/GeneralReport/GeneralReportEmploye';

const DataEmploye = () => {
  const [datas, setDatas] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [statusCode, setStatusCode] = useState(1);

  const dispatch = useDispatch()

  const {usersTable, users, isUsersSuccess} = useSelector(
    (state : any) => state.usersReducer
  )

  useEffect(()=>{
    if(isUsersSuccess && usersTable){
      setDataTable(usersTable);
      countData(usersTable.count);
      dispatch(resetUsers());
    }
  },[usersTable, isUsersSuccess])

  useEffect(()=>{
    if(isUsersSuccess && users){
      setDatas(users);
      console.log(users, 'users');
      dispatch(resetUsers());
    }
  },[users, isUsersSuccess])

  useEffect(()=>{
    dispatch(getUsers());
  },[])

  useEffect(()=>{
    dispatch(getUsersTable({
      limit, page, statusCode
    }));
  },[page, limit, statusCode])

  

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

  const clickStatus = (code : any) => {
    setStatusCode(code);
    setPage(1);
  }

  return (
    <div className="grid grid-cols-12 gap-5 mt-5">
      <div className="col-span-12 xl:col-span-12">
        <GeneralReportEmploye 
          datas={datas}
          clickStatus={clickStatus}
        />
      </div>
      <div className="col-span-12 xl:col-span-12">
        <EmployeTable 
          datas={dataTable}
          linkCreate='/createEmploye'
          linkView='/viewEmploye'
          page={page}
          allPage={allPage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </div>
  )
}

export default DataEmploye