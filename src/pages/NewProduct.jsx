import styled from "styled-components"

const NewProductContainer = styled.div`
flex: 6;
padding: 10px;
`

const ProductTitle = styled.h1``

const NewProductForm = styled.form``

const NewProductInfo = styled.div`
display: flex;
flex-wrap: wrap;
`

const NewProductItem = styled.div`
width: 400px;
display: flex;
flex-direction: column;
margin-top: 10px;
margin-right: 20px;
`

const NewProductLabel  = styled.label`
margin-bottom: 10px;
font-size: 14px;
font-weight: 600;
`

const NewProductInput = styled.input`
height: 20px;
padding: 10px;
border: 1px solid gray;
border-radius: 5px;
&:focus{
    outline: none;
    border-color: rgb(173, 173, 236);
    box-shadow: 0 0 10px #719ECE;
}
`
const NewProductSelect = styled.select`
height: 40px;
border-radius: 5px;
background: #E9E9EC;
&:focus{
    outline: none !important;
    border-color: rgb(173, 173, 236);
    box-shadow: 0 0 10px #719ECE;
}
`
const NewProductOption = styled.option``

const NewProductButton = styled.button`
align-self: flex-end;
width: 200px;
border: none;
background: darkblue;
color: #fff;
padding: 7px 10px;
border-radius: 10px;
font-weight: 600;
margin-top: 30px;
cursor: pointer;
letter-spacing: 2px;
font-size: 14px;
`

const NewProduct = () => {
    return (
        <NewProductContainer>
            <ProductTitle>New Product</ProductTitle>
            <NewProductForm>
            <NewProductItem>
                    <NewProductLabel>Product Image</NewProductLabel>
                    <NewProductInput style = {{border:"none"}} type="file"/>
                </NewProductItem>
                
                <NewProductInfo>
                <NewProductItem>
                    <NewProductLabel>Product Title</NewProductLabel>
                    <NewProductInput type="text" placeholder="Enter Product Name"/>
                </NewProductItem>

                <NewProductItem>
                    <NewProductLabel>Stock</NewProductLabel>
                    <NewProductInput type="number" placeholder="Enter Quantity"/>
                </NewProductItem>

                <NewProductItem>
                    <NewProductLabel>Price</NewProductLabel>
                    <NewProductInput type="number" placeholder="Enter Price"/>
                </NewProductItem>

                <NewProductItem>
                    <NewProductLabel>Active</NewProductLabel>
                    <NewProductSelect name="active" id="active">
                        <NewProductOption value = "yes">Yes</NewProductOption>
                        <NewProductOption value="no">No</NewProductOption>
                    </NewProductSelect>
                </NewProductItem>
            </NewProductInfo>

                <NewProductButton>CREATE</NewProductButton>
            </NewProductForm>
        </NewProductContainer>
    )
}

export default NewProduct
