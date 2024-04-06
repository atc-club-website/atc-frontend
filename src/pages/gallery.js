import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Navbar from '../widgets/navbar';
import Footer from '../widgets/footer';
import { useNavigate } from 'react-router-dom';
import CollectionsTwoToneIcon from '@mui/icons-material/CollectionsTwoTone';
import PhotoAlbumTwoToneIcon from '@mui/icons-material/PhotoAlbumTwoTone';
import DescriptionTwoToneIcon from '@mui/icons-material/DescriptionTwoTone';

function Gallery() {
    const navigate = useNavigate();
    return (
        <div>
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <div className='gallery-cards'>
                <Card onClick={
                    () => {
                        window.open('https://drive.google.com/drive/folders/1jUY8w39Cw5lsgX-PwEV2rwE5XXjdQVyz?usp=sharing');
                    }
                } className='gallery-card' sx={{ maxWidth: 400, marginRight: '50px', height: 'min-content', borderRadius: '0px', boxShadow: '0px 0px 0px 0px', backgroundColor: '#004168', color: 'var(--yellow)', cursor: 'pointer' }}>
                    <CollectionsTwoToneIcon style={{
                        color: 'var(--yellow)',
                        width: '100%',
                        height: '200px',
                    }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontFamily: 'montserrat-r',
                            textAlign: 'center'
                        }}>
                            Meeting Photos
                        </Typography>
                    </CardContent>
                </Card>
                <Card onClick={
                    () => {
                        window.open('/gallery/flyers', '_blank');
                    }
                } className='gallery-card' sx={{ maxWidth: 400, marginRight: '50px', height: 'min-content', borderRadius: '0px', boxShadow: '0px 0px 0px 0px', backgroundColor: '#004168', color: 'white', cursor: 'pointer' }}>
                    <PhotoAlbumTwoToneIcon style={{
                        color: 'var(--white)',
                        width: '100%',
                        height: '200px',
                    }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontFamily: 'montserrat-r',
                            textAlign: 'center'
                        }}>
                            Flyers
                        </Typography>
                    </CardContent>
                </Card>
                <Card onClick={
                    () => {
                        window.open('/gallery/agendas', '_blank');
                    }
                } className='gallery-card' sx={{ maxWidth: 400, height: 'min-content', borderRadius: '0px', boxShadow: '0px 0px 0px 0px', backgroundColor: '#004168', color: 'var(--yellow)', cursor: 'pointer' }}>
                    <DescriptionTwoToneIcon style={{
                        color: 'var(--yellow)',
                        width: '100%',
                        height: '200px',
                    }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{
                            fontFamily: 'montserrat-r',
                            textAlign: 'center'
                        }}>
                            Agendas
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;