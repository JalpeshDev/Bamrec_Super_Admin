import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import AppLayout from '../../components/layout/layout';
import livingEnvironment from '../../Redux/Environment/action';

const Newsfeed = ({ match }: any) => {
  const dispatch = useDispatch();
  const { id } = match.params;
  return (
    <AppLayout>
      <div>
        <h1>Welcome to Newsfeed Page</h1>
      </div>
    </AppLayout>
  )
}
export default Newsfeed;
