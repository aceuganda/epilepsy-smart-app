import React from 'react';
import Form from '../../components/form/Form';
import ResilienceActivitiesPageComponent from '../ResilienceActivities';
import Largebtn from '../../components/form/Buttons/Largebtn';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const ResetPassword = () => {
  return (
    <div>
      <ResilienceActivitiesPageComponent title="Reset Password">
        <Form>
          <div
            style={{
              marginTop: '20px',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '8px'
            }}
            className="">
            <div style={{ fontWeight: 600, paddingLeft: '10px' }}>Reset Password</div>
            <div style={{ padding: '10px' }}>
              <span style={{ fontWeight: 300 }}>
                Enter the email associated with your account and we will send an email with
                instructions to reset your passord
              </span>
            </div>
            <div style={{ padding: '8px', marginTop: '30px' }}>
              <div>
                <Box
                  sx={{
                    width: 300,
                    maxWidth: '100%'
                  }}>
                  <TextField fullWidth label="Password" id="fullWidth" />
                </Box>
                <Box
                  style={{ marginTop: '30px' }}
                  sx={{
                    width: 300,
                    maxWidth: '100%'
                  }}>
                  <TextField fullWidth label="Confirm password" id="fullWidth" />
                </Box>
              </div>
              <div style={{ marginTop: '20px', marginLeft: '25px' }}>
                <Largebtn title="Reset Password" link="/email/verification" />
              </div>
            </div>
          </div>
        </Form>
      </ResilienceActivitiesPageComponent>
    </div>
  );
};

export default ResetPassword;
