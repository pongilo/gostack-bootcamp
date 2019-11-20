import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  // static defaultProps = {
  //   tech: 'Oculto'
  // }

  // Todo estado no react é imutavel, por isso o uso do setState e não de um push por exemplo
  state = {
    newTech: '',
    techs: []
  }

  // Executado assim que o componente aparece em tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  // Executa sempre que houver altereações nas props ou estado
  // componentDidUpdate(prevProps, prevState)
  // colocar undeline quando nao for usar um paramentro
  componentDidUpdate(_, prevState) {
    // this.props, this.state
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // Executado quando o componente deixa de existir
  componentWillUnmount() {}

  // Precisa ser em formato de aero function porque precisa ter acesso ao this
  // Fazer igual ao render não tem acesso a ele
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    // Copia todo array e adiciona o novo valor no final
    this.setState({
      newTech: '',
      techs: [...this.state.techs, this.state.newTech] 
    }); 
  }

  handleDelete = (tech) => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <>
        <ul>
          {this.state.techs.map(tech => (
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)} 
            />
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            onChange={this.handleInputChange} 
            value={this.state.newTech} 
          />
          <button type="submit">Enviar</button>
        </form>
      </>
    )
  }
}

export default TechList;