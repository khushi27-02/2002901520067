import React from 'react';

class NumberList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: [],
    };
  }

  componentDidMount() {
    const numbers = [];
    for (let i = 1; i <= 23; i++) {
      if (i % 4 !== 0 && i % 6 !== 0) {
        numbers.push(i);
      }
    }
    this.setState({ numbers });
  }

  render() {
    const { numbers } = this.state;
    return (
      <div>
        <pre>{JSON.stringify({ numbers }, null, 2)}</pre>
      </div>
    );
  }
}
export default NumberList;
