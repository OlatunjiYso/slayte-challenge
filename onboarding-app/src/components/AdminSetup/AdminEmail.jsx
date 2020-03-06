import React from 'react';

import './adminEmail.scss';

const adminEmail = ({email, removeMail}) => (
<span className='admin-email'> {email} <i className=" delete-email remove circle icon" onClick={()=> (removeMail(email))}></i> </span>
);

export default adminEmail;