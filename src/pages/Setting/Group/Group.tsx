import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getGroupsTable, resetGroups } from '../../../stores/features/groupsSlice';

const Group = () => {
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [allPage, setAllPage] = useState(0);
    const [datas, setDatas] = useState([]);

    const {groups, isGroupsSuccess} = useSelector(
        (state : any) => state.groupsReducer
    )

    useEffect(()=>{
        dispatch(getGroupsTable({
            limit, page
        }));
    },[limit, page]);

    useEffect(()=>{
        if(isGroupsSuccess && groups){
            setDatas(groups);
            countData(groups.count);
            dispatch(resetGroups());
        }
    },[groups, isGroupsSuccess]);

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
        <div>
            <AttributTable 
                datas={datas}
                linkView="/editGroup"
                linkCreate="/createGroup"
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                allPage={allPage}
            />
        </div>
  )
}

export default Group