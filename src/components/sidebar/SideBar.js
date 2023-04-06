import React from 'react';
import './sidebar.css';

// React icons
import { VscFolderOpened } from 'react-icons/vsc';
import { TfiEmail, TfiCalendar, TfiBarChart } from 'react-icons/tfi';
import { ImFileText2 } from 'react-icons/im';

const SideBar = () => {
    return (
        <div className='sidebar-container'>
            <div className='sidebar-profile'>
                <span className='user-name'>Hira R.</span>
                <span className='user-profile'>UX/UI Designer</span>

                <div className='user-info'>
                    <section>
                        <span className='user-info-num'>125</span>
                        <span className='user-info-detail'>Projects</span>
                    </section>

                    <section>
                        <span className='user-info-num'>$124</span>
                        <span className='user-info-detail'>Revenue</span>
                    </section>
                </div>
            </div>

            <div className='sidebar-options'>
                <li className='menu-selected'><VscFolderOpened  className='icons-selected'/>Dashboard</li>
                <li className='menu'><TfiEmail className='icons'/>Email</li>
                <li className='menu'><TfiCalendar className='icons'/>Calender</li>
                <li className='menu'><TfiBarChart className='icons'/>Graph</li>
                <li className='menu'><ImFileText2 className='icons'/>Forms</li>
            </div>

            <div className='sidebar-premium'>
                <span className='go-pro'>Go Pro</span>
                <span className='sidebar-premium-info'>Upgrade your plans to get pro benifits.</span>
                <button className='sidebar-premium-btn'>Let's Start</button>
            </div>
        </div>
    )
}

export default SideBar
