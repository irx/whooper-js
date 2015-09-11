var whooper = {
	draw: function(c, color, frame){
		frame = frame-(100*Math.floor(frame/100))
		var invf = frame;
		if(frame>50) invf = 100 - frame;
		var ctx = c.getContext("2d");
		ctx.clearRect(0,0,150,150);
		ctx.translate(75,75);
		 ctx.rotate(frame*Math.PI/50);
		  ctx.fillStyle = color;
		  ctx.fillRect(-50,-5,100,10);
		  	ctx.translate((invf*25/50)+((25*Math.sqrt(2)/2)*invf/50),40*(1-(invf/50))+(25*((Math.sqrt(2)/2)*invf/50)));
		  	 ctx.rotate(-(invf*Math.PI/200));
		  	  ctx.fillRect(-50/(1+(invf/50)),-10,100/(1+(invf/50)),10);
		  	 ctx.rotate((invf*Math.PI/200));
		  	ctx.translate(-((invf*25/50)+((25*Math.sqrt(2)/2)*invf/50)),-(40*(1-(invf/50))+(25*((Math.sqrt(2)/2)*invf/50))));
		  	ctx.translate((invf*25/50)+((25*Math.sqrt(2)/2)*invf/50),-(40*(1-(invf/50))+(25*((Math.sqrt(2)/2)*invf/50))));
		  	 ctx.rotate(invf*Math.PI/200);
		  	  ctx.fillRect(-50/(1+(invf/50)),0,100/(1+(invf/50)),10);
		  	 ctx.rotate(-(invf*Math.PI/200));
		  	ctx.translate(-((invf*25/50)+((25*Math.sqrt(2)/2)*invf/50)),40*(1-(invf/50))+(25*((Math.sqrt(2)/2)*invf/50)));
		 ctx.rotate(-(frame*Math.PI/50));
		ctx.translate(-75,-75);
	},
	create: function(obj){
		var nw = {
			color: "#FFFFFF",
			state: 0,
			set: function(frame){
				this.state = frame;
				whooper.draw(obj, this.color, frame);
			},
			animate: function(start, end, duration){
				var adding = false;
				if(start<end) adding = true;
				var frames = Math.abs(end - start);
				var interval = duration/frames;
				set = this.set;
				var loop = setInterval(function(){
					set(start);
					var bigger, smaller;
					if(adding){
						start++;
						smaller = start;
						bigger = end;
					}else{
						start -= 1;
						smaller = end;
						bigger = start;
					}
					if(smaller > bigger) clearInterval(loop);
				}, interval);
				this.state = end;
			},
			rotate: function(duration){
				var state = this.state;
				var check = state/50;
				if(check != Math.floor(check)){
					var start = state - (100*Math.floor(state/100));
					var end;
					if(Math.abs(state-0)<Math.abs(state-50)) end = 0;
					else if(Math.abs(state-100)<Math.abs(state-50)) end = 100;
					else end = 50;
					this.animate(start, end, duration);
					//state = 0;
				}else this.animate(state, state+50, duration);
			}
		};
		return nw;
	},
	Instance: function(obj){
		//this.obj = obj;
		this.color = "#FFFFFF";
		this.state = 0;
		this.setstate = function(state){
			this.state = state;
		};
		this.set = function(frame){
			this.state = frame;
			whooper.draw(obj, this.color, frame);
		};
		this.animate = function(start, end, duration){
			var adding = false;
			if(start<end) adding = true;
			var frames = Math.abs(end - start);
			var interval = duration/frames;
			set = this.set;
			var loop = setInterval(function(){
				set(start);
				var bigger, smaller;
				if(adding){
					start++;
					smaller = start;
					bigger = end;
				}else{
					start -= 1;
					smaller = end;
					bigger = start;
				}
				if(smaller > bigger) clearInterval(loop);
			}, interval);
			this.state = end;
		};
		this.rotate = function(duration){
			var state = this.state;
			var check = state/50;
			if(check != Math.floor(check)){
				var start = state - (100*Math.floor(state/100));
				var end;
				if(Math.abs(state-0)<Math.abs(state-50)) end = 0;
				else if(Math.abs(state-100)<Math.abs(state-50)) end = 100;
				else end = 50;
				this.animate(start, end, duration);
				//state = 0;
			}else this.animate(state, state+50, duration);
		};
	}
}
