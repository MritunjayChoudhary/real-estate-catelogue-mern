import React,{useState} from 'react'
import './property.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const BasicInfo = ({basicInfo,setBasicInfo,basicInfoErr,setBasicInfoErr}) => {
    const changeInput =  (e,data)=>{
        setBasicInfoErr({"property":false,"negotiable":false,"price":false})
        setBasicInfo((prev)=>( {...prev,[data]:e.target.value}))
    }
    return (
        <>
        <div>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Property Type</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Negotiable</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Example : 10000" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Ownership</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Property Age</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Property Approved</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Property Description</Form.Label>
                <Form.Control type="text" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Bank Loan</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            
            

            {/* <Button variant="primary" type="submit">
                Submit
            </Button> */}
            </Form>
            {/* <label htmlFor="property">Property Type</label>
            <input onChange={(e)=>changeInput(e,"property")} name='property' type="text" value={basicInfo['property']} /> */}
            {/* {basicInfoErr.property && <p className={{"color":"red"}}>{"Property Can not be empty"}</p>} */}
            {/* <Form.Select aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select> */}
            {/* <label htmlFor="nego">Negotiable</label>
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
            <input onChange={(e)=>setBasicInfo((prev)=>( {...prev,"bankLoan":e.target.value}))} name='bankLoan' type="text" value={basicInfo['bankLoan']}/> */}
        </div>
        </>
    )
}

//DROPDOWN
{/* <Form.Group as={Col} controlId="formGridState">
    <Form.Label>State</Form.Label>
    <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
    </Form.Select>
</Form.Group> */}
//INPUT
{/* <Form.Group as={Col} controlId="formGridEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
</Form.Group> */}


const PropertyDetails = () => {
    return (
        <>
        <div>
        <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Example : 10000" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Example : 10000" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Example : 10000" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Ownership</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Select>
                </Form.Group>
            </Row>
        <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Property Type</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Negotiable</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Property Type</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Negotiable</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Property Type</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Negotiable</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Yes</option>
                        <option>No</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Property Type</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" placeholder="Example : 10000" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Facing</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

            </Row>
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
const Property = () => {
    const [activeTab,setActiveTab] = useState(0)
    const [basicInfo,setBasicInfo] = useState({"property":"","negotiable":"","price":0})
    const [basicInfoErr,setBasicInfoErr] = useState({"property":false,"negotiable":false,"price":false})


    const changeTab = ()=>{
        console.log(activeTab)
        if(activeTab == 0){
            // if(basicInfo['property'] == "" ){
            //     setBasicInfoErr((prev) => {return {...prev,"property":true}})
            //     return;
            // }else{
            //     setBasicInfoErr({"property":false,"negotiable":false,"price":false})
            // }
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
  return (
    <div className='property-container'>
        <div className='property-header'>ADD NEW PROPERTY</div>
        <div className="app-container">
            <div className='head-div'>
                <ul className='head-bar'>
                    <li id='0' className={activeTab==0?'activeTab':'tab'}><span className='tab-num'>1</span>Basic info</li>
                    <li id='1' className={activeTab==1?'activeTab':'tab'}><span className='tab-num'>2</span>Property Details</li>
                    <li id='2' className={activeTab==2?'activeTab':'tab'}><span className='tab-num'>3</span>General Info</li>
                    <li id='3' className={activeTab==3?'activeTab':'tab'}><span className='tab-num'>4</span>Location Info</li>
                </ul>
            </div>
            <div className='content-cont'>
                {activeTab==0 && <BasicInfo basicInfo={basicInfo} setBasicInfo = {setBasicInfo} basicInfoErr={basicInfoErr} setBasicInfoErr={setBasicInfoErr}/>}
                {activeTab==1 && <PropertyDetails/>}
                {activeTab==2 && <GenInfo/>}
                {activeTab==3 && <LastInfo/>}
                {/* {activeTab==1 && <GenInfo/>} */}
                <div className='submit-btns'>
                    {activeTab == 0 ? <button className='form-butt_1'>cancel</button>:<button className='form-butt_1' onClick={()=>goBackTab()}>Previous</button>}
                    <button className='form-butt_2' onClick={activeTab != 3?()=>changeTab():()=>apiCall()}>{activeTab != 3 ? 'save & continue' : 'Add Property'}</button>
                </div>
               
            </div>
            
        </div>
    </div>
  )
}

export default Property