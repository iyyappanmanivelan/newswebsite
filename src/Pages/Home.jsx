import React, { useEffect, useState } from "react";
import {
  Alarm,
  AlarmFill,
  Calendar,
  Calendar2CheckFill,
  Facebook,
  GeoAltFill,
  Google,
  Instagram,
  List,
  PersonCircle,
  PersonDashFill,
  PlusCircleFill,
  Search,
  Twitch,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import { Link } from 'react-router-dom'
import bussiness from '../images/bussiness.png'
import medical from '../images/medical.jpg'
import sportsadd from '../images/sports add.webp'
import {useNavigate} from 'react-router-dom';

function Home() {
  const [hr, sethr] = useState("00");
  const [min, setmin] = useState("00");
  const [sec, setsec] = useState("00");
  const [days, setdays] = useState();
  const [months, setmonths] = useState();
  const [dating, setdating] = useState();
  const [year, setyear] = useState();
  const[cate,setcate]=useState();
  const[ctry,setctry]=useState();
  const[countydata,setcountrydata]=useState([])
  const[signingname,setsigningname]=useState('')
  const[mslide,setmslide]=useState(false)
  const nav=useNavigate()


  const timeset = () => {
    setInterval(() => {
      const date = new Date();
      setmin(date.getMinutes());
      sethr(date.getHours());
      setsec(date.getSeconds());
    }, 1000);
  };

  const daynotes = new Date();
  const date = () => {
    setdating(daynotes.getDate());
    setyear(daynotes.getFullYear());
    switch (daynotes.getDay()) {
      case 0:
        setdays("Sunday");
        break;
      case 1:
        setdays("Monday");
        break;
      case 2:
        setdays("Tuesday");
        break;
      case 3:
        setdays("Wednesday");
        break;
      case 4:
        setdays("Thursday");
        break;
      case 5:
        setdays("Friday");
        break;
      case 6:
        setdays("Saturday");
        break;
    }
  };
  const month = () => {
    switch (daynotes.getMonth()) {
      case 0:
        setmonths("Jan");
        break;
      case 1:
        setmonths("Feb");
        break;
      case 2:
        setmonths("Mar");
        break;
      case 3:
        setmonths("Apr");
        break;
      case 4:
        setmonths("May");
        break;
      case 5:
        setmonths("Jun");
        break;
      case 6:
        setmonths("July");
        break;
      case 7:
        setmonths("Aug");
        break;
      case 8:
        setmonths("Sep");
        break;
      case 9:
        setmonths("Oct");
        break;
      case 10:
        setmonths("Nov");
        break;
      case 11:
        setmonths("Dec");
        break;
    }
  };

  useEffect(() => {
    timeset();
    month();
    date()
    country()
    signname()
  },[]);

  const signname=()=>{
    if(localStorage.getItem('signname') === null){
       setsigningname('SIGN IN')
    }
    else{
      setsigningname(localStorage.getItem('signname'))
    }
  }
  const newsign=()=>{
    localStorage.removeItem('signname')
    nav('/signin')
  }

 
 const mobilenav=()=>{
  setmslide(!mslide)
 }  


  const country= async()=>{
    await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=542f39d0cfa6429483d4642983d731d3')
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      setcountrydata(res.articles)
    })
    .catch((error)=>{
      alert(error)
    })
  }

  const getnews=async()=>{
    if(!ctry && !cate){
      alert('properly select and search')
    }
    else if( !cate){
        alert('select category')
    }
    else if( !ctry){
      alert('select country')
    }
    else{
      await fetch(`https://newsapi.org/v2/top-headlines?country=${ctry}&category=${cate}&apiKey=542f39d0cfa6429483d4642983d731d3`)
      .then((res)=>{
        return res.json()
      })
      .then((res)=>{
        setcountrydata(res.articles)
      })
    }
  
  }





  return (
    <>
     <section className="time-social bg-black text-light p-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 pt-2">
                <div className="row">
                  <div className="col-md-4">
                    <div className="location">
                      <div className="location-logo text-light">
                        <GeoAltFill/>
                      </div>
                      <div className="location-name">
                        <p>{!ctry?'COUNTRY':ctry === ctry.toLowerCase()?ctry.toUpperCase():ctry.toLowerCase()}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="news-watch">
                      <ul className="time-list">
                        <li>
                          <h5>{hr}:</h5>
                        </li>
                        <li>
                          <h5>{min}:</h5>
                        </li>
                        <li>
                          <h5>
                            {sec}
                            <span>{hr > 12 ? "pm" : "am"}</span>
                          </h5>
                        </li>
                        <li>
                          <AlarmFill />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="days">
                      <ul className="dayslist">
                        <li>{days},</li>
                        <li>{dating}th</li>
                        <li>{months},</li>
                        <li>
                          {year}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 pt-1">
                <div className="row">
                  <div className="col-md-8">
                  <div className="social-media">
                  <div className="social-list">
                    <li>
                     <a href="http://www.facebook.com">
                     <span>
                        <Facebook />
                      </span>
                     </a>
                    </li>
                    <li>
                      <a href="http://www.instagram.com">
                      <span>
                        <Instagram />
                      </span>
                      </a>
                    </li>
                    <li>
                      <a href="http://www.google.com">
                      <span>
                        <Google />
                      </span>
                      </a>
                    </li>
                    <li>
                      <a href="http://www.youtube.com">
                      <span>
                        <Youtube />
                      </span>
                      </a>
                    </li>
                    <li>
                     <a href="http://www.twitter.com">
                     <span>
                        <Twitter />
                      </span>
                     </a>
                    </li>
                  </div>
                  </div>
                  </div>
                  <div className="col-md-4">
                    <div className="sign-slide">
                    <div className="sign-page">
                      <Link to='/signin'><span onClick={newsign}> <PersonCircle/> {!signingname?'SIGN-IN':signingname===signingname.toLowerCase()? signingname.toUpperCase():signingname}</span></Link>
                     </div>
                     <div className="mobile-nav">
                      <div className="menu-bar text-light">
                        <List onClick={mobilenav}/>
                      </div>
                       <div className={mslide === true ?'m-page-type2':'m-page-type'}>
                       <ul className=" mobile-page-type">
                   <li>HOME</li>
                   <li><select className="category" onChange={(e)=>{setcate(e.target.value === e.target.value.toUpperCase()?e.target.value.toLowerCase():e.target.value.toUpperCase())}}>
                       <option>CATEGORY</option>
                       <option>BUSINESS</option>
                       <option>HEALTH</option>
                       <option>SPORTS</option>
                       <option>TECHNOLOGY</option>
                       <option>ENTERTAINMENT</option>
                       <option>GENERAL</option>
                    </select></li>
                    <li><select className="category" onChange={(e)=>{setctry(e.target.value === e.target.value.toUpperCase()?e.target.value.toLowerCase():e.target.value.toUpperCase())}}>
                      <option> SELECT COUNTRY</option>
                      <option value="ID">INDIAN</option>
                      <option value="BR">BRAZIL</option>
                      <option value="CN">CHINA</option>
                      <option value='AR'>ARGENTINA</option>
                      <option value='US'>UNITED STATES</option>
                      <option value='IT'>ITALY</option>
                      <option value='ID'>INDONESIA</option>
                      <option value='RO'>ROMANIA</option>
                      <option value='KR'>KOREA</option>
                      <option value='NZ'>NEWZLAND</option>
                      <option value='PH'>PHILIPPINES</option>
                      <option value='PL'>POLAND</option>
                      <option value='TR'>TURKEY</option>
                      <option value='ZA'>SOUTH AFRICA</option>
                      </select></li>
                      <li onClick={getnews} className="pc-search"><Search/></li>
                      <li onClick={getnews} className="mb-search">SEARCH</li>
                      <li> <Link to='/contact'>CONTACT</Link></li>
                     </ul>
                       </div>
                     </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="news-title">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
               <div className="portal-title">
               <div className="title">
                  <h1>
                    A<span>to</span>Z
                  </h1>
                  <h2>News</h2>
                </div>
                <div className="title-full text-center">
                  <h6>The art of publishing</h6>
                </div>
               </div>
              </div>
              <div className="col-md-6">
                <div className="add-banner">
                 <div className="img-1">
                  <img src={medical} className="img-fluid"/>
                 </div>
                 <div className="img-2">
                  <img src={sportsadd} className="img-fluid"/>
                 </div>
                 <div>
                  <img src={bussiness} className="img-fluid"/>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </section>
       <section className="navpage p-3">
        <div className="container">
        <div className="page-list " >
                <ul className="page-type">
                   <li><span>HOME</span></li>
                   <li><span><select className="category" onChange={(e)=>{setcate(e.target.value === e.target.value.toUpperCase()?e.target.value.toLowerCase():e.target.value.toUpperCase())}}>
                       <option>CATEGORY</option>
                       <option>BUSINESS</option>
                       <option>HEALTH</option>
                       <option>SPORTS</option>
                       <option>TECHNOLOGY</option>
                       <option>ENTERTAINMENT</option>
                       <option>GENERAL</option>
                    </select></span></li>
                    <li><span><select className="category" onChange={(e)=>{setctry(e.target.value === e.target.value.toUpperCase()?e.target.value.toLowerCase():e.target.value.toUpperCase())}}>
                      <option> SELECT COUNTRY</option>
                      <option value="ID">INDIAN</option>
                      <option value="BR">BRAZIL</option>
                      <option value="CN">CHINA</option>
                      <option value='AR'>ARGENTINA</option>
                      <option value='US'>UNITED STATES</option>
                      <option value='IT'>ITALY</option>
                      <option value='ID'>INDONESIA</option>
                      <option value='RO'>ROMANIA</option>
                      <option value='KR'>KOREA</option>
                      <option value='NZ'>NEWZLAND</option>
                      <option value='PH'>PHILIPPINES</option>
                      <option value='PL'>POLAND</option>
                      <option value='TR'>TURKEY</option>
                      <option value='ZA'>SOUTH AFRICA</option>
                      </select></span></li>
                      <li onClick={getnews} className="text-right"><span><Search/></span></li>
                      <li> <Link to='/contact'><span>CONTACT</span></Link></li>
                </ul>
          </div>
        </div>
       </section>
       <section className="bind-api">
        <div className="api-format">
          <div className="container">
            
              <div className="row">
              
                {
                
                  countydata.map((res)=>{
                    return(
                      <div className="col-md-6 p-2">
                        <div className="api-list">
                          <div className="title-api">
                            <h5>{res.title}</h5>
                          </div>
                          <div className="desc-api">
                            <h6>{res.description}</h6>
                          </div>
                          <div className="url-pic-api">
                            <img src={res.urlToImage} className="img-fluid"/>
                          </div>
                          <div className="api-content">
                            <p>{res.content}</p>
                          </div>
                          <div className="published">
                            <p>{res.publishedAt}</p>
                          </div>
                          <div className="url-api">
                           <a href={res.url}><button className="btn btn-primary">Read more</button></a>
                          </div>
                          
                        </div>
                      </div>
                    )
                  })
                
                }
                
              </div>
          </div>
        </div>
       </section>
    </>
  );
}

export default Home;
