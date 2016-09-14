var motionAI_botId=0;
var motionAI_width=400;
var motionAI_height=470;

function motionAI_Init(bot,showprompt,width,height){
	if(width)
		motionAI_width=width;
	if(height)
		motionAI_height=height;
	motionAI_botId=bot;
	if(showprompt){
		var chatprompt=document.createElement('div');
		chatprompt.className='chatprompt';
		chatprompt.onclick=motionAI_Open;
		chatprompt.innerHTML='<img src="https://api.motion.ai/sdk/chat.png" style="margin:15px" width="30"/>';
		document.body.appendChild(chatprompt);
	}}

var isMobile={
	Android:function(){
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry:function(){
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS:function(){
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera:function(){
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows:function(){
		return navigator.userAgent.match(/IEMobile/i);
	},
	any:function(){
		return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows());
	}
};

function motionAI_Open(){
	if(isMobile.any()){
		window.open('https://api.motion.ai/webchat/'+motionAI_botId,"motionAI_chat","width="+motionAI_width+",height="+motionAI_height);
	}else{Modal.open({content:'<iframe style="width:'+motionAI_width+'px; height:'+motionAI_height+'px; border:0" src="https://api.motion.ai/webchat/'+motionAI_botId+'"></iframe>',draggable:false,openCallback:function(){}});}}