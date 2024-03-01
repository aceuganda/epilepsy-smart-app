import { createAsyncThunk } from '@reduxjs/toolkit';
import { JOURNALS_URL, GRATEFULLS_URL, JOURNAL_URL,GRATEFULL_URL } from '../../config/urls';
import createAxiosInstance from '../../axios';

export const getAllUserGratefulls = createAsyncThunk(
  'gratefull/getData',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await createAxiosInstance().get(`${GRATEFULLS_URL}/${userId}`);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const postUserGratefuls = createAsyncThunk(
  'grateful/postData',
  async (gratefulData, { rejectWithValue }) => {
    try {
      const { data } = await createAxiosInstance().post(`${GRATEFULLS_URL}`, gratefulData);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);


export const deleteUserGrateful = createAsyncThunk(
  'grateful/deleteData',
  async (Id, { rejectWithValue }) => {
    try {
      const { data } = await createAxiosInstance().delete(`${GRATEFULL_URL}/${Id}`);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const getAllUserJournals = createAsyncThunk(
  'journals/getData',
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await createAxiosInstance().get(`${JOURNALS_URL}/${userId}`);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const postUserJournal = createAsyncThunk(
  'journals/postData',
  async (journalData, { rejectWithValue }) => {
    try {
      const { data } = await createAxiosInstance().post(`${JOURNALS_URL}`, journalData);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const updateUserJournal = createAsyncThunk(
  'journals/patchData',
  async (journalData, { rejectWithValue }) => {
    try {
      const { data } = await createAxiosInstance().patch(`${JOURNAL_URL}/${journalData.id}`, {
        title: journalData.title,
        notes: journalData.notes
      });
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);

export const deleteUserJournal = createAsyncThunk(
  'journals/deleteData',
  async (journalId, { rejectWithValue }) => {
    try {
      const { data } = await createAxiosInstance().delete(`${JOURNAL_URL}/${journalId}`);
      return data;
    } catch (err) {
      if (err.response && err.response.data) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
);
