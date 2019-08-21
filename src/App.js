import React from 'react';
import { db } from './firebase'




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      modulos: [],
      observaciones: '',
      moduloTemporal: '',

      products: []

    }
    this.handleChange = this.handleChange.bind(this);
    this.addTemporalToModule = this.addTemporalToModule.bind(this);
    this.handleSubmint = this.handleSubmint.bind(this)
  }

  componentDidMount() {

    db.collection('producto').get().then(snapShot => {
      const data = snapShot.docs.map(doc => doc.data());
      
      this.setState({
        //la info se presentade la siguiente manera
        // modulo:[]
        //observaciones:''
        products: data,
      })
    })

  }
  handleSubmint() {
    db.collection("producto").doc(this.state.name).set({
      name: this.state.name,
      modulos: this.state.modulos,
      observaciones: this.state.observaciones,
    })
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  addTemporalToModule(event) {
    event.preventDefault()
    this.setState(state =>{
      const modulos = state.modulos.concat(state.moduloTemporal);
      return {
        modulos,
        moduloTemporal:''
      }
    })

  }
  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <label> Nombre de Producto a Testear: </label><br></br>
          <input
            type='textfield'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          /><br></br>
          <label> Agregar Modulo </label><br></br>
          <input
            type='textfield'
            name='moduloTemporal'
            value = {this.state.moduloTemporal}
            onChange={this.handleChange}
          />
          <button onClick={this.addTemporalToModule}>+</button><br></br>
          <label> Agregar Observacion</label><br></br>
          <input
           type='textfield'
           name ='observaciones'
           value = {this.state.observaciones}
           onChange ={this.handleChange} /><br></br>
        </form>
        <h4>Name: {this.state.name} </h4>

        <h4>Observaciones: {this.state.observaciones} </h4>
        <h4> Modulos Temporal: {this.state.moduloTemporal}</h4>
        <h4>Modulos:  </h4>
        <ul>
          {this.state.modulos.map(modul => <li >{modul}</li>)}
        </ul>
        <button onClick = {this.handleSubmint}>toServer!</button>
      </div>
    )
  }

}

export default App;
