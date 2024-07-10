import React, {useState, useEffect} from 'react'
import EmployeTable from '../../components/Table/EmployeTable'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUsersTable, resetUsers, downloadUsers } from "../../stores/features/usersSlice";
import GeneralReportEmploye from '../../components/GeneralReport/GeneralReportEmploye';
import FormImportUser from '../../components/Form/User/FormImportUser';
import Button from '../../base-components/Button';
import axios from 'axios';

const DataEmploye = () => {
  const [datas, setDatas] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPage, setAllPage] = useState(0);
  const [statusCode, setStatusCode] = useState(1);
  const [showFormImportUser, setShowFormImportUser] = useState(false);
  const [search, setSearch] = useState('');

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
      limit, page, statusCode, search
    }));
  },[page, limit, statusCode, search])

  const reloadData = () => {
    dispatch(getUsersTable({
      limit, page, statusCode
    }));
  }

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

  const downloadUser = async() => {
    dispatch(downloadUsers({
      code:statusCode,
      name:'donwload_user.xlsx'
    }));
}

  return (
    <div className="grid grid-cols-12 gap-5 mt-5">
      <div className="col-span-12 xl:col-span-12">
        <GeneralReportEmploye 
          datas={datas}
          clickStatus={clickStatus}
        />
      </div>
      <div className="col-span-12 xl:col-span-6">
        <FormImportUser 
          showForm={showFormImportUser}
          setShowForm={setShowFormImportUser}
          reloadData={reloadData}
        />
      </div>
      <div className="col-span-12 xl:col-span-6 content-end mt-4">
          <div className='flex justify-end'>
            <div className='mx-2'>
              <Button
                  variant={!showFormImportUser ? "primary" : "danger"}
                  size='sm'
                  onClick={()=>setShowFormImportUser(!showFormImportUser)}
                  >
                  {!showFormImportUser ? 'Show Form Upload User' : 'Close Form Upload User'}
              </Button>
            </div>
            <div>
              <Button
                  variant={"primary"}
                  size='sm'
                  onClick={()=>downloadUser()}
                  >
                  Download User
              </Button>
            </div>
          </div>
      </div>
      <div className="col-span-12 xl:col-span-12">
        <EmployeTable 
          datas={dataTable}
          limit={limit}
          setLimit={setLimit}
          linkCreate='/createEmploye'
          linkView='/viewEmploye'
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

export default DataEmploye