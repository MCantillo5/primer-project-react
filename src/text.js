import React from "react";

const styles = {
  text:{
    textAlign: 'center',
    marginTop: '100px',
  }
}

const Text = () =>{
  return(
    <text style={styles.text}>
      <h1>ESTE ES EL PRIMER <br></br>PROYECTO DE REACT</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing, elit mus habitasse tempor natoque ut, vel dapibus torquent lobortis velit.</p>
    </text>
  )
}

export default Text;