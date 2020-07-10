import React, { useState, useEffect, Fragment } from 'react'

import Header from './components/Header/Header'

function App() {
    const [leads, setLeads] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/leads/')
            .then(response => response.json())
            .then(leads => {
                setLeads(leads)
            })
    }, [])

    return (
        <Fragment>
            <Header />
            {leads.length ? (
                leads.map((lead, index) => {
                    return (
                        <div key={index}>
                            <p>{lead.message}</p>
                            <img src={lead.photo} />
                        </div>
                    )
                })
            ) : <p>Нет лидов</p>}
        </Fragment>
    )
}

export default App
