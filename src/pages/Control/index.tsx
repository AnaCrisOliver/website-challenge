import React, { Component }  from 'react';
import Header from '../../components/header/Header';

class Control extends Component {

	render() {
    document.title = "Controle";
    return (
        <section>
            <Header />
        </section>
    );
    }
}

export default Control;