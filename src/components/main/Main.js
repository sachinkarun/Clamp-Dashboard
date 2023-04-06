import React, { useState, useEffect } from 'react';
import './main.css';

// Images
import img1 from '../../img/img1.jpg';
import img2 from '../../img/img2.jpg';
import img3 from '../../img/img3.jpg';
import img4 from '../../img/img4.jpg';

// Material UI Linear bar
import LinearProgress from '@mui/material/LinearProgress';

const Main = () => {
    const [tripBtn, setTripBtn] = useState({ Travel: "Tour", Hotel: "Tour" });
    const [slot, setSlot] = useState(0);
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 75 ? 75 : prevProgress + 5));
          }, 100);

          return () => {
            clearInterval(timer);
          };
    }, []);

    const data = [
        {
            title: "Travel",
            screen: "Mobile Application",
            seenBy: {
                Tour:[img1, img2, img3, img4],
                Trip:[img2, img4],
                Transport:[img3, img4, img2, img1],
            }
        },
        {
            title: "Hotel",
            screen: "Dashboard",
            seenBy: {
                Tour: [img2, img4, img3],
                Trip:[img2, img3, img1, img4],
                Transport: [img4, img3, img1]
            }
        }
    ]

    const slots = [{ date: "12", month: "June" }, { date: "18", month: "June" }, { date: "20", month: "June" }, { date: "02", month: "July" }, { date: "10", month: "July" }, { date: "15", month: "July" }];

    const func = (titleName, trip) => {
        setTripBtn({ ...tripBtn, [titleName]: trip })
    }

    return (
        <div className='main-container'>
            <div className='revenue'>
                <div className='logo'>$</div>

                <div>
                    <span style={{ fontSize: "16px", color: "#ffffff" }}>Total Revenue</span>
                    <br />
                    <span style={{ fontSize: "20px", color: "#ffffff", fontWeight: "bold" }}>$92,983</span>

                    <div style={{width:"8rem", marginTop:"15px"}}>
                        <LinearProgress variant="determinate" value={progress}/>
                    </div>
                </div>
            </div>

            <div className='travel-hotel-container'>
                {data.map((obj) => (
                    <div className='travel-hotel-card'>

                        <div className='title'>{obj.title}</div>
                        <div className='screen'>{obj.screen}</div>
                        <div className='seenBy'>Seen by</div>

                        <div style={{ position: "relative", marginBottom: "3rem" }}>
                            {obj.seenBy[tripBtn[obj.title]].map((userImg, idx) => (
                                <img src={userImg} style={{ width: "2.2rem", height: "2.2rem", borderRadius: "50%", margin: "10px 20px", position: "absolute", marginLeft: `${(idx * 20) + 20}px`, border: "1px solid #ffffff", zIndex: `${obj.seenBy.length - idx}` }} />
                            ))}
                        </div>

                        <div className={tripBtn[obj.title] === "Tour" ? "btn1-selected" : "btn1-not-selected"} onClick={() => func(obj.title, "Tour")}>Tour</div>
                        <div className={tripBtn[obj.title] === "Trip" ? "btn2-selected" : "btn2-not-selected"} onClick={() => func(obj.title, "Trip")}>Trip</div>
                        <div className={tripBtn[obj.title] === "Transport" ? "btn3-selected" : "btn3-not-selected"} onClick={() => func(obj.title, "Transport")}>Transport</div>
                    </div>
                ))}
            </div>

            <div className='slots'>
                <div className='free-slots-avail'>Free slots available</div>

                <div className='slot-card'>
                    {slots.map((obj, idx) => (
                        <div className='slot' style={{ backgroundColor: slot === idx ? "#ff535f" : "#020202" }} onClick={() => setSlot(idx)}>
                            <span style={{ fontSize: "1.2rem", color: "#ffffff", fontWeight: "bold" }}>{obj.date}</span>
                            <br />
                            <span style={{ fontSize: "15px", color: "#ffffff" }}>{obj.month}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Main
