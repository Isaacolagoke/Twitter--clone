import React from 'react';
import lambo from './image/lambo.jpg';
import master from './image/master.jpg';
import fcb from './image/fcb.jpg';
import uba from './image/uba.png';
import mar from './image/mar.jpg';
import freecode from './image/freecode.png';
import forbes from './image/forbes.jpg';
import aj from './image/aj.jpg';
import comment from './logo/comment.png';
import rt from './logo/rt.png';
import fav from './logo/fav.png';
import msg from './logo/msg.png';
import gdl from './logo/gdl.jpg';
import news from './image/news.jpg';
import profilepix1 from './image/profilepix1.jpg';
import './NewsFeed.css';


const NewsFeed = () => {
   return(
       <div className='container'>
            <div className='global-container'>
                <div className='profile'>
                <img id='navimage' alt='' src={lambo} className='profile-img1'/>
                    <div className='profile-details'>
                            <div className='profile-details-img'>
                                <img id='navimage' alt='' src={profilepix1} className='profile-img2'/>
                            </div>

                            <div className='profile-details2'>
                                <h2>Isaac Olagoke</h2>
                                <p>@isaac__Olagoke</p>
                            </div>
                    </div>
                    <div className='follower-count'>
                        <div className='count'>
                        <h2>Tweets</h2>
                        <p>100</p>
                        </div>

                        <div className='count'>
                        <h2>Following</h2>
                        <p>100</p>
                        </div>

                        <div className='count'>
                        <h2>Followers</h2>
                        <p>100</p>
                        </div>
                    </div>

                    <div className='trends'>
                        <h1>Nigeria trends · Change</h1>

                        <h3>#WorldCancerDay</h3>
                        <p>FC Barcelona, Ebube The Statesman, and 4 more are Tweeting about this</p>
                        <h3>#WorldWizkidDay</h3>
                        <p>15.2K Tweets</p>
                        <h3>#EtiOsaDecides</h3>
                        <p>EiE Nigeria is Tweeting about this</p>
                        <h3>#MondayMotivaton</h3>
                        <p>16.4K Tweets</p>
                        <h3>#mondaythoughts</h3>
                        <p>11.1K Tweets</p>
                        <h3>Demi Lovato</h3>
                        <p>272K Tweets</p>
                        <h3>Sir Savage</h3>
                        <p>135K Tweets</p>
                        <h3>Niger Delta</h3>
                        <p>2,788 Tweets</p>
                        <h3>banky</h3>
                        <h3>Emiliano Sala</h3>
                        <p>158K Tweets</p>
                    </div>


                </div>




                <div className='news-feed'>
                    <div className='input-group'>
                        <div className='input-img'>
                        <img id='' alt='' src={profilepix1} className='input-img1'/>
                        </div>
                        <div className='tweet-input'>
                        <textarea class="tweet-input1" placeholder="What's Happening?" ></textarea>
                        </div>
                    </div>

                    <div className='tweet-card'>
                        <div className='tweet-card-img'>
                            <img id='' alt='' src={mar} className='tweet-card-img1'/>
                        </div>
                        <div className='tweet-card-feed'>
                            <h2>Olúwatósìn Olaseinde</h2>
                            <h4>@tosinolaseinde</h4>
                            <h5>.3h</h5>
‏                            <p>Be wary of those who despise the rich just because they are rich.</p>
                            <img  alt='' src={comment} className='emoji1'/> 
                            <img  alt='' src={rt} className='emoji'/> 
                            <img  alt='' src={fav} className='emoji'/> 
                            <img  alt='' src={msg} className='emoji'/>
                        </div>

                    </div>

                    <div className='tweet-card'>
                        <div className='tweet-card-img'>
                            <img id='' alt='' src={forbes} className='tweet-card-img1'/>
                        </div>
                        <div className='tweet-card-feed'>
                            <h2>Forbes</h2>
                            <h4>@forbes</h4>
                            <h5>.3h</h5>
‏                            <img id='' alt='' src={lambo} className='tweet-card-feed-img'/>
                            <img  alt='' src={comment} className='emoji1'/> 
                            <img  alt='' src={rt} className='emoji'/> 
                            <img  alt='' src={fav} className='emoji'/> 
                            <img  alt='' src={msg} className='emoji'/>
                        </div>
                    </div>

                    <div className='tweet-card'>
                        <div className='tweet-card-img'>
                            <img id='' alt='' src={aj} className='tweet-card-img1'/>
                        </div>
                        <div className='tweet-card-feed'>
                            <h2>Aljazeera</h2>
                            <h4>@aj</h4>
                            <h5>.3h</h5>
‏                            <p> Yacht owners with priceless art need to beware of flying champagne cork</p>
                            <img  alt='' src={comment} className='emoji1'/> 
                            <img  alt='' src={rt} className='emoji'/> 
                            <img  alt='' src={fav} className='emoji'/> 
                            <img  alt='' src={msg} className='emoji'/>
                        </div>
                    </div>

                    <div className='tweet-card'>
                        <div className='tweet-card-img'>
                            <img id='' alt='' src={freecode} className='tweet-card-img1'/>
                        </div>
                        <div className='tweet-card-feed'>
                            <h2>freeCodeCamp.org</h2>
                            <h4>@freeCodeCamp</h4>
                            <h5>.3h</h5>
‏                            <p> Here's a super useful and comprehensive introduction to Docker, Virtual Machines, and                                 Containers</p>
                            <img  alt='' src={comment} className='emoji1'/> 
                            <img  alt='' src={rt} className='emoji'/> 
                            <img  alt='' src={fav} className='emoji'/> 
                            <img  alt='' src={msg} className='emoji'/>
                        </div>
                        
                    </div>

                    <div className='tweet-card'>
                        <div className='tweet-card-img'>
                            <img id='' alt='' src={gdl} className='tweet-card-img1'/>
                        </div>
                        <div className='tweet-card-feed'>
                            <h2>The Guardian Nigeria</h2>
                            <h4>@guardianNigeria</h4>
                            <h5>.3h</h5>
                            <p> Today in The Guardian – Senate drops Supreme Court case on Onnoghen’s suspension. Get a copy.
                            #FrontPage #Headline #Business #Politics #Sports #Entertainment #News #Nigeria #Africa #Onnoghen #CJN #TheGuardianNg</p>
                            <img id='' alt='' src={news} className='tweet-card-feed-img'/>

                            <img  alt='' src={comment} className='emoji1'/> 
                            <img  alt='' src={rt} className='emoji'/> 
                            <img  alt='' src={fav} className='emoji'/> 
                            <img  alt='' src={msg} className='emoji'/>
                        </div>
                        
                    </div>


                   
                </div>

                <div className='suggestion'>
                        <div className='suggested-handles'>
                            <p className='suggestion-header1'>Who to follow</p>
                            <p className='suggestion-header2'>.refresh</p>
                            <p className='suggestion-header2'>.view all</p>
                        </div>

                        <div className='tweet-card'>
                            <div className='tweet-card-img'>
                                <img id='' alt='' src={uba} className='tweet-card-img1'/>
                            </div>
                            <div className='tweet-card-feed'>
                                <h2>UBA GROUP</h2>
                                <h4>@UBA</h4>
                                <br />
                                <button>follow</button>
                            </div>
                        </div>

                        <div className='tweet-card'>
                            <div className='tweet-card-img'>
                                <img id='' alt='' src={fcb} className='tweet-card-img1'/>
                            </div>
                            <div className='tweet-card-feed'>
                                <h2>FC Barcelona</h2>
                                <h4>@barca</h4>
                                <br />
                                <button>follow</button>
                            </div>
                        </div>

                        <div className='tweet-card'>
                            <div className='tweet-card-img'>
                                <img id='' alt='' src={master} className='tweet-card-img1'/>
                            </div>
                            <div className='tweet-card-feed'>
                                <h2>frontEnd Masters</h2>
                                <h4>@frontEnd</h4>
                                <br />
                                <button>follow</button>
                            </div>
                        </div>

                        <div className='links'>
                            <p>
                            © 2019 TwitterAboutHelp CenterTermsPrivacy policyCookiesAds infoBrandBlogStatusAppsJobsMarketingBusinessesDevelopers
                            </p>     
                        </div>
                </div>

            </div>
       </div>
   ) 
}


export default NewsFeed;