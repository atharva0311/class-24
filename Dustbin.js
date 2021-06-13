class Dustbin
{
constructor(x,y,width,height,thickness)
{
    var options=
    {
        isStatic:true
    }
    this.width=width
    this.height=height
    this.thickness=thickness
    

    this.bottomBody=Bodies.rectangle(x,y,this.width,this.thickness,options)
    this.leftBody=Bodies.rectangle(x-this.width/2,y-this.height/2,this.thickness,this.height,options)
    this.rightBody=Bodies.rectangle(x+this.width/2,y-this.height/2,this.thickness,this.height,options)

    World.add(world,this.bottomBody)
    World.add(world,this.leftBody)
    World.add(world,this.rightBody)
}
display()
{
    push()
    rectMode(CENTER)      
    fill("green")
    rect(this.bottomBody.position.x,this.bottomBody.position.y,this.width,this.thickness)
    rect(this.leftBody.position.x,this.leftBody.position.y,this.thickness,this.height)
    rect(this.rightBody.position.x,this.rightBody.position.y,this.thickness,this.height)
    pop()
}
}