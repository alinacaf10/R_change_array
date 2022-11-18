import React from "react";
import "./styles.css";
import CardForm from "./Form";
/*
По закрытию карты удаляйте ее из списка карт клиента
*/
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { number: "7653 7553 5693 9862", balance: 100 },
        { number: "7453 9736 0763 3474", balance: 400 },
        { number: "9577 7543 9379 9784", balance: 800 }
      ]
    };
  }
  handleCloseCard = (idx) => {
    const clone = this.state.cards.filter((card) => card.number !== idx);
    this.setState({ cards: clone });
  };

  handleOpenCard = (card) => {
    const array = this.state.cards;
    const newArr = [
      ...array.slice(0, card),
      { number: card.number, balance: card.balance },
      ...array.slice(card)
    ];
    console.log(card);
    this.setState({ cards: newArr });
  };

  render() {
    return (
      <div className="app">
        <CardForm handleOpenCard={this.handleOpenCard} />
        {this.state.cards.map(({ number, balance }, idx) => (
          <div key={number} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">
                Карта <br />
                {number}
              </h5>
              <div className="card-text">
                <ul className="list-group">
                  <li className="list-group-item">Баланс: {balance}</li>
                  <hr />
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.handleCloseCard(number)}
                  >
                    Закрыть карту
                  </button>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
