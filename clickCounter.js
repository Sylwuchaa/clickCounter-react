class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.result

  }
  handleMathClick = (type='reset', number = 1) => {
    if (type === 'subtraction') {
      this.setState(prevState => ({
        count: prevState.count+1,
        result: prevState.result - number
      }))
    } else if (type === 'reset') {
      this.setState(prevState => (
          {
            count: prevState.count + 1,
            result: 0 //  <-- this.props.result  //
      }
      ))
    } else if (type === 'addition') {
      this.setState(prevState => ({
        count: prevState.count+1,
        result: prevState.result + number
      }))
    }
  }
  // --------------- without arrow function -------------
  // handleMathClick(type = 'reset', number = 1) {
  //   if (type === 'subtraction') {
  //     this.setState(prevState => ({
  //       count: prevState.count+1,
  //       result: prevState.result - number
  //     }))
  //   } else if (type === 'reset') {
  //     this.setState(prevState => (
  //         {
  //           count: prevState.count + 1,
  //           result: 0 //  <-- this.props.result  //

  //     }
  //     ))
  //   } else if (type === 'addition') {
  //     this.setState(prevState => ({
  //       count: prevState.count+1,
  //       result: prevState.result + number
  //     }))
  //   }
  // }
  render() {
    return (
      <>
      <button onClick={this.handleMathClick('subtraction', 10)}>-10</button>
      <button onClick={() => this.handleMathClick('subtraction')}>-1</button>
      <button onClick={this.handleMathClick.bind(this, 'reset')}>Reset</button>
      <button onClick={() => this.handleMathClick('addition')}>+1</button>
      <button onClick={() => this.handleMathClick('addition', 10)}>+10</button>
      <h1>Number of clicks: {this.state.count}</h1>
      <h1>Result: {this.state.result}</h1>
      </>

    )
  }
}

ReactDOM.render(<Counter result={10} />, document.getElementById('root'));