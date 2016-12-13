Meteor.methods({



  	'sendEmail'(type, data) {


  		if (type === "Credit life") {

  			var html = "<!DOCTYPE html>"
			+'<!-- saved from url=(0048)http://www.hollardmail.co.za/mailers/funeral/V1/ -->'
			+'<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">'
			+'   <!-- utf-8 works for most cases -->'
			+'	<meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn\'t be necessary -->'
			+'	<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->'
			+'  <title>Get affordable creditlife insurance!</title> <!-- the <title> tag shows on email notifications on Android 4.4. -->'
			+'  <style type="text/css">'
			  	
			+'  	/* ensure that clients don\'t add any padding or spaces around the email design and allow us to style emails for the entire width of the preview pane */'
			+'		body,'
			+'		#bodyTable {'
			+'			width:100% !important;'
			+'			margin:0;'
			+'			padding:0;'
			+'		}'
			+'		'
			+'		/* Ensures Webkit- and Windows-based clients don\'t automatically resize the email text. */'
			+'		body,'
			+'		table,'
			+'		td,'
			+'		p,'
			+'		a,'
			+'		li,'
			+'		blockquote {'
			+'			-ms-text-size-adjust:100%;'
			+'			-webkit-text-size-adjust:100%;'
			+'		}'
			+'		'
			+'		/* Forces Yahoo! to display emails at full width */'
			+'		.thread-item.expanded .thread-body .body, .msg-body {'
			+'			width: 100% !important;'
			+'			display: block !important;'
			+'		}'
			+''
			+'  /* Forces Hotmail to display emails at full width */'
			+'    .ReadMsgBody,'
			+'    .ExternalClass {'
			+'			width: 100%;'
			+'			background-color: #f4f4f4;'
			+'    }'
			+''
			+'    /* Forces Hotmail to display normal line spacing. */'
			+'		.ExternalClass,'
			+'		.ExternalClass p,'
			+'		.ExternalClass span,'
			+'		.ExternalClass font,'
			+'		.ExternalClass td,'
			+'		.ExternalClass div {'
			+'			line-height:100%;'
			+'    }'
			+''
			+'    /* Resolves webkit padding issue. */'
			+'    table {'
			+'			border-spacing:0;'
			+'    }'
			+''
			+'    /* Resolves the Outlook 2007, 2010, and Gmail td padding issue, and removes spacing around tables that Outlook adds. */'
			+'    table,'
			+'    td {'
			+'			border-collapse:collapse;'
			+'			mso-table-lspace:0pt;'
			+'			mso-table-rspace:0pt;'
			+'    }'
			+'    '
			+'    /* Corrects the way Internet Explorer renders resized images in emails. */'
			+'    img {'
			+'    	-ms-interpolation-mode: bicubic;'
			+'    }'
			+'    '
			+'    /* Ensures images don\'t have borders or text-decorations applied to them by default. */'
			+'    img,'
			+'    a img {'
			+'    	border:0;'
			+'    	outline:none;'
			+'    	text-decoration:none;	    '
			+'    }'
			+''
			+'    /* Styles Yahoo\'s auto-sensing link color and border */'
			+'    .yshortcuts a {'
			+'			border-bottom: none !important;'
			+'    }'
			+'    '
			+'    /* Styles the tel URL scheme */'
			+'    a[href^=tel],'
			+'		.mobile_link,'
			+'		.mobile_link a {'
			+'	    color:#fd8425 !important;'
			+'			text-decoration: underline !important;'
			+'    }'
			+'	'
			+'	a { text-decoration:underline;'
			+'		color:#ffffff;'
			+'		}'
			+'  '
			+'    /* Media queries for when the viewport is smaller than the default email width but not too narrow. */'
			+'    @media screen and (max-device-width: 600px), screen and (max-width: 600px) {'
			+''
			+'			/* Constrains email width for small screens */'
			+'			table[class="email-container"] {'
			+'				width: 100% !important;'
			+'			}'
			+'			/* Constrains tables for small screens */'
			+'			table[class="fluid"] {'
			+'				width: 100% !important;'
			+'			}'
			+'			'
			+'			/* Forces images to resize to full width of their container */'
			+'			img[class="fluid"],'
			+'			img[class="force-col-center"] {'
			+'				width: 100% !important;'
			+'				max-width: 100% !important;'
			+'				height: auto !important;'
			+'			}'
			+'			/* And centers these ones */'
			+'				img[class="force-col-center"] {'
			+'				margin: 0 auto !important;'
			+'			}'
			+'			'
			+'			/* Forces table cells into rows */'
			+'			td[class="force-col"],'
			+'			td[class="force-col-center"] {'
			+'				display: block !important;'
			+'				width: 100% !important;'
			+'				clear: both;'
			+'			}'
			+'			/* And centers these ones */'
			+'			td[class="force-col-center"] {'
			+'				text-align: center !important;'
			+'			}'
			+'			'
			+'			/* Forces table cells into rows */'
			+'			/* Floats a previously stacked image to the left */'
			+'			img[class="col-3-img-l"] {'
			+'				float: left;'
			+'				margin: 0 15px 15px 0;'
			+'			}'
			+'			/* Floats a previously stacked image to the right */'
			+'			img[class="col-3-img-r"] {'
			+'				float: right;'
			+'				margin: 0 0 15px 15px;'
			+'			}'
			+'			'
			+'			/* Makes buttons full width */'
			+'			table[class="button"] {'
			+'				width: 100% !important;'
			+'			}'
			+'       '
			+'    }'
			+''
			+'    /* Media queries for when the viewport is narrow. */'
			+'    /* Rules prefixed with \'hh-\' (for \'handheld\') repeat much of what\'s above, but these don\'t trigger until the smaller screen width. */'
			+'    @media screen and (max-device-width: 425px), screen and (max-width: 425px) {'
			+''
			+'			/* Helper only visible on handhelds. All styles are inline along with a `display:none`, which this class overrides */'
			+'			div[class="hh-visible"] {'
			+'				display: block !important;'
			+'			}'
			+'			'
			+'			/* Center stuff */'
			+'			div[class="hh-center"] {'
			+'				text-align: center;'
			+'				width: 100% !important;'
			+'			}'
			+'			'
			+'			/* Constrain tables for small screens */'
			+'			table[class="hh-fluid"] {'
			+'				width: 100% !important;'
			+'			}'
			+'			'
			+'			/* Force images to resize to full width of their container */'
			+'			img[class="hh-fluid"],'
			+'			img[class="hh-force-col-center"] {'
			+'				width: 100% !important;'
			+'				max-width: 100% !important;'
			+'				height: auto !important;'
			+'			}'
			+'			/* And center these ones */'
			+'			img[class="hh-force-col-center"] {'
			+'				margin: auto !important;'
			+'			}'
			+'			'
			+'			/* Force table cells into rows */'
			+'			td[class="hh-force-col"],'
			+'			td[class="hh-force-col-center"] {'
			+'				display: block !important;'
			+'				width: 100% !important;'
			+'				clear: both;'
			+'			}'
			+'			/* And center these ones */'
			+'			td[class="hh-force-col-center"] {'
			+'				text-align: center !important;'
			+'			}'
			+'			'
			+'			/* Stack the previously floated images */'
			+'			img[class="col-3-img-l"],'
			+'			img[class="col-3-img-r"] {'
			+'				float: none !important;'
			+'				margin: 15px auto !important;'
			+'				text-align: center !important;'
			+'			}'
			+''
			+'  }'
			+'          '
			+'  </style>'
			+'</head>'
			+'<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" bgcolor="#e9e9e9" style="margin:0; padding:0; -webkit-text-size-adjust:none; -ms-text-size-adjust:none;">'
			+'<table cellpadding="0" cellspacing="0" border="0" width="101%" id="bodyTable" style="border-collapse: collapse;table-layout: fixed;margin:0 auto;"><tbody><tr>'
			+'  <td>'
			+' '
			+'  <!-- This table wraps the whole body email within it\'s width (600px), sets the background color (white) and border (thin, gray, solid) -->'
			+''
			+'  <table border="0" width="600" cellpadding="0" cellspacing="0" align="center" bgcolor="#f4f4f4" style="margin: auto;" class="email-container">'
			+'    '
			+'    <!-- Single Fluid Image, No Crop : BEGIN -->      <!-- Single Fluid Image, No Crop : END -->'
			+'    '
			+'    <!-- Full Width, Fluid Column : BEGIN -->      <!-- Full Width, Fluid Column : END -->'
			+'    '
			+'    <!-- Two Columns, With Padding ==> Stacked Layout : BEGIN -->      <!-- Two Columns, With Padding ==> Stacked Layout : END -->'
			+'    <!-- Full Width, Fluid Column : BEGIN -->'
			+'    <tbody><tr>'
			+'      <td><a href="http://www.guardrisk.co.za/en" "target="_blank"?utm_source=PI&utm_medium=BANNER&utm_term=HOLLARD&utm_campaign=HOLLARD "target="_blank"?utm_source=PI&utm_medium=BANNER&utm_term=HOLLARD&utm_campaign=HOLLARD "target="_blank"><img src="http://www.mmiinternational.com/img/logos/Guardrisk-01.png" width="100%" height="auto" alt="Get Affordable credit life insurance with Guardrisk"></a></td>'
			+'    </tr>'
			+'      <tr>'
			+'        <td align="center" style="padding:10px; background-color:#fff"><table width="100%" border="0" cellspacing="8" cellpadding="6">'
			+'          <tbody>'
			+'            <tr>'
			+'              '
			+'              <td width="94%" style="font-family:&#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size:13px; line-height:19px; color:#000">Dear '+data['name']+',</td>'
			+'            </tr>'
			+'            <tr>'
			+'              '
			+'              <td style="font-family:&#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size:13px; line-height:19px; color:#000">Following your enquiry, I am pleased to confirm your car insurance quotation based upon following details you supplied:'
			+''
			+'				</td>'
			+'            </tr>'
			+'            <tr>'
			+''
			+'              <td style="font-family:&#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size:13px; line-height:19px; color:#000">Smoker: <strong>'+data['smoker']+'</strong><br/>Qualification level: <strong>'+data['qualification']+'</strong><br/>Income level: <strong>'+data['income']+'</strong><br/>Cover amount: <strong>'+data['Credit life cover amount']+'</strong><br/>'
			+'				';
			html = html +'				</td>'
			+'            </tr>';



			html = html + '<tr>'
			+''
			+'              <td style="font-family:&#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size:13px; line-height:19px; color:#000">Please review these details to ensure that they are correct.</td>'
			+'            </tr>'
			+'            <tr>'
			+'              <td style="font-family:&#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size:13px; line-height:19px; color:#000">Based upon this information, we are delighted to confirm that your monthly premium will be only: <strong>R251</strong></td>'
			+'            </tr>'
			+''
			+'            <tr>'
			+'              	<td style="font-family:&#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size:13px; line-height:19px; color:#000">Should you wish to take advantage of this quotation simply contact us by:'
			+'				<br/>Telephone: <a href style="color:black">+27710629000</a>'
			+'				<br/>Email: <a style="color:black" href="hello@finchatbot.com">hello@guardrisk.com</a>'
			+'				</td>'
			+'          </tr>'
			+''
			+'            <tr>'
			+'              <td style="font-family:&#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size:13px; line-height:19px; color:#000">Many thanks,<br/>Qutoation Team</td>'
			+'            </tr>'
			+''
			+''
			+'          </tbody>'
			+'        </table></td>'
			+'      </tr>'
			+'      '
			+'      <tr>'
			+'        <td style="padding-left:20px; padding-top:15px; padding-right:5px; padding-bottom:15px; background-color:yellow; font-family:&#39;Helvetica Neue&#39;, Helvetica, Arial, sans-serif; font-size:8px; line-height:19px; color:#ffffff">Copyright © 2016 Guardrisk is a registered short-term insurer and an authorised FSP (No. 33970). Guardrisk is an authorised FSP (No. 45741) and its product offering is underwritten by Sanlam Life Insurance Limited, a registered long-term insurer. Ts & Cs apply.</td>'
			+'      </tr>'
			+''
			+''
			+'</tbody></table>'
			+''
			+'    <!-- Email Container : END -->'
			+'  '
			+'  <!-- Footer : BEGIN --><!-- Footer : END -->'
			+''
			+'</td></tr></tbody></table>'
			+''
			+'</body></html>';

  		}



		if (type === "Credit life") {
			process.env.MAIL_URL = "smtp://postmaster%40finchatbot.com:5e66679eec3180b029b627343e020848@smtp.mailgun.org:587";
		    // check([to, from, subject, text], [String]);
		    // Let other method calls from the same client start running,
		    // without waiting for the email sending to complete.
		    this.unblock();
		    Email.send({
			   	to: data['email'],
			    from: "hello@guardrisk.com",
			    subject: 'Your quote',
			    html: html
		    });
		}

  	},
});



