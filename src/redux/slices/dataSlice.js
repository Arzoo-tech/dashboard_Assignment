import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    tableData: [],
    headers: [],
    workflowSteps: [],
  },
  reducers: {
    setTableData: (state, action) => {
      state.tableData = action.payload;
    },
    setHeaders: (state, action) => {
      state.headers = action.payload;
    },
    setWorkflowSteps: (state, action) => {
      state.workflowSteps = action.payload;
    },
  },
});

export const { setTableData, setHeaders, setWorkflowSteps } = dataSlice.actions;

export const fetchData = () => async (dispatch) => {
  const response = await axios.get('/data.json');
  const { table_data, table_headers, workflow_steps } = response.data;

  dispatch(setTableData(table_data));
  dispatch(setHeaders(table_headers));
  dispatch(setWorkflowSteps(workflow_steps));
};

export default dataSlice.reducer;
