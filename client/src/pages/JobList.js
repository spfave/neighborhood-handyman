import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

export default function jobList() {
    const { data } = useQuery(QUERY_USER)
}