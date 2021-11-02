import { Link } from "react-router-dom"
import { Publish } from "@material-ui/icons"
import styled from "styled-components"
import Chart from "../components/Chart"
import { productData } from "../dummydata" 

const ProductContainer = styled.div`
flex: 6;
padding: 20px;
`

const ProductTitleContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
    
const ProductTitle = styled.h1``

const ProductAddButton = styled.button`
width: 80px;
border: none;
padding: 5px;
background: teal;
color: #ffff;
border-radius: 5px;
font-size: 16px;
cursor: pointer;
`
const ProductTop = styled.div`
display: flex;
`


const ProductTopLeft = styled.div`
flex: 1;

`


const ProductTopRight = styled.div`
flex: 1;
padding: 20px;
margin: 20px;
box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-webkit-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-moz-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
`


const ProductInfoTop = styled.div`
display: flex;
align-items: center;
`

const ProductInfoImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
object-fit: cover;
margin: 20px 10px 10px 0px;
`

const ProductName = styled.span`
font-weight: 600;
`

const ProductInfoItem = styled.div`
width: 150px;
display: flex;
justify-content: space-between;

`
    
const ProductInfoKey = styled.span``

const ProductInfoValue = styled.span`
font-weight: 300;
`
const ProductBottom = styled.div`
padding: 20px;
margin: 20px;
box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-webkit-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
-moz-box-shadow: 2px 2px 43px -27px rgba(0,0,0,0.89);
` 
const ProductForm = styled.form`
display: flex;
justify-content: space-between;
`

const ProductFormLeft = styled.div`
display: flex;
flex-direction: column;
`


const ProductFormRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`

const ProductLabel = styled.label`
margin-bottom: 10px;
color: gray;
`

const ProductInput = styled.input`
margin-bottom: 10px;
border: none;
padding: 5px;
border-bottom: 1px solid gray;
&:focus{
    outline:none;
}
`

const ProductSelect = styled.select`
margin-bottom: 10px;

`

const ProductSelectOption = styled.option``

const ProductUpload = styled.div`
display: flex;
align-items: center;
`

const ProductUploadImage = styled.img`
width: 100px;
height: 100px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`

const ProductUploadLabel = styled.label``

const ProductUploadInput = styled.input``

const Product = () => {
    return (
        <ProductContainer>
            <ProductTitleContainer>
                <ProductTitle>Product</ProductTitle>
                <Link to ="/newproduct">
                <ProductAddButton>CREATE</ProductAddButton>
                </Link>
            </ProductTitleContainer>

            <ProductTop>
                <ProductTopLeft>
                    <Chart data = {productData} dataKey = "sales" title=" Sales Performace"/>
                </ProductTopLeft>

                <ProductTopRight>
                    <ProductInfoTop>
                        <ProductInfoImage src = "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"/>
                        <ProductName>Microsoft Laptop</ProductName>
                    </ProductInfoTop>

                        <ProductInfoItem>
                            <ProductInfoKey>Id:</ProductInfoKey>
                            <ProductInfoValue>123</ProductInfoValue>
                        </ProductInfoItem>

                        <ProductInfoItem>Sales:
                            <ProductInfoKey>Sales:</ProductInfoKey>
                            <ProductInfoValue>34750</ProductInfoValue>
                        </ProductInfoItem>

                        <ProductInfoItem>
                            <ProductInfoKey>Active:</ProductInfoKey>
                            <ProductInfoValue>yes</ProductInfoValue>
                        </ProductInfoItem>

                        <ProductInfoItem>
                            <ProductInfoKey>In Stock:</ProductInfoKey>
                            <ProductInfoValue>No</ProductInfoValue>
                        </ProductInfoItem>

                     
                </ProductTopRight>
            </ProductTop>
            <ProductBottom>
                <ProductForm>
                    <ProductFormLeft>
                        <ProductLabel>Product Name</ProductLabel>
                        <ProductInput placeholder = "Microsoft Laptop"/>
                        
                        <ProductLabel>In Stock</ProductLabel>
                        <ProductSelect name = "inStock" id = "idStock">
                            <ProductSelectOption value = "yes"> Yes</ProductSelectOption>
                            <ProductSelectOption value = "no"> No</ProductSelectOption>
                        </ProductSelect>

                        <ProductLabel>Active</ProductLabel>
                        <ProductSelect name = "active" id = "active">
                            <ProductSelectOption value = "yes"> Yes</ProductSelectOption>
                            <ProductSelectOption value = "no"> No</ProductSelectOption>
                        </ProductSelect>


                    </ProductFormLeft>
                    <ProductFormRight>
                        <ProductUpload>
                            <ProductUploadImage src = "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"/>
                            <ProductUploadLabel for = "file"><Publish style={{cursor:"pointer"}}/></ProductUploadLabel>
                            <ProductUploadInput type = "file" id = "file" style = {{display:"none"}}/>
                        </ProductUpload>
                        <ProductAddButton style= {{background:"darkblue", alignSelf:"flex-end"}}>Update</ProductAddButton>
                    </ProductFormRight>
                </ProductForm>
            </ProductBottom>
        </ProductContainer>
    )
}

export default Product
