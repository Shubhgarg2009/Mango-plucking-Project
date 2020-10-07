class Tree {
    constructor(x,y){
        var opt = {
            isStatic : true,
            friction : 1,
            restitution : 0
        }
        this.body = Bodies.rectangle(x,y,50,50,opt);
        this.image = loadImage("tree.png")
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,300,300);
        pop();
    }
}