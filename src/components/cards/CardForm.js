import React, {Component, PropTypes} from 'react';
export default class CardForm extends Component {
    static propTypes = {
        saveData: PropTypes.func.isRequired
    };
    state = {
        id: '',
        name: '',
        aviable: '',
        cutDay: 1
    };
    addCard = (e) => {
        if (e)
            e.preventDefault();

        //const id = Math.floor((Math.random() * 10) + 1);
        //this.setState({id})

        this.props.saveData('/api/card', this.state);
        //this.setState({name: '', disponible: '', corte: ''});
    };
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState({name});
    };
    onDisponibleChange = (e) => {
        let aviable = e.target.value;
        aviable = parseInt(aviable)
        this.setState({aviable});
    };
    onCorteChange = (e) => {
        debugger
        let cutDay = e.target.value
        cutDay = parseInt(cutDay)
        this.setState({cutDay});
    }
    componentDidMount() {
        //$('select').material_select();
    }
    render() {
        return (
            <div className="add-player-form">
                <form onSubmit={this.addCard}>
                    <input type="text" value={this.state.name} placeholder="Nombre de la tarjeta" required onChange={this.onNameChange}/>
                    <input type="text" value={this.state.aviable} placeholder="Cantidad disponible actualmente" required onChange={this.onDisponibleChange}/>
                    <div className="input-field col s12">
                        <select value={this.state.cutDay} required onChange={this.onCorteChange}>
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Card"/>
                </form>
            </div>
        );
    }
}
