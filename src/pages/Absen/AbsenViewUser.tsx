import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUsersTable, resetUsers } from "../../stores/features/usersSlice";
import EmployeForAbsenTable from '../../components/Table/EmployeForAbsenTable';
import GeneralReportEmploye from '../../components/GeneralReport/GeneralReportEmploye';
import SlideOverEditDate from '../../components/SlideOver/SlideOverEditDate';

const AbsenViewUser = () => {
  const [datas, setDatas] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [statusCode, setStatusCode] = useState(1);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

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

  console.log(users, 'users');

  useEffect(()=>{
    if(isUsersSuccess && users){
      setDatas(users);
      
      dispatch(resetUsers());
    }
  },[users, isUsersSuccess])

  useEffect(()=>{
    dispatch(getUsers());
  },[])

  useEffect(()=>{
    dispatch(getUsersTable({
      limit, page, statusCode, search
    }));
  },[page, limit, statusCode, search])

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
        <EmployeForAbsenTable
          limit={limit}
          setLimit={setLimit}
          datas={dataTable}
          linkCreate='/createEmploye'
          linkView='/absenViewCalendar'
          page={page}
          allPage={allPage}
          nextPage={nextPage}
          prevPage={prevPage}
          search={search}
          setSearch={setSearch}
        />
      </div>
    </div>
  )
}

export default AbsenViewUser