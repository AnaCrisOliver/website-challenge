import React, { Component }  from 'react';
import Header from '../../components/header/Header';

class Calendar extends Component {

	render() {
    document.title = "Calendário";
    return (
        <section>
            <Header />
        </section>
    );
    }
}

export default Calendar;