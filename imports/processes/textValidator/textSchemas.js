export var emailSchema = new SimpleSchema({
	email : {
		type: String,
		regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	}
});

export var phoneNumberSchema = new SimpleSchema({
	phone : {
		type: String,
		regEx: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
	}
});

export var southAfricanIdNumber = new SimpleSchema({
	idNumber : {
		type: String,
		custom: function(){
			var result = true;
			allDigit = new RegExp(/^\d{13}$/);
			if (!allDigit.test(this.value)) {
				result = "Match error";
			}
			
			if(!(parseInt(this.value.charAt(10)) === 0) && !(parseInt(this.value.charAt(10)) === 1)){
				result = "Match error";
			}
			
			if(parseInt(this.value.charAt(11)) > 7){
				result = "Match error";
			}

			var lastDigit = -1;
			var a = 0;
			for(i = 0; i < 6; i++)
		   {
		      a = a + parseInt(this.value.charAt(2*i));
		    }
    		var b = 0;
			for(i = 0; i < 6; i++)
			{
			     b = b*10 + parseInt(this.value.charAt(2*i + 1));
		    }
			b = b*2;
		    var c = 0;
			do
			{
		    	c = c + b % 10
		    	b = (b - (b%10)) / 10
		    }while(b > 0)
		    c = c + a;
		    lastDigit = 10 -  (c % 10);
		    if (lastDigit === 10) {
		    	lastDigit = 0
		    }

			if(lastDigit !== parseInt(this.value.charAt(12))){
		    	result = "Match error";
		    }
				
			return result;
		}
	}
})

