	const canvas =document.getElementById('canvas');
   const context = canvas.getContext('2d');
   let array = [];
	const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
	delta = [-7, 1, 7]
	colorArray=['red', 'green', 'orange', 'aqua', 'blue', 'lime', 'yellow', 'brown', 'blush', 'amber', 'amaranth', 'jade', 'gold']

	const creatbox= function (count, canvasWidth, canvasHeight) {
        canvas.width= canvasWidth;
   		canvas.height =canvasHeight;
        for(let i=0;i<count;i++){
           array[i]= {
           	x:rand(canvas.width-30),
           	y:rand(canvas.height-30), 
           	width: 30,
            height: 30,
            xDelta: delta[rand(3)-1],
            yDelta: delta[rand(3)-1],
            xdir: 1,
            ydir: -1,	 	
            color:colorArray[rand(13)-1],
            draw: function(){
           	 context.fillStyle =colorArray[rand(13)-1]; 
    		 context.fillRect(this.x, this.y, this.width, this.height);
    	},
    	    update: function(){
              if(this.x + this.width >= canvasWidth || this.x <= 0){
                this.xdir = this.xdir*(-1);
                  }
            
            if(this.y + this.height >= canvasHeight || this.y <= 0){
                this.ydir = this.ydir*(-1);
                }
             
            this.x += this.xdir * this.xDelta;
            this.y += this.ydir * this.yDelta;
    	}
           }
        };
        	
        };
        creatbox(30,500,500)
     const loop = function (){
   		context.clearRect(0,0,canvas.width,canvas.height)
      for(i = 0; i < array.length; i++){
      	array[i].draw()
      	array[i].update()
      	
      }
      requestAnimationFrame(loop);
	};
    loop();