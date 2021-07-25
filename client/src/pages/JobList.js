import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dateFormat from 'dateformat';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { QUERY_ALL_JOBS } from '../utils/queries';

export default function jobList() {
    const { data } = useQuery(QUERY_USER)
    let user;

    if (data) {
        user = data.user;
    }

    return (
        <>

        </>
    )
}