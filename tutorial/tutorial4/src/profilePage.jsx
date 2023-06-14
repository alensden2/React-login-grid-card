// code from my tutorial 3

import Navbar from "./components/navbar";
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';


function ProfilePage() {
    const location = useLocation();
    const { firstName, email, lastName } = location.state;

    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
          <Navbar />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 'calc(100vh - 64px)',
            }}
          >
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', textAlign: 'center' }}>
              <Typography variant="h3" component="h2" style={{ marginBottom: '20px' }}>
                Welcome to your profile, {firstName} {lastName}!
              </Typography>
              
              <Typography variant="h3" component="h2" style={{ marginBottom: '20px' }}>
                You have logged in from {email}!
              </Typography>
            </div>
          </div>
        </div>
      );
}

export default ProfilePage;