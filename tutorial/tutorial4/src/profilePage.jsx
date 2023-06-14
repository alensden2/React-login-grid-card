// code from my tutorial 3

import React, { useState, useEffect } from 'react';
import Navbar from "./components/navbar";
import { useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function ProfilePage() {
    const [userData, setUserData] = useState(null);

    const location = useLocation();
    const { firstName, email, lastName } = location.state;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://express-t4.onrender.com/api/users');
                setUserData(response.data);
                console.log(response);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ backgroundColor: 'white', minHeight: '100vh' }}>
            <div>
                <Navbar sx={{ marginBottom: 2 }} />
                {userData && userData.map((item) => (
                    <Paper
                        key={item._id}
                        sx={{
                            p: 2,
                            margin: 'auto',
                            marginTop: 2,
                            marginBottom: 2,
                            maxWidth: 500,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <ButtonBase sx={{ width: 128, height: 128 }}>
                                    <Img alt="complex" src={item.picture} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {item.address}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Company: {item.company}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Email: {item.email}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            Phone: {item.phone}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                ))}
            </div>
        </div>
    );
}

export default ProfilePage;
