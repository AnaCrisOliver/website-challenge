import React, { Component }  from 'react';
import Header from '../../components/header/Header';

class Clients extends Component {

	render() {
    document.title = "Clients";
    return (
        <section>
            <Header />
        </section>
    );
    }
}

export default Clients;