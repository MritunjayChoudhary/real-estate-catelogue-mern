import React, { useState } from 'react'
import ReactDOM from "react-dom/client"
import Form from 'react-bootstrap/Form';
// import "./style.css"

const BasicInfo = ({basicInfo,setBasicInfo,basicInfoErr,setBasicInfoErr}) => {
    const changeInput =  (e,data)=>{
        setBasicInfoErr({"property":false,"negotiable":false,"price":false})
        setBasicInfo((prev)=>( {...prev,[data]:e.target.value}))
    }
    return (
        <>
        <div>
            <label htmlFor="property">Property Type</label>
            <input onChange={(e)=>changeInput(e,"property")} name='property' type="text" value={basicInfo['property']} />
            {/* {basicInfoErr.property && <p className={{"color":"red"}}>{"Property Can not be empty"}</p>} */}
            <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <label htmlFor="nego">Negotiable</label>
            <input onChange={(e)=>setBasicInfo((prev)=>( {...prev,"negotiable":e.target.value}))} name='nego' type="text" value={basicInfo['negotiable']}/>
            <label htmlFor="price"> Price</label>
            <input onChange={(e)=>setBasicInfo((prev)=>( {...prev,"price":e.target.value}))} name='property' type="text" value={basicInfo['price']}/>
            <label htmlFor="ownership">Ownership</label>
            <input onChange={(e)=>setBasicInfo((prev)=>( {...prev,"ownership":e.target.value}))} name='ownership' type="text" value={basicInfo['ownership']}/>
            <label htmlFor="propertyAge">Property Age</label>
            <input onChange={(e)=>setBasicInfo((prev)=>( {...prev,"propertyAge":e.target.value}))} name='propertyAge' type="text" value={basicInfo['propertyAge']}/>
            <label htmlFor="propertyApproved">Property Approved</label>
            <input onChange={(e)=>setBasicInfo((prev)=>( {...prev,"propertyApproved":e.target.value}))} name='propertyApproved' type="text" value={basicInfo['propertyApproved']}/>
            <label htmlFor="propertyDescription"> Property Description</label>
            <input onChange={(e)=>setBasicInfo((prev)=>( {...prev,"propertyDescription":e.target.value}))} name='propertyDescription' type="text" value={basicInfo['propertyDescription']}/>
            <label htmlFor="bankLoan"> Bank Loan</label>
            <input onChange={(e)=>setBasicInfo((prev)=>( {...prev,"bankLoan":e.target.value}))} name='bankLoan' type="text" value={basicInfo['bankLoan']}/>
        </div>
        </>
    )
}
const PropertyDetails = () => {
    return (
        <>
        <div>
            <label htmlFor="Area">Area </label>
            <input name='Area' type="text" />
            <label htmlFor="Length"> Length</label>
            <input name='Length' type="text" />
            <label htmlFor="Breath">Breath</label>
            <input name='Breath' type="text" />
        </div>
        </>
    )
}

const GenInfo = () => {
    return (
        <>
        <div>
            <label htmlFor="Area">Name </label>
            <input name='Area' type="text" />
            <label htmlFor="Length"> Mobile</label>
            <input name='Length' type="text" />
            <label htmlFor="Breath">Posted by</label>
            <input name='Breath' type="text" />
        </div>
        </>
    )
}

const LastInfo = () => {
    return (
        <>
        <div>
            <label htmlFor="Area">Name </label>
            <input name='Area' type="text" />
            <label htmlFor="Length"> Mobile</label>
            <input name='Length' type="text" />
            <label htmlFor="Breath">Posted by</label>
            <input name='Breath' type="text" />
        </div>
        </>
    )
}

export {BasicInfo,PropertyDetails,GenInfo,LastInfo};

const FormEle = () => {
    const [activeTab,setActiveTab] = useState(0)
    const [basicInfo,setBasicInfo] = useState({"property":"","negotiable":"","price":0})
    const [basicInfoErr,setBasicInfoErr] = useState({"property":false,"negotiable":false,"price":false})


    const changeTab = ()=>{
        if(activeTab == 0){
            if(basicInfo['property'] == "" ){
                setBasicInfoErr((prev) => {return {...prev,"property":true}})
                return;
            }else{
                setBasicInfoErr({"property":false,"negotiable":false,"price":false})
            }
        }
       
        setActiveTab(activeTab+1)
    }
    const goBackTab = ()=>{
        setActiveTab(activeTab-1)
    }
    const apiCall = () => {
        console.log(basicInfo);
        console.log("API CALLED to store data");
    }
    console.log(basicInfo)
    return (
        <div className="app-container">
            <div className='head-div'>
                <ul className='head-bar'>
                    <li id='0' className={activeTab==0?'activeTab':'tab'}>basic info</li>
                    <li id='1' className={activeTab==1?'activeTab':'tab'}>property details</li>
                    <li id='2' className={activeTab==2?'activeTab':'tab'}>General info</li>
                    <li id='3' className={activeTab==3?'activeTab':'tab'}>location Info</li>
                </ul>
            </div>
            <div className='content'>
                {activeTab==0 && <BasicInfo basicInfo={basicInfo} setBasicInfo = {setBasicInfo} basicInfoErr={basicInfoErr} setBasicInfoErr={setBasicInfoErr}/>}
                {activeTab==1 && <PropertyDetails/>}
                {activeTab==2 && <GenInfo/>}
                {activeTab==3 && <LastInfo/>}
                {/* {activeTab==1 && <GenInfo/>} */}
            </div>
            {activeTab == 0 ? <button>cancel</button>:<button onClick={()=>goBackTab()}>Previous</button>}

            <button onClick={activeTab != 3?()=>changeTab():()=>apiCall()}>{activeTab != 3 ? 'save & continue' : 'Add Property'}</button>
        </div>
    )
}

export default FormEle;