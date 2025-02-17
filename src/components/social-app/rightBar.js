import React, { Fragment,useState } from 'react';
import { Collapse } from 'reactstrap';
import one from "../../assets/images/user/1.jpg";
import three from "../../assets/images/user/3.jpg";
import five from "../../assets/images/user/5.jpg";
import two from "../../assets/images/user/2.png";
import eight from "../../assets/images/user/8.jpg";
import eleven from "../../assets/images/user/11.png";
import timeline4 from "../../assets/images/social-app/timeline-4.png";
import ten from "../../assets/images/user/10.jpg";
import six from "../../assets/images/user/6.jpg";
import fourteen from "../../assets/images/user/14.png";
import four from "../../assets/images/user/4.jpg";

import post9 from "../../assets/images/social-app/post-9.png";
import post8 from "../../assets/images/social-app/post-8.png";
import post7 from "../../assets/images/social-app/post-7.png";
import post6 from "../../assets/images/social-app/post-6.png";
import post5 from "../../assets/images/social-app/post-5.png";
import post4 from "../../assets/images/social-app/post-4.png";
import post3 from "../../assets/images/social-app/post-3.png";
import post2 from "../../assets/images/social-app/post-2.png";
import post1 from "../../assets/images/social-app/post-1.png";

const RightBar = () => {
    const [isIntro, setisIntro] = useState(true);
    const [isFollowers, setisFollowers] = useState(true);
    const [isFollowings, setisFollowings] = useState(true);
    const [isPhotos, setisPhotos] = useState(true);
    const [isFriends, setisFriends] = useState(true);
    
    return (
        <Fragment>
            <div className="col-xl-12 xl-50">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link pl-0" onClick={() => setisIntro(!isIntro)}
                                                data-toggle="collapse" data-target="#collapseicon7" aria-expanded={isIntro} aria-controls="collapseicon7">Profile Intro</button>
                                        </h5>
                                    </div>
                                    <Collapse isOpen={isIntro}>
                                        <div className="card-body filter-cards-view"><span className="f-w-600">About Me :</span>
                                            <p>
                                                Hi, I’m elana, I’m 30 and I work as a
                                                web Designer for the “Daydreams”
                                                Agency in Pier 56.
                                  </p><span className="f-w-600">Favourite TV shows :</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.</p><span className="f-w-600">Favourite Music Bands :</span>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.</p>
                                            <div className="social-network theme-form"><span className="f-w-600">Social Networks</span>
                                                <button className="btn social-btn btn-fb mb-2 text-center"><i className="fa fa-facebook m-r-5"></i>Facebook</button>
                                                <button className="btn social-btn btn-twitter mb-2 text-center"><i className="fa fa-twitter m-r-5"></i>Twitter</button>
                                                <button className="btn social-btn btn-google text-center"><i className="fa fa-dribbble m-r-5"></i>Dribbble</button>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="col-xl-12 xl-50">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link pl-0" onClick={() => setisFollowers(!isFollowers)}
                                                data-toggle="collapse" data-target="#collapseicon8" aria-expanded={isFollowers} aria-controls="collapseicon8">Followers</button>
                                        </h5>
                                    </div>
                                    <Collapse isOpen={isFollowers}>
                                        <div className="card-body social-list filter-cards-view">
                                            <div className="media">
                                                <img className="img-50 img-fluid m-r-20 rounded-circle" alt="twoImg" src={two} />
                                                <div className="media-body"><span className="d-block">Bucky Barnes</span><a href="#javascript">Add Friend</a></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 img-fluid m-r-20 rounded-circle" alt="threeImg" src={three} />
                                                <div className="media-body"><span className="d-block">Sarah Loren</span><a href="#javascript">Add Friend</a></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 img-fluid m-r-20 rounded-circle" alt="threeImg" src={three} />
                                                <div className="media-body"><span className="d-block">Jason Borne</span><a href="#javascript">Add Friend</a></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 img-fluid m-r-20 rounded-circle" alt="tenImg" src={ten} />
                                                <div className="media-body"><span className="d-block">Comeren Diaz</span><a href="#javascript">Add Friend</a></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 img-fluid m-r-20 rounded-circle" alt="elevenImg" src={eleven} />
                                                <div className="media-body"><span className="d-block">Andew Jon</span><a href="#javascript">Add Friend</a></div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="col-xl-12 xl-50">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link pl-0" onClick={() => setisFollowings(!isFollowings)}
                                                data-toggle="collapse" data-target="#collapseicon11" aria-expanded={isFollowings} aria-controls="collapseicon11">Followings</button>
                                        </h5>
                                    </div>
                                    <Collapse isOpen={isFollowings}>
                                        <div className="card-body social-list filter-cards-view">
                                            <div className="media">
                                                <img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src={three} />
                                                <div className="media-body"><span className="d-block">Sarah Loren</span><a href="#javascript">Add Friend</a></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 img-fluid m-r-20 rounded-circle" alt="" src={two} />
                                                <div className="media-body"><span className="d-block">Bucky Barnes</span><a href="#javascript">Add Friend</a></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 img-fluid m-r-20 rounded-circle" alt="ten" src={ten} />
                                                <div className="media-body"><span className="d-block">Comeren Diaz</span><a href="#javascript">Add Friend</a></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 img-fluid m-r-20 rounded-circle" alt="threeImg" src={three} />
                                                <div className="media-body"><span className="d-block">Jason Borne</span><a href="#javascript">Add Friend</a></div>
                                            </div>
                                            <div className="media">
                                                <img className="img-50 img-fluid m-r-20 rounded-circle" alt="elevenImg" src={eleven} />
                                                <div className="media-body"><span className="d-block">Andew Jon</span><a href="#javascript">Add Friend</a></div>
                                            </div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="col-xl-12 xl-50">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link pl-0" onClick={() => setisPhotos(!isPhotos)}
                                             data-toggle="collapse" data-target="#collapseicon9" aria-expanded={isPhotos} aria-controls="collapseicon9">Latest Photos</button>
                                        </h5>
                                    </div>
                                    <Collapse isOpen={isPhotos}>
                                        <div className="card-body photos filter-cards-view">
                                            <ul className="text-center">
                                                <li>
                                                    <div className="latest-post">
                                                        <img className="img-fluid" alt="post1" src={post1} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="latest-post">
                                                        <img className="img-fluid" alt="post2" src={post2} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="latest-post">
                                                        <img className="img-fluid" alt="post3" src={post3} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="latest-post">
                                                        <img className="img-fluid" alt="post4" src={post4} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="latest-post">
                                                        <img className="img-fluid" alt="post5" src={post5} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="latest-post">
                                                        <img className="img-fluid" alt="post6" src={post6} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="latest-post">
                                                        <img className="img-fluid" alt="post7" src={post7} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="latest-post">
                                                        <img className="img-fluid" alt="post8" src={post8} />
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="latest-post">
                                                        <img className="img-fluid" alt="post9" src={post9} />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="col-xl-12 xl-50">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <button className="btn btn-link pl-0" onClick={() => setisFriends(!isFriends)}
                                             data-toggle="collapse" data-target="#collapseicon15" aria-expanded={isFriends} aria-controls="collapseicon15">Friends</button>
                                        </h5>
                                    </div>
                                    <Collapse isOpen={isFriends}>
                                        <div className="card-body avatar-showcase filter-cards-view">
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={three} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={five} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={one} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={two} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={three} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={six} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={ten} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={fourteen} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={one} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={four} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={eleven} alt="#javascript" /></div>
                                            <div className="d-inline-block friend-pic"><img className="img-50 rounded-circle" src={eight} alt="#javascript" /></div>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="col-xl-12 xl-50">
                                <div className="card"><img className="img-fluid" src={timeline4} alt="" /></div>
                            </div>
        </Fragment>
    );
};

export default RightBar;