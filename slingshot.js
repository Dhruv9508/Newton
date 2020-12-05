class Slingshot{
    constructor(bodyA,bodyB, pointB){
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            pointB: pointB,
            stiffness: 2,
            length: 400
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointBx = this.sling.pointB.x+this.sling.bodyB.position.x;
            var pointBy = this.sling.pointB.y+this.sling.bodyB.position.y;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointBx, pointBy);
        }
    }
        
       
    fly (){
        this.sling.bodyA=null
    }
}