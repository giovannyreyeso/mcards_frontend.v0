import React, {Component, PropTypes} from 'react';
export default class CardForm extends Component {
    static propTypes = {
        addCard: PropTypes.func.isRequired
    };
    state = {
        nombre: '',
        disponible: '',
        corte: ''
    };
    addCard = (e) => {
        if (e)
            e.preventDefault();
        this.props.addCard(this.state);
        this.setState({name: '', disponible: '', corte: ''});
    };
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState({name});
    };
    onDisponibleChange = (e) => {
        let disponible = e.target.value;
        disponible = parseInt(disponible)
        this.setState({ disponible });
    };
    onCorteChange = (e) => {
      const corte = e.target.value;
      this.setState({corte});
    }
    render() {
        return (
            <div className="add-player-form">
                <form onSubmit={this.addCard}>
                    <input type="text" value={this.state.name} placeholder="Card Name" required onChange={this.onNameChange}/>
                    <input type="text" value={this.state.disponible} placeholder="Disponible" required onChange={this.onDisponibleChange} />
                    <input type="text" value={this.state.corte} placeholder="Fecha Corte YYYY/MM/DD" required onChange={this.onCorteChange} />
                    <input className="waves-effect waves-light btn"type="submit" value="Add Card"/>
                </form>
            </div>
        );
    }
}
