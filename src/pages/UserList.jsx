import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";


const UserContainer = styled.div`
flex: 6;
`

const TableCell = styled.div`
display: flex;
align-items: center;
`

const AvatorContainer = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
`

const UserListEdit = styled.button`
border: none;
border-radius: 10px;
padding: 5px 10px;
background:#3bb077;
color: #fff;
cursor: pointer;
margin-left: 20px;


`

const UserList = () => {
    const [data,setData] = useState(userRows);
    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id !== id))
    }
    

    const columns = [
        { field: 'id', headerName: 'ID', width: 90},
        {
          field: 'userName',
          headerName: 'UserName',
          width: 200,
          editable: true,
          renderCell:(params)=>{
              return(
                <TableCell>
                    <AvatorContainer src={params.row.avator} alt="img"/>
                    {params.row.userName}
                </TableCell>
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 120,
          editable: true,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
              return(
                  <>
                  <Link to={"/user/" + params.row.id}>
                <UserListEdit>Edit</UserListEdit>
                  </Link>
                <DeleteOutline style={{ color:"red", cursor:"pointer"}} onClick={()=>handleDelete(params.row.id)}/>
                </>
                
              )
          }
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
          },
      ];
      
      


    return (
        <UserContainer>
               <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
        </UserContainer>
    )
}

export default UserList
