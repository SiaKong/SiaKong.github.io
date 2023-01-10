import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Firebase from '../assets/firebase.png';
import GoLang from '../assets/golang.svg';
import Java from '../assets/java.png';
import MSSQL from '../assets/mssql.png';
import MySQL from '../assets/mysql.png';
import Ocaml from '../assets/ocaml.png';
import PostgreSQL from '../assets/postgresql.png';
import Prolog from '../assets/prolog.png';
import Python from '../assets/python.png';
import Scheme from '../assets/scheme.svg';
import Trino from '../assets/trino.png';
import Linux from '../assets/linux.png';
import Superset from '../assets/superset.png';
import PowerBI from '../assets/powerbi.png';
import Docker from '../assets/docker.png';
import Flask from '../assets/flask.png';
import Django from '../assets/django.svg';
import AndroidStudio from '../assets/androidstudio.png';
import Git from '../assets/git.png';
import Reactimg from '../assets/react.png';
import Node from '../assets/node.png';
import Javascript from '../assets/javascript.png';
import P5 from '../assets/p5.png';

function Resume() {
  return (
    <div name='resume' id='resume' className='w-full bg-white py-6'>
      <div className="flex flex-col justify-center items-center w-full h-full">

        {/*Technical skills*/}
        <p className="text-4xl text-[#00414d] pt-6 pb-2">TECHNICAL SKILLS</p>
        <p className="pb-6 text-gray-500">small text?</p>
        <Tabs className="w-md md:w-[600px] items-center">
          <TabList>
            <Tab>ALL</Tab>
            <Tab>LANGUAGES</Tab>
            <Tab>DATABASE</Tab>
            <Tab>SOFTWARE & TOOL</Tab>
          </TabList>
          <div className='pb-3'></div>
          <div className="mx-auto flex flex-col justify-center w-full h-full">
            <TabPanel>
              <div className="grid grid-cols-4 md:grid-cols-5 gap-y-4 text-sm">
                <div className="items-center text-center">
                  <img alt="Java" src={Java} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Java</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Python" src={Python} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Python</p>
                </div>
                <div className="items-center text-center">
                  <img alt="GoLang" src={GoLang} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>GoLang</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Ocaml" src={Ocaml} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Ocaml</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Profile" src={Prolog} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Prolog</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Scheme" src={Scheme} className="mx-auto w-[65px] h-[65px]"/>
                  <p> className='pt-2'Scheme</p>
                </div>
                
                <div className="items-center text-center">
                  <img alt="Javascript" src={Javascript} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Javascript</p>
                </div>
                <div className="items-center text-center">
                  <img alt="React" src={Reactimg} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>React.js</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Node.js" src={Node} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Node.js</p>
                </div>
                <div className="items-center text-center">
                  <img alt="p5.js" src={P5} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>p5.js</p>
                </div>

                <div className="items-center text-center">
                  <img alt="Linux" src={Linux} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Linux</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Git" src={Git} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Git</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Android studio" src={AndroidStudio} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Android Studio</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Django" src={Django} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Django</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Flask" src={Flask} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Flask</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Docker" src={Docker} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Docker</p>
                </div>
                <div className="items-center text-center">
                  <img alt="PowerBI" src={PowerBI} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>PowerBI</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Superset" src={Superset} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Apache Superset</p>
                </div>

                <div className="items-center text-center">
                  <img alt="MSSQL" src={MSSQL} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>MSSQL</p>
                </div>
                <div className="items-center text-center">
                  <img alt="MySQL" src={MySQL} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>MySQL</p>
                </div>
                <div className="items-center text-center">
                  <img alt="PostgreSQL" src={PostgreSQL} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>PostgreSQL</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Trino" src={Trino} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Trino</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Firebase" src={Firebase} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Firebase</p>
                </div>
              </div>
              
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-4 md:grid-cols-5 gap-y-4 text-sm">
              <div className="items-center text-center">
                  <img alt="Java" src={Java} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Java</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Python" src={Python} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Python</p>
                </div>
                <div className="items-center text-center">
                  <img alt="GoLang" src={GoLang} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>GoLang</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Ocaml" src={Ocaml} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Ocaml</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Profile" src={Prolog} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Prolog</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Scheme" src={Scheme} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Scheme</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Javascript" src={Javascript} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Javascript</p>
                </div>
                <div className="items-center text-center">
                  <img alt="React" src={Reactimg} className="mx-auto w-[65px] h-[65px]"/>
                  <p>React.js</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Node.js" src={Node} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Node.js</p>
                </div>
                <div className="items-center text-center">
                  <img alt="p5.js" src={P5} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>p5.js</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-4 md:grid-cols-5 gap-y-4 text-sm">
              <div className="items-center text-center">
                  <img alt="MSSQL" src={MSSQL} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>MSSQL</p>
                </div>
                <div className="items-center text-center">
                  <img alt="MySQL" src={MySQL} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>MySQL</p>
                </div>
                <div className="items-center text-center">
                  <img alt="PostgreSQL" src={PostgreSQL} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>PostgreSQL</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Trino" src={Trino} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Trino</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Firebase" src={Firebase} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Firebase</p>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-4 md:grid-cols-5 gap-y-4 text-sm">
                <div className="items-center text-center">
                  <img alt="Linux" src={Linux} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Linux</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Git" src={Git} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Git</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Android studio" src={AndroidStudio} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Android Studio</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Django" src={Django} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Django</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Flask" src={Flask} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Flask</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Docker" src={Docker} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Docker</p>
                </div>
                <div className="items-center text-center">
                  <img alt="PowerBI" src={PowerBI} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>PowerBI</p>
                </div>
                <div className="items-center text-center">
                  <img alt="Superset" src={Superset} className="mx-auto w-[65px] h-[65px]"/>
                  <p className='pt-2'>Apache Superset</p>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
        <br/>
        <br/>
        <br/>
        
        

        {/*Work experience*/}
        <p className="text-4xl text-[#00414d] pt-6 pb-2 resumesub">WORK EXPERIENCES</p>
        <p className="pb-8 text-gray-500">small text?</p>
        <div className="grid md:grid-cols-2 gap-5 pb-3 max-w-[450px] md:max-w-[800px] lg:mr-[120px]">
          <div className="md:col-start-1 md:col-end-3 text-sm md:text-base text-left md:text-right">
            <p className='text-2xl font-semibold'>Nokia</p>
            <p className='text-gray-500'>Kanata, Ontario</p>
          </div>
          <div className="md:col-start-4">
          <ol class="border-l-2 border-[#89cbd6]">
            <li>
              <div class="md:flex flex-start">
                <div class="bg-[#89cbd6] w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-xl ml-6 mb-10 hover:shadow-xl transition duration-300">
                  <div class="flex justify-between mb-4">
                    <p class="font-medium text-[#216773] text-lg">Full Stack Developer</p>
                    <p class="font-medium text-[#5ab4c4] text-sm">Jan 2022 - April 2022</p>
                  </div>
                  <div class="text-gray-700 text-sm">
                    <ul>
                    <li className='workexp'>Dockerized a Node.js application, reducing the need for the manual steps for the deployment of the application by automating the installation and setup process of the server. </li>
                    <li className='workexp'>Optimized data pooling with Trino to combine and use datas from different databases (MySQL, MSSQL). </li>
                    <li className='workexp'>Improved problem solving skills by debugging various types of problems such as Proxy/Firewall error, Database permission error, Git connection error, and restoration of a Linux server. </li>
                    <li className='workexp'>Created meaningful dashboards with graphs and charts consisting of combined data from different sources. </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
            <div class="md:flex flex-start">
                <div class="bg-[#89cbd6] w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                  </svg>
                </div>
                <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-xl ml-6 mb-10 hover:shadow-xl transition duration-300">
                  <div class="flex justify-between mb-4">
                    <p class="font-medium text-[#216773] text-lg">Full Stack Developer</p>
                    <p class="font-medium text-[#5ab4c4] text-sm">May 2021 - Aug 2021</p>
                  </div>
                  <div class="text-gray-700 text-sm">
                    <ul>
                    <li className='workexp'>Designed and implemented a data pipeline in Python and Javascript to stream data from Excel sheets to MySQL server, and optimized by getting rid of repetitive data migration process. </li>
                    <li className='workexp'>Optimized data representation and relations in the existing MySQL database server by adding new keys and adjusting existing relations between tables. </li>
                    <li className='workexp'>Enhanced the existing business analytics tool built with PowerBI by reducing the dashboard setup time by 50%, as a result of rebuilding the server on Apache Superset with Javascript. </li>
                    <li className='workexp'>Wrote a backup bash script and executed SSL implementation for a Linux server.</li>
                    <li className='workexp'>Created charts representing business analytics by creating different combinations of data using SQL queries. </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            
          </ol>
          </div>

          <div className="md:col-start-1 md:col-end-3 text-left md:text-right">
            <p className='text-2xl font-semibold'>University of Ottawa</p>
            <p className='text-gray-500'>Ottawa, Ontario</p>
          </div>
          <div className="md:col-start-4">
            <ol class="border-l-2 border-[#89cbd6]">
              <li>
                <div class="md:flex flex-start">
                  <div class="bg-[#89cbd6] w-6 h-6 flex items-center justify-center rounded-full -ml-3">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" class="text-white w-3 h-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                    </svg>
                  </div>
                  <div class="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-xl ml-6 mb-10 hover:shadow-xl transition duration-300">
                    <div class="flex justify-between mb-4">
                      <p class="font-medium text-[#216773] text-lg">Front-end Developer</p>
                      <p class="font-medium text-[#5ab4c4] text-sm">June 2020 - Aug 2020</p>
                    </div>
                    <div class="text-gray-700 text-sm">
                      <ul>
                      <li className='workexp'>Developed a web application that allows users to build circuits and create visual representation of complex biological data with biological components, built mainly with Javascript and JSON on Django.</li>
                      <li className='workexp'>Designed the web application from scratch by studying the necessary biological components and experimenting with the visual components to provide the best API for beginner users. </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <br/>
        <br/>

        {/*Activity*/}
        <p className="text-4xl text-[#00414d] pt-6 pb-2 resumesub">ACTIVITY</p>
        <p className="pb-8 text-gray-500">small text?</p>
        <p>hackathones & cssa</p>
      
        {/*Resume download button*/}
        <div className="py-9"></div>
        <a href="CV for Siana Kong.pdf" download>
          <button type="button" class="px-6 pt-2.5 pb-2 bg-[#f8ef72] text-[#416b70] font-medium text-base leading-normal uppercase rounded shadow-md hover:bg-[#244246] hover:text-[#f8ef72] hover:shadow-lg focus:bg-[#244246] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#244246] active:shadow-lg transition duration-150 ease-in-out flex align-center">
        
            <div className="flex items-stretch pb-1">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="download" class="w-3 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor"d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
            </svg>
            RESUME
            </div>
          </button>
        </a>
      
      </div>

      <br/>
      
    </div>
    
  )
}

export default Resume
