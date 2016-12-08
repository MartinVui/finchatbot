To add the bot to a client's website :
Just copy-paste these few lines

add this script to the <header> of the html file or the javascript file:

-------------------------------------------------------------------------------------------------------------------------
<script type='text/javascript'>
  	function showIFrame() {  
 		var iframe = document.getElementById("myiframe"); 

 		if(iframe.style.visibility=="visible") {
 			iframe.style.visibility="hidden"; 
 		}
 		else {iframe.style.visibility="visible"; 
 		}
	} 

	var TIMEOUT = setTimeout(showIFrame, 15000);
  	</script>
-----------------------------------------------------------------------------------------------------------------------








add the iframe and the clickable logo to the <body> :

------------------------------------------------------------------------------------------------------------------------
<iframe src='https://finchatbotframe.herokuapp.com' id='myiframe'>
	<p>Yo</p>
</iframe>
<img src='images/logo.png' class='clickable_logo' onclick='showIFrame(); clearTimeout(TIMEOUT);' />
-------------------------------------------------------------------------------------------------------------------------








and a bit of css : 

----------------------------------------------------------------------------------------------------------------------
#myiframe {
	z-index: 999;
	border:none;	
  	height: 80%;
  	width: 25%;
	position: fixed;
  	right:1%;
  	bottom:15%;
  	visibility: hidden;
}

.clickable_logo {
	position: fixed;
	bottom: 10px;
	right: 10px;
	z-index: 1000;
	height: 100px;
	width: auto;
}
--------------------------------------------------------------------------------------------------------------------
