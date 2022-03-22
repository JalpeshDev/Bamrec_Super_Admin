import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import AppLayout from '../../components/layout/layout';
import livingEnvironment from '../../Redux/Environment/action';

const Family = ({ match }: any) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  return (
    <AppLayout>
      <div>
        <h1>Welcome to Family Page</h1>
      </div>
    </AppLayout>
  )
}
export default Family;
