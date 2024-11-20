import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/slices/dataSlice';
import CustomTable from './Table';
import Workflow from './Workflow';
import styles from '../styles/Dashboard.module.scss';

const Dashboard = () => {
  const dispatch = useDispatch();

  const headers = useSelector((state) => state.data.headers);
  const tableData = useSelector((state) => state.data.tableData);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className={styles.dashboard}>
      <div className={styles['content-container']}>
        <div className={styles['table-container']}>
          {headers.length > 0 && tableData.length > 0 ? (
            <CustomTable initialHeaders={headers} initialData={tableData} />
          ) : (
            <p>Loading table data...</p>
          )}
        </div>
        <div className={styles['workflow-container']}>
          <Workflow />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
