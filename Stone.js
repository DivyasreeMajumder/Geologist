class Stone{
    constructor(){
        var option={
            'restitution':0.8,
            'friction':0.9,
            'density':12.
        }
        //this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 150;
        this.height = 40;
        //World.add(world, this.body);
    }

    display(){
        
        
        
        
        strokeWeight(3);
        stroke('white')
        fill('red')
        rectMode(CENTER)
        rect(900,570, this.width, this.height);
        
      };
    };
