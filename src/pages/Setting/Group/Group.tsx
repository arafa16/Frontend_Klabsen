import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import AttributTable from '../../../components/Table/AttributTable';
import { getGroupsTable, resetGroups } from '../../../stores/features/groupsSlice';

const Group = () => {
    const dispatch = useDispatch();
    const [datas, setDatas] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const {groups, isGroupsSuccess} = useSelector(
        (state : any) => state.groupsReducer
    )

    useEffect(()=>{
        dispatch(getGroupsTable({
            limit, page
        }));
    },[]);

    useEffect(()=>{
        if(isGroupsSuccess && groups){
            setDatas(groups);
            dispatch(resetGroups());
        }
    },[groups, isGroupsSuccess])

  return (
        <div>
            <AttributTable 
                datas={datas}
                linkView="/editGroup"
                linkCreate="/createGroup"
            />
        </div>
  )
}

export default Group