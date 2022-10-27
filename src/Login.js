import React, {useState, useEffect} from 'react'
import jwt_decode from "jwt-decode";
import {GrCheckboxSelected, GrCheckbox} from "react-icons/gr"

function Login() {
  const [checked, setChecked] = useState(false);
  const currentURL = window.location.href
  const strings = currentURL.split("?token=")
  const token = strings[1] 

  //form input stattes
  const [platform, setPlatform] = useState("");
  const [name, setName] = useState("");
  const [serviceUrl, setServiceUrl] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [country, setCountry] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPage, setContactPage] = useState("");
  const [updateDate, setUpdateDate] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [cancelDays, setCancelDays] = useState("");
  const [reimburseDays, setReimburseDays] = useState("");
  const [message, setMessage] = useState("");
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Creating!")
    try {
      const res = await fetch("https://100087.pythonanywhere.com/api/legalpolicies", {
        method: "POST",
        mode:'no-cors', 
        credentials: 'include',
        headers: {Accept: 'application/json'},
        body: JSON.stringify({
            platform_type:platform,
            app_or_website_or_service_name:name,
            app_or_website_or_service_url:serviceUrl,
            description:description,
            company_name:companyName,
            company_address:address,
            company_registration_number:registrationNo,
            company_country:country,
            contact_email_id:contactEmail,
            website_contact_page_url:contactPage,
            last_update_date:updateDate,
            app_or_website_governed_by_or_jurisdiction:jurisdiction,
            days_allowed_for_cancellation_of_order_or_product: cancelDays,
            reimburse_days: reimburseDays,
        }),
      });
    } catch (err) {
      console.log(err);
      setMessage(err)
    }
  };
  useEffect(() => {
    if(!token){
        return
    }
    const decoded = jwt_decode(token);
    console.log(decoded.isSuccess)
  }, [token])
  
  return (
    <div style={{padding:30}}>
        <h1>Register an APP/Website</h1>
        <form onSubmit={handleSubmit}>
            <div>
            <p>Platform</p>
            <select id = "dropdown" onChange={(e) => setPlatform(e.target.value)}>
                <option value="N/A">Select Platform</option>
                <option value="App">App</option>
                <option value="Website">Website</option>
            </select>
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>{platform} Name: </label>
                <input  type="text" value={name} placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Service Url: </label>
                <input  type="url" value={serviceUrl} placeholder="Service Url"
                onChange={(e) => setServiceUrl(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Product Description: </label>
                <input  type="text" value={description} placeholder="Product Description"
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Company Name: </label>
                <input  type="text" value={companyName} placeholder="Company Name"
                onChange={(e) => setCompanyName(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Registration Number: </label>
                <input  type="text" value={registrationNo} placeholder="Registration Number"
                onChange={(e) => setRegistrationNo(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Address: </label>
                <input  type="text" value={address} placeholder="Address"
                onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Country: </label>
                <input  type="text" value={country} placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Contact Email: </label>
                <input  type="email" value={contactEmail} placeholder="Contact Email"
                onChange={(e) => setContactEmail(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Contact Page: </label>
                <input  type="url" value={contactPage} placeholder="Contact Page"
                onChange={(e) => setContactPage(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Update Date: </label>
                <input  type="date" value={updateDate} placeholder="Update Date"
                onChange={(e) => setUpdateDate(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Jurisdiction: </label>
                <input  type="text" value={jurisdiction} placeholder="Jurisdiction"
                onChange={(e) => setJurisdiction(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Cancel Days: </label>
                <input  type="number" value={cancelDays} placeholder="Cancel Days"
                onChange={(e) => setCancelDays(e.target.value)}
                />
            </div>
            <div style={{flexDirection:"column", margin:5}}>
                <label>Reimburse Days: </label>
                <input  type="number" value={reimburseDays} placeholder="Reimburse Days"
                onChange={(e) => setReimburseDays(e.target.value)}
                />
            </div>
            
            <button type="submit">Register {platform}</button>  

            <div className="message">{message ? {message} : null}</div>          
        </form>        
        <h1>Sample website content</h1> 
        <div style={{margin:10}}>
            {
                checked? <GrCheckboxSelected /> :<GrCheckbox />
            }                     
            <a style={{margin:10}} href='https://100087.pythonanywhere.com/policy/FB1010000000001665306290565391/website-privacy-policy/?redirect_url=http://localhost:3000/legalapitest/'>
                I agree with to the privacy policy and terms and conditions
            </a>
        </div>
        <button style={{margin:10}} type="submit">Website content continued</button>
        
    </div>
  )
}

export default Login