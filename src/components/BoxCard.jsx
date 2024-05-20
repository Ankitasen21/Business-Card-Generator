/* eslint-disable react/prop-types */
import React, {useRef} from 'react';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import html2canvas from 'html2canvas';
import './BoxCard.css';

const BoxCard = ({ userData }) => {
    const email = `mailto:${userData.email}`;
    const phone = `tel:${userData.phone}`;
    const cardRef = useRef();

    const handleDownload = async () => {
        const canvas = await html2canvas(cardRef.current);
        const img = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = img;
        link.download = 'card.png';
        link.click();
    }
    return (
        <>
            {userData.name === "" ?
                <div className='error'>
                    <h3 className='error'>⚠️ Fill the form to see your business card </h3> 
                </div> :
                <div ref = {cardRef} className="outer-container">
                    <button onClick={handleDownload} className='download-button'> <DownloadIcon /> </button>
                    <div className="inner-container">
                        <img src={userData.photo} alt="profile" />
                        <h2> {userData.name} </h2>
                        <p style={{fontSize: ".85rem", fontWeight: "400",color:"white"}}> {userData.address} </p>
                        <div className='divider'>
                        <a href={email} className='link-button'> <MailIcon /> Email </a>
                        <a href={phone} className='link-button'> <PhoneIcon /> Phone </a>
                        </div>
                        <div className='details'>  
                            <h3 className='details-header'>About</h3>
                            <p className='details-data'> {userData.bio} </p> 
                        </div>
                        <div className='details'> 
                            <h3 className='details-header'>Interests</h3>
                            <p className='details-data'> {userData.interest} </p> 
                        </div>

                        <div className="social-links">
                            <a href={userData.linkedin} className='link-icon'> <LinkedInIcon /> </a>
                            <a href="" className='link-icon'> <FacebookIcon /> </a>
                            <a href={userData.github} className='link-icon'> 
                            <GitHubIcon /></a>
                        </div>
                    </div>
                </div>
                
            }
        </>
    )
}

export default BoxCard;