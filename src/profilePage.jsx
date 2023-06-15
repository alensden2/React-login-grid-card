// code from my tutorial 3

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./components/navbar";

import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function ProfilePage() {
    const [userData, setUserData] = useState(null);

    const navigate = useNavigate();

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
    const handleGridItemClick = (id) => {
        navigate(`/individualPage/${id}`);
    };
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
                        onClick={() => handleGridItemClick(item._id)}
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


// mui react grid - https://mui.com/material-ui/react-grid/