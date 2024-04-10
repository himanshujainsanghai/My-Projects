function Random(){
  let number = Math.random() * 10;

  return <h4 style={{'color':'magenta'}}>
    hii this is the {number}
  </h4>

}
export default Random;