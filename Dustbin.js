class D1 {
    constructor(x,y,width,height) {
        var options = {
            'isStatic':true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }


      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("gray");
        rect(pos.x, pos.y, this.width, this.height);
      }

     
    };
        
 class D2 {
    constructor(x,y,width,height) {
        var options = {
            'isStatic':true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }


      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("gray");
        rect(pos.x, pos.y, this.width, this.height);
      }

     
    };




    class D3 {
        constructor(x,y,width,height) {
            var options = {
                'isStatic':true
            }
    
            this.body = Bodies.rectangle(x,y,width,height,options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
          }
    
    
          display(){
            var pos =this.body.position;
            rectMode(CENTER);
            fill("gray");
            rect(pos.x, pos.y, this.width, this.height);
          }
    
         
        };


 