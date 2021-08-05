import React from 'react';
import ClientForm from '../components/ClientForm.js';
import JobForm from '../components/JobForm.js/index.js';



function NewClient() {
    return(
        <div>
        <ClientForm />
        <JobForm />
        </div>
    )
}

export default NewClient;