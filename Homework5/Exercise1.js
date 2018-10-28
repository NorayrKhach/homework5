   const canvas =document.getElementById('canvas');
   const context = canvas.getContext('2d');
   

	let array = [];
	const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};

	delta = [-5, 0, 5]
	colorArray=['red', 'green', 'orange']

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
            color:colorArray[rand(3)-1],
            draw: function(){
           	 context.fillStyle = array[i].color
    		 context.fillRect(this.x, this.y, this.width, this.height);
    	},
    	    update: function(){
    		this.x += this.xDelta;
    		this.y += this.yDelta;
    	}
           }
           	array[i].draw();
        };
        	
        		};

creatbox(5,500,500)
