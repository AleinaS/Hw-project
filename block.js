class block extends baseclass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      Matter.Body.setAngle(this.body, angle);
    }
  }