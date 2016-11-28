import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class SendMail extends Component {

	render() {


		var data = Session.get('allData');
		var childrenDetails = [];
		var partnerDetails = [];

		for (var i = 1; i <= parseInt(data['number of children']); i++) {
			childrenDetails.push(<tr><td >Child{' '+i}: {data['child '+i+' birthday']} <br/>Cover level:  {data['child '+i+' cover']}</td></tr>)
		}

		if (data['partner birthday'] !== undefined) {
			partnerDetails.push(<tr><td >Spouse: {data['partner birthday']} <br/>Cover level: {data['partner cover amount']}</td></tr>)
		}


		return (
			
			<div >
			<table><tbody><tr>
			  <td>
			 

			  <table>
			    

			    <tbody>
			      <tr>
			        <td ><table>
			          <tbody>
			            <tr>
			              
			              <td >Dear {data['name']+' '+data['surname']},</td>
			            </tr>
			            <tr>
			              
			              <td >Following your enquiry on {data['date']} I am pleased to confirm your quotation for funeral cover.
							You have supplied the following details:
							</td>
			            </tr>
			            <tr>

			              <td>Main member: {data}
							Cover level: {data['cover amount']}
							</td>
			            </tr>

			            {partnerDetails}
			            
			            
			            {childrenDetails}

			            <tr>

			              <td>Please review these details to ensure that they are correct.</td>
			            </tr>
			            <tr>
			              <td>Based upon the information you supplied your monthly premium will be {data}</td>
			            </tr>

			            <tr>
			              	<td >Should you wish to take advantage of this quotation simply contact us by:<br/>
							Telephone: <br/>
							Email: 
							</td>
			            </tr>

			            <tr>
			              <td >Please supply the following reference number Quote Ref number when you contact us.</td>
			            </tr>

			            <tr>
			              <td >Many thanks</td>
			            </tr>


			          </tbody>
			        </table></td>
			      </tr>
			      <tr>
			        <td ><img src="http://img.publicidees.com/southafrica/hollard/Hollard/footer.jpg" width="100%" height="auto" alt="Hollard"/></td>
			      </tr>
			      <tr>
			        <td >Hollard Life Assurance Company Limited is an authorised financial services provider. Terms and &amp; Conditions apply.</td>
			      </tr>


			</tbody></table>



			</td></tr></tbody></table>

			</div>

		);
	}
}