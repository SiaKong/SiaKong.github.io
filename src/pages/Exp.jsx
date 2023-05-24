import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/draggable';

import 'jquery-ui/themes/base/all.css'; 
import resume from "../assets/CV_Siana_Kong.pdf";

function Exp() {
    useEffect(() => {
        $(".step").on("click", function() {
            $(this).addClass("active").prevAll().addClass("active");
            $(this).nextAll().removeClass("active");
        });

        $(".step01").on("click", function() {
            $("#line-progress").css("width", "3%");
            $(".discovery").addClass("active").siblings().removeClass("active");
        });

        $(".step02").on("click", function() {
            $("#line-progress").css("width", "25%");
            $(".strategy").addClass("active").siblings().removeClass("active");
        });

        $(".step03").on("click", function() {
            $("#line-progress").css("width", "50%");
            $(".creative").addClass("active").siblings().removeClass("active");
        });

        $(".step04").on("click", function() {
            $("#line-progress").css("width", "75%");
            $(".production").addClass("active").siblings().removeClass("active");
        });

        $(".step05").on("click", function() {
            $("#line-progress").css("width", "100%");
            $(".analysis").addClass("active").siblings().removeClass("active");
        });
    }, []);

    return (
        <div id="expdiv">
            <section>
                <span className='ss'></span>
                <span className='ss'></span>
                <span className='ss'></span>
            </section>
            
            <a id="resLink" href={resume} download><h2>my journey</h2></a>

            <div className="process-wrapper">
                <div id="progress-bar-container">
                    <ul>
                        <li className="step step01 active"><div className="step-inner">May 2020 - April 2021</div></li>
                        <li className="step step02"><div className="step-inner">June 2020 - Aug 2020</div></li>
                        <li className="step step03"><div className="step-inner">May 2021 - Aug 2021</div></li>
                        <li className="step step04"><div className="step-inner">Jan 2022 - April 2022</div></li>
                        <li className="step step05"><div className="step-inner">TODAY...</div></li>
                    </ul>
                    
                    <div id="line">
                        <div id="line-progress"></div>
                    </div>
                </div>

                <div id="progress-content-section">
                    <div className="section-content discovery active">
                        <h2>VP Equity @ <b>CSSA</b></h2>
                        <p>Organized and promoted events regarding social issues, such as BLM and mental health awareness. Planned academic and social events for all students in Computer Science and the Faculty of Engineering</p>
                    </div>
                    
                    <div className="section-content strategy">
                        <h2>Frontend Developer Co-op @ <b>uOttawa</b></h2>
                        <p>Developed a web application using JavaScript on Django, enabling users to construct circuits and visually represent complex biological data using specialized components. Designed the application from scratch, as well as researching the required biological components and fine-tuning the visual elements to create an intuitive API for novice users.</p>
                    </div>
                    
                    <div className="section-content creative">
                        <h2>Software developer Co-op @ <b>Nokia</b></h2>
                        <p>Revamped and optimized a business analytics tool by rebuilding the server using Apache Superset, React, and Python, resulting in a 50% reduction in dashboard setup time. Developed a data pipeline using Python and Javascript to streamline data streaming from Excel sheets to MySQL server, eliminating the need for repetitive data migration. Utilized SQL queries to create insightful dashboards that represented business analytics through data combinations.</p>
                    </div>
                    
                    <div className="section-content production">
                        <h2>Full stack developer Co-op @ <b>Nokia</b></h2>
                        <p>Streamlined deployment of a Node.js application by Dockerizing it, automating the installation and setup process. Enhanced data representation and relations in MySQL database by implementing new keys and adjusting existing table relations, and leveraged Trino for data pooling across multiple databases. Demonstrated strong problem-solving skills through debugging and resolving various issues related to proxies, firewalls, database permissions, Git connections, and Linux server restoration.</p>
                    </div>
                    
                    <div className="section-content analysis">
                        <h2>Searching for <b>next</b> opportunity</h2>
                        <p>Taking this summer to improve my skills and learn new things! Currently looking for Fall 2023 internship position.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Exp;
