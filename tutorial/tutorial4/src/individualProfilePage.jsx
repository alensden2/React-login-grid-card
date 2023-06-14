import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './components/navbar';


function IndividualProfilePage() {
    const { id } = useParams();
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`https://express-t4.onrender.com/api/users/${id}`);
                setProfileData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, [id]);

    return (
        <div style={{ backgroundColor: '#d9d9d9', minHeight: '100vh' }}>
            <Box>
                <Box sx={{marginBottom : 2}}>
                    <Navbar />

                </Box>
                <Box sx={{padding : 5}}>
                    {profileData ? (
                        <Card>
                            <CardHeader
                                title={profileData.name}
                                subheader={`Registered: ${profileData.registered}`}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={profileData.picture}
                                alt="Profile Picture"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Email:</strong> {profileData.email}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Company:</strong> {profileData.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Phone:</strong> {profileData.phone}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>Address:</strong> {profileData.address}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <strong>About:</strong> {profileData.about}
                                </Typography>
                            </CardContent>
                        </Card>
                    ) : (
                        <p>Loading profile data...</p>
                    )}
                </Box>
            </Box>

        </div>
    );
}

export default IndividualProfilePage;


// reference mui card - https://mui.com/material-ui/react-card/ 