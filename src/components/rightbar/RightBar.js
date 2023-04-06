import React,{ useState, useEffect } from 'react';
import './rightbar.css';

// Images
import profilePic from '../../img/profile-pic.jpg';
import leaf from '../../img/leaf.png';
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';

// Material UI
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

// Icons
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';
import { FaLongArrowAltRight } from 'react-icons/fa';


const RightBar = () => {
    const [progress, setProgress] = useState(0);

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === 'light' ? '#3827b1' : '#efefef',
        },
      }));
    
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 75 ? 75 : prevProgress + 5));
          }, 100);

          return () => {
            clearInterval(timer);
          };
      }, []);

    return (
        <div className='right-container'>
            <div className='dear-client'>
                <img src={leaf} className='leaf' />

                <div>
                    <span className='dear-client-title'>Dear Client</span>
                    <span className='join-us'>Join our online community. It helps in managing your projects.</span>
                </div>

                <IoIosArrowDown size={50} className='line-progress-bar' />
            </div>

            <div className='transaction-detail'>
                <section className='left-section'>
                    <span className='transaction-detail-title'>Transaction Detail</span>
                    <span className='hi-hira'>Hi Hira</span>
                    <span className='more-info' style={{fontSize:"1.3rem", fontWeight:"bold", color:"#ffffff", marginTop:"5px", marginBottom:"5px"}}>$4,763.40</span>
                    <span className='more-info' style={{color:"#cecece"}}>Available Balance</span>

                    <div className='clients'>
                        <FaLongArrowAltRight className='arrow'/>
                        {[img1, img2, img3, img4].map((clientImg) => (
                            <img src={clientImg} className='client' />
                        ))}
                    </div>
                </section>

                <section className='right-section'>
                    <img src={profilePic} className='profile'/>
                    <span style={{color:"#cecece"}}>****3863</span>
                </section>

                <button className='send'>Send</button>
            </div>

            <div className='project-progress'>
                <div className='project'>
                    <BsThreeDotsVertical size={20} className='options'/>

                    <span className='project-detail-title'>Project Details</span>
                    <span className='project-author'>Hira R.</span>

                    <span style={{color:"#cecece", margin:"0 20px"}}>UX/UI Designer</span>
                    <span style={{color:"#ffffff", fontWeight:"bold", margin:"5px 20px"}}>Project Progress</span>

                    <span className='percent'>75%</span>

                    <div style={{width:"74%", margin:"auto"}}>
                        <BorderLinearProgress variant="determinate" value={progress} />
                    </div>
                </div>

                <div className='progress'>
                    <BsThreeDotsVertical size={20} className='options'/>
                    <span className='project-progress-title'>Project Progress</span>

                    <div className='circle-progress'>
                        <span className='circle-progress-num'>{progress}%</span>
                        <CircularProgress variant="determinate" size={"6rem"} value={progress} />
                    </div>

                    <span style={{color:"#cecece", margin:"5px 20px", fontSize:".8rem"}}>3 remaining projects</span>
                </div>
            </div>
        </div>
    )
}

export default RightBar
