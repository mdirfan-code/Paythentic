import React,{useState} from 'react'
import './Payment.css';
export default function Payment() {
    const [ isDialBoxVisible, setVisibility] = useState(false)
   
    const clickHandler = () => {
        var Visible;
        if(isDialBoxVisible){
           Visible=false;
        }
        else{
            Visible=true;
        }
        setVisibility(Visible)

    }
    console.log(`payment-dial-box ${isDialBoxVisible?"On":"Off"}`)
    return (<>
        <div className={`${isDialBoxVisible?"OnBG":"OffBG"}`}></div>
        <form className={`payment-dial-box ${isDialBoxVisible?"On":"Off"}`  }>
            <span className="close-btn-wrap" onClick={clickHandler}><h2>Payment</h2><h1>X</h1></span>
            <div></div>
            <h3>Card number</h3>
            <span><input type="number" placeholder="XXXX XXXX XXXX XXXX"/></span>
            <h3>Card name</h3>
            <span><input type="text"  placeholder="Card Name"/></span>
            <h3>Expiry Date</h3>
            <span className="expDate-cvv"><span className="expDate-container"><input className="expDate MM" type="number" placeholder="MM"/><h4>/</h4><input className="expDate YY" type="number" placeholder="YY"/></span ><span className="cvv-container"><h3>CVV:   </h3><input type="number" placeholder='CVV'/></span></span>
            <span><button className="card-btn" type="submit">Proceed To Pay</button></span>

        </form>

        <button className="card-btn" onClick={clickHandler}>Payment</button>
        </>
    )
}
