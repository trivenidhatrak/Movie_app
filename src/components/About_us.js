import React,{Component} from 'react';
import Image from './Image.js';
//import About_us_table from './About_us_table.js';
import cookie from 'react-cookies'
class  About_us extends Component{
  
    render(){
       
        return(<div>
            <main className="main-content">
            <div className="container">
                <div className="page">
                <div className="breadcrumbs">
                
               </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div><Image imgUrl={require("../upload/Chrysanthemum.jpg")} imageTitle="figure image"/></div>
                        </div>
                        <div className="col-md-8">
                            <p className="leading">Harbinger Systems builds software solutions leveraging digital technologies for domains such as HR Tech, Health Tech, and Learning Tech.
                            </p>
                            <p>Harbinger Group is a global provider of software products and services since 1990. The Harbinger Group companies include Harbinger Systems, Harbinger Knowledge Products and Harbinger Interactive Learning. Harbinger Group serves customers in over 60 countries through its offices in Pune (India), Redmond (WA, USA), Pleasanton (CA,USA) and through its partner network worldwide. Harbinger’s patented technology and sound thought leadership have resulted in revolutionary products, including the market ‐ leading Raptivity®, the innovative YawnBuster®, and the cutting ‐ edge SiteJazzerTM and TeemingPod®.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-9">
                            <h2 className="section-title">Vision &amp; Misssion</h2>
                            <p>Harbinger Group is a global provider of software products and services since 1990. The Harbinger Group companies include Harbinger Systems, Harbinger Knowledge Products and Harbinger Interactive Learning. Harbinger Group serves customers in over 60 countries through its offices in Pune (India), Redmond (WA, USA), Pleasanton (CA,USA) and through its partner network worldwide. Harbinger’s patented technology and sound thought leadership have resulted in revolutionary products, including the market ‐ leading Raptivity®, the innovative YawnBuster®, and the cutting ‐ edge SiteJazzerTM and TeemingPod®.</p>
                        </div>
                        
                    </div>                    
                </div>
            </div> 
        </main>
        </div>
        )
    }


    
}
export default About_us;

