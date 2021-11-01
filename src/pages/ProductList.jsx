import styled from "styled-components"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../dummydata";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductContainer = styled.div`
flex:6;
`
const TableCell = styled.div`
display: flex;
align-items: center;
`

const ImageContainer = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
object-fit: cover;
margin-right: 10px;
`

const ProductListEdit = styled.button`
border: none;
border-radius: 10px;
padding: 5px 10px;
background:#3bb077;
color: #fff;
cursor: pointer;
margin-left: 20px;
`


const ProductList = () => {
    const [data, setData] = useState(productRows)
    
    const handleDelete=(id)=>{
        setData(data.filter(item=>item.id !== id))
    }

    const columns = [
        { field: "id", headerName: "ID", width: 90},
        {
          field: 'product',
          headerName: 'Product Name',
          width: 200,
          renderCell:(params)=>{
              return(
                <TableCell>
                    <ImageContainer src={params.row.image} alt="img"/>
                    {params.row.name}
                </TableCell>
              )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 120,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
          field: 'price',
          headerName: 'Price',
          width: 160,
        },
        {
          field: 'action',
          headerName: 'Action',
          width: 150,
          renderCell:(params)=>{
              return(
                  <>
                  <Link to={"/product/" + params.row.id}>
                <ProductListEdit>Edit</ProductListEdit>
                  </Link>
                <DeleteOutline style={{ color:"red", cursor:"pointer"}} onClick={()=>handleDelete(params.row.id)}/>
                </>
                
              )
          }
        },
      ];

return (
        <ProductContainer>
        <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
        </ProductContainer>
    )
}

export default ProductList
