   const canvas =document.getElementById('c1');
   const context = canvas.getContext('2d');
  
   const rand = function(num) {
  	return Math.floor(Math.random() * num) + 1;
	}
	delta = [-2, 1, 2];
   array=[];
   canvas.width=400;
   canvas.height =300;

   const background = new Image();
    background.src = 'https://us.123rf.com/450wm/migfoto/migfoto1802/migfoto180200005/94596999-ancient-greek-background-.jpg?ver=6';

   const goodGuyImg = new Image ();
   goodGuyImg.src = 'http://static.tumblr.com/a47d7ba3ee6a85c9f62b889422ac506b/ivnz3ns/y3bmg2o6f/tumblr_static_feilong-hdstance.gif'
;
   const badGuyImg =new Image();
   badGuyImg.src = 'https://img00.deviantart.net/3002/i/2017/276/a/e/mike_tyson_balrog_street_fighter_png_by_gasa979-dbpff83.png';
    
       const hero = {
        x: 0,
        y: 223,
        width: 50,
        height: 50,
        xDelta: 0,
        yDelta: 0,
    	image: goodGuyImg,
    	draw: function(){
    		 context.drawImage(this.image, this.x, this.y, this.width, this.height);
    	},
    	update: function(){
    		this.x += this.xDelta;
    		this.y += this.yDelta;
    	}
    };  

    const badGuys= function (count, canvasWidth, canvasHeight) {
        canvas.width= canvasWidth;
   		canvas.height =canvasHeight;

        for(let i=0;i<count;i++){
           array[i]= {
           	x:rand(canvas.width-50),
           	y:rand(canvas.height-50), 
           	width: 50,
            height: 50,
            xDelta: delta[rand(3)-1],
            yDelta: delta[rand(3)-1],
            xdir: 1,
            ydir: -1,
            image:badGuyImg,	 	
            draw: function(){
    		  context.drawImage(this.image,this.x,this.y,this.width,this.height);
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



   const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
document.addEventListener('keydown', function(event) {
	if(event.keyCode === rightKey) {
		hero.xDelta = 1;
        
  	}
  	if(event.keyCode === leftKey){
  		hero.xDelta = -1;
  	}
  	if(event.keyCode === upKey){
  		hero.yDelta = -1;
  	}
  	if(event.keyCode === downKey){
  		hero.yDelta = 1;
  	}

}, false);
document.addEventListener('keyup', function(event) {
	if(event.keyCode === rightKey) {
		hero.xDelta = 0;
        
  	}
  	if(event.keyCode === leftKey) {
		hero.xDelta = 0;
        
  	}
  	if(event.keyCode === upKey) {
		hero.yDelta = 0;
        
  	}
  		if(event.keyCode === downKey){
  		hero.yDelta = 0;
  	}
}, false);
 		
 		
 		 const draw = function(){
 		 	hero.draw();
    for (let i = 0; i < array.length; i++) {
        array[i].draw();
    }
 		 };

 		 const update = function(){
 		 	hero.update();
 		 	for (let i = 0; i < array.length; i++) {
        array[i].update();
        if((hero.x+hero.width)>= canvas.width){
        	hero.x = 0
        }
        if(hero.x<0){
        	(hero.x = canvas.width-hero.width)
        }
        if((hero.y+hero.height)>= canvas.height){
        	hero.y = 0
        }
         if(hero.y<0){
        	(hero.y = canvas.height-hero.height)
        }

    }

 		 }
 		  const stop = function(){
        for (let i = 0; i < array.length; i++) {
        if(hero.x < array[i].x +array[i].width/2 && hero.x + hero.width/2 > array[i].x && hero.y < array[i].y + array[i].height/2 && hero.y + hero.height/2 > array[i].y){
          
            
            alert("Game Over");

            }
    };
}
badGuys(12,500, 400);


     const loop = function (){

       context.drawImage(background, 0, 0, canvas.width, canvas.height);
       draw();
       update();
       stop();       
       requestAnimationFrame(loop);

     };
     
     loop();
