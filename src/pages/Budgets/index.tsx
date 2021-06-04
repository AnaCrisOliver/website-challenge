import React, { Component }  from 'react';
import Header from '../../components/header/Header';

class Budgets extends Component {

	render() {
    document.title = "Orçamentos";
    return (
        <section>
            <Header />
        </section>
    );
    }
}

export default Budgets;