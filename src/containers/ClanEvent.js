import React, { Component } from 'react';
import EventForm from '../components/EventForm';
import EventList from '../components/EventList';

class ClanEvent extends Component {
    render() {
        return (
            <>
                <EventForm />
                <EventList />
            </>
        );
    }
}

export default ClanEvent;
