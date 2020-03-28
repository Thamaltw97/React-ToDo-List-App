import React
    //, {Component}
    from 'react';
import { MDBFooter, MDBContainer } from "mdbreact";


const FooterHandler = () => {
    return(
        <MDBFooter color="blue" className="footer font-small pt-1 mt-5">
            <div className="footer-copyright text-center py-1">
                <MDBContainer fluid>
                    {/*<p>Made with &hearts; by Thamal Wijetunge.*/}
                        {/*All rights reserved. {new Date().getFullYear()}*/}
                    {/*</p>*/}
                    Made with ❤ by Thamal Wijetunge.
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

// class FooterHandler extends Component{
//     render() {
//         return (
//             <footer className="footer-copyright text-center">
//                 <div className="container">
//                     <p className="footer-text">Made with &hearts; by Thamal Wijetunge.</p>
//                 </div>
//             </footer>
//         );
//     }
// }

export default FooterHandler;