import React, { Component } from 'react';
import {StyleSheet,View,TextInput,Text,SafeAreaView,StatusBar,Button} from "react-native"

import Forms from './src/components/Forms'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ValorA:2,
      Valor:1,
      ValorC:1,
      First:true , 
      StringA:' ',
      StringB:' ',
      StringC:' ',
      StringFinal:' ',
      x:0,
      cont:0
    };
  }

 SerieA = () => {
  this.state.StringA+= `${this.state.ValorA}, `;
  this.state.ValorA += 2;
  console.log(this.state.StringA);

  var StringFinal = this.state.StringA;
  this.setState({StringFinal});
  }

 SerieB = () => {
  let a = this.state.x + this.state.Valor;
  let b = this.state.x;
  if(this.state.First){
    this.state.StringB = `${this.state.x}, ${this.state.Valor}, `
    let First = false;
    this.setState({First});
  }else{
    this.state.StringB += `${a}, `
  }
  this.setState({
    Valor: b,
    x: a,
  });

  var StringFinal = this.state.StringB;
  this.setState({StringFinal});
 } 
  
 SerieC = () => {
  this.state.cont = this-state.cont +1;
  this.state.ValorC= cont * this.state.ValorC;
  this.state.StringC += `${this.state.ValorC}, `;

  var StringFinal = this.state.StringC;
  this.setState({StringFinal});
} 

render(){
    return (
      <>
      <View>
      <SafeAreaView style={styles.safeArea}>
      <Text style={styles.titleApp}>Examen_Triage</Text>
      <Text style={styles.input}>Respuesta:{this.state.StringFinal}</Text>
      </SafeAreaView>
      
        <Button title="Pares" onPress={this.onSubmitSerieA} />
        <Button title="Fibonacci" onPress={this.onSubmitSerieB} />
        <Button title="Multiplicar" onPress={this.onSubmitSerieC} /> 
      </View>
      </>
    );
    }
  }

const styles = StyleSheet.create({

  safeArea:{
    backgroundColor: "#FFE57C",
    height:200,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    alignItems:"center"
  },

  titleRes:{
    fontSize:20,
    fontWeight:"100",
    color: '#000',
    textAlign:"center"


  },
  input:{
    height:50,
    backgroundColor: "#fff",
    borderWidth:1,
    borderColor: 'red',
    borderRadius:5,
    width:"100%",
    marginRight:5,
    marginLeft:-5,
    marginBottom:10,
    paddingHorizontal:20,
    color: "#000",
},
  titleApp:{
    fontSize:25,
    fontWeight:"bold",
    color: '#000',
    marginTop:15,
    textAlign:'center'
  }

})