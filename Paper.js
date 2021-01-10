class Paper {
    constructor(x,y,r) {

        var options = {
            'isStatic':true,
            'restitution' : 0.3,
            'friction' : 50,
            'density' : 1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,options);

        World.add(world, this.body);

    }



    display() {
        var PPOS = this.body.position;


        push();
        translate(PPOS.x,PPOS.y);
        rectMode(CENTER);
        strokeWeight(5);
        fill("orange");
        ellipse(0,0,this.r,this.r);
        pop();


    }
};
