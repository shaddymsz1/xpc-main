import React, { Fragment, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Clock from 'react-clock';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DatePicker from "react-datepicker";
import Breadcrumb from '../common/breadcrumb';
import { Navigation, Box, MessageSquare, Users, ShoppingBag, Layers, ShoppingCart, DollarSign, ArrowDown, ArrowUp, CloudDrizzle } from 'react-feather';

const General = () => {
  const [date, setDate] = useState({
    date: new Date(),
  });
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate({ date: new Date() }),
      1000
    );
  }, [date , startDate ]);

  const handleChange = date => {
    setStartDate(date);
  };

  const settings = {
    className: "center",
    centerMode: true,
    speed: 500,
    arrows: false,
    centerPadding: "5px",
    slidesToShow: 1,
    slidesToScroll: 1
  };
  
  const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  var d = new Date();
  let dateshow = month[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  return (
    <Fragment>
      <Breadcrumb title="General" parent="Widgets" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-xl-3 col-lg-6">
            <div className="card o-hidden">
              <div className="bg-primary b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Navigation />
                  </div>
                  <div className="media-body">
                    <span className="m-0">Earnings</span>
                    <h4 className="mb-0 counter">
                      <CountUp className="counter" end={6659} />
                    </h4>
                    <Navigation className="icon-bg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 col-lg-6">
            <div className="card o-hidden">
              <div className="bg-secondary b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Box />
                  </div>
                  <div className="media-body"><span className="m-0">Products</span>
                    <h4 className="mb-0 counter">
                      <CountUp className="counter" end={9856} />
                    </h4>
                    <Box className="icon-bg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 col-lg-6">
            <div className="card o-hidden">
              <div className="bg-primary b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <MessageSquare />
                  </div>
                  <div className="media-body"><span className="m-0">Messages</span>
                    <h4 className="mb-0 counter">
                      <CountUp className="counter" end={893} />
                    </h4>
                    <MessageSquare className="icon-bg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 col-lg-6">
            <div className="card o-hidden">
              <div className="bg-primary b-r-4 card-body">
                <div className="media static-top-widget">
                  <div className="align-self-center text-center">
                    <Users />
                  </div>
                  <div className="media-body"><span className="m-0">New User</span>
                    <h4 className="mb-0 counter">
                      <CountUp className="counter" end={45631} />
                    </h4>
                    <Users className="icon-bg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 xl-100">
            <div className="widget-joins card">
              <div className="row">
                <div className="col-sm-6 pr-0">
                  <div className="media border-after-xs">
                    <div className="align-self-center mr-3">68%
                          <i className="fa fa-angle-up ml-2"></i></div>
                    <div className="media-body details pl-3"><span className="mb-1">New</span>
                      <h4 className="mb-0 counter digits">
                        <CountUp className="counter" end={6982} />
                      </h4>
                    </div>
                    <div className="media-body align-self-center">
                      <ShoppingBag className="font-primary float-left ml-2" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-0">
                  <div className="media">
                    <div className="align-self-center mr-3 digits">12%<i className="fa fa-angle-down ml-2"></i></div>
                    <div className="media-body details pl-3"><span className="mb-1">Pending</span>
                      <h4 className="mb-0 counter digits">
                        <CountUp className="counter" end={783} />
                      </h4>
                    </div>
                    <div className="media-body align-self-center">
                      <Layers className="font-primary float-left ml-3" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pr-0">
                  <div className="media border-after-xs">
                    <div className="align-self-center mr-3">68%<i className="fa fa-angle-up ml-2"></i></div>
                    <div className="media-body details pl-3 pt-0"><span className="mb-1">Done</span>
                      <h4 className="mb-0 counter digits">
                        <CountUp className="counter" end={3674} />
                      </h4>
                    </div>
                    <div className="media-body align-self-center">
                      <ShoppingCart className="font-primary float-left ml-1" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-0">
                  <div className="media">
                    <div className="align-self-center mr-3">68%
                          <i className="fa fa-angle-up ml-2"></i></div>
                    <div className="media-body details pl-3 pt-0"><span className="mb-1">Cancel</span>
                      <h4 className="mb-0 counter digits">
                        <CountUp className="counter" end={69} />
                      </h4>
                    </div>
                    <div className="media-body align-self-center">
                      <DollarSign className="font-primary float-left ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 xl-100">
            <div className="widget-joins card widget-arrow">
              <div className="row">
                <div className="col-sm-6 pr-0">
                  <div className="media border-after-xs">
                    <div className="align-self-center mr-3 text-left">
                      <h6 className="mb-1">Sale</h6>
                      <h4 className="mb-0">Today</h4>
                    </div>
                    <div className="media-body align-self-center">
                      <ArrowDown className="font-primary" />
                    </div>
                    <div className="media-body">
                      <h5 className="mb-0">$<span className="counter">
                        <CountUp className="counter" end={25698} />
                      </span></h5><span className="mb-1">-$2658(36%)</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-0">
                  <div className="media">
                    <div className="align-self-center mr-3 text-left">
                      <h6 className="mb-1">Sale</h6>
                      <h4 className="mb-0">Month</h4>
                    </div>
                    <div className="media-body align-self-center">
                      <ArrowUp className="font-primary" />
                    </div>
                    <div className="media-body pl-2">
                      <h5 className="mb-0">$<span className="counter">
                        <CountUp className="counter" end={6954} />
                      </span></h5><span className="mb-1">+$369(15%)</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pr-0">
                  <div className="media border-after-xs">
                    <div className="align-self-center mr-3 text-left">
                      <h6 className="mb-1">Sale</h6>
                      <h4 className="mb-0">Week</h4>
                    </div>
                    <div className="media-body align-self-center">
                      <ArrowUp className="font-primary" />
                    </div>
                    <div className="media-body">
                      <h5 className="mb-0">$<span className="counter">
                        <CountUp className="counter" end={63147} />
                      </span></h5><span className="mb-1">+$69(65%)</span>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 pl-0">
                  <div className="media">
                    <div className="align-self-center mr-3 text-left">
                      <h6 className="mb-1">Sale</h6>
                      <h4 className="mb-0">Year</h4>
                    </div>
                    <div className="media-body align-self-center pl-3">
                      <ArrowUp className="font-primary" />
                    </div>
                    <div className="media-body pl-2">
                      <h5 className="mb-0">$<span className="counter">
                        <CountUp className="counter" end={963198} />
                      </span></h5><span className="mb-1">+$3654(90%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 xl-100">
            <div className="card">
              <div className="cal-date-widget card-body">
                <div className="row">
                  <div className="col-xl-6 col-xs-12 col-md-6 col-sm-6">
                    <div className="cal-info text-center">
                      <h2>24</h2>
                      <div className="d-inline-block mt-2">
                        <span className="b-r-dark pr-3">March</span><span className="pl-3">2018</span></div>
                      <p className="mt-4 f-16 text-muted">There is no minimum donation, any sum is appreciated</p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-xs-12 col-md-6 col-sm-6">
                    <div className="cal-datepicker">
                      <div className="datepicker-here float-sm-right" data-language="en">
                        <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} inline/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 xl-50 col-sm-6">
            <div className="card">
              <div className="weather-widget-two">
                <div className="card-body">
                  <div className="media">
                    <svg className="climacon climacon_cloudDrizzleMoonAlt" id="cloudDrizzleMoonAlt" version="1.1" viewBox="15 15 70 70">
                      <clippath id="cloudFillClip">
                        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"></path>
                      </clippath>
                      <clippath id="moonCloudFillClip">
                        <path d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"></path>
                      </clippath>
                      <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzleMoonAlt">
                        <g clipPath="url(#cloudFillClip)">
                          <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud" clipPath="url(#moonCloudFillClip)">
                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                          </g>
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" id="Drizzle-Left_1_" d="M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z"></path>
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud" clipPath="url(#cloudFillClip)">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z"></path>
                        </g>
                      </g>
                    </svg>
                    {/* <!-- cloudDrizzleMoonAlt--> */}
                    <div className="media-body align-self-center text-white">
                      <h4 className="m-0 f-w-600 num">25°C</h4>
                      <p className="m-0 f-14">Newyork</p>
                    </div>
                  </div>
                  <div className="media">
                    <svg className="climacon climacon_cloudRainMoon" id="cloudRainMoon" version="1.1" viewBox="15 15 70 70">
                      <clippath id="cloudFillClip1">
                        <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"></path>
                      </clippath>
                      <clippath id="moonCloudFillClip1">
                        <path d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"></path>
                      </clippath>
                      <g className="climacon_iconWrap climacon_iconWrap-cloudRainMoon">
                        <g clipPath="url(#cloudFillClip1)">
                          <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud" clipPath="url(#moonCloudFillClip1)">
                            <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                          </g>
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-rain">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left" d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle" d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right" d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- left" d="M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- middle" d="M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_rain climacon_component-stroke_rain- right" d="M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z"></path>
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud" clipPath="url(#cloudFillClip1)">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z"></path>
                        </g>
                      </g>
                    </svg>
                    {/* <!-- cloudRainMoon--> */}
                    <div className="media-body align-self-center text-white">
                      <h4 className="m-0 f-w-600 num">95°F</h4>
                      <p className="m-0 f-14">Peris</p>
                    </div>
                  </div>
                  <div className="media">
                    <svg className="climacon climacon_cloudDrizzle" id="cloudDrizzle" version="1.1" viewBox="15 15 70 70">
                      <g className="climacon_iconWrap climacon_iconWrap-cloudDrizzle">
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-drizzle">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"></path>
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"></path>
                        </g>
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z"></path>
                        </g>
                      </g>
                    </svg>
                    {/* <!-- cloudDrizzle--> */}
                    <div className="media-body align-self-center text-white">
                      <h4 className="m-0 f-w-600 num">50°C</h4>
                      <p className="m-0 f-14">India</p>
                    </div>
                  </div>
                  <div className="top-bg-whether">
                    <svg className="climacon climacon_cloudHailAltFill" id="cloudHailAltFill" version="1.1" viewBox="15 15 70 70">
                      <g className="climacon_iconWrap climacon_iconWrap-cloudHailAltFill">
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-hailAlt">
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                            <circle cx="42" cy="65.498" r="2"></circle>
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                            <circle cx="49.999" cy="65.498" r="2"></circle>
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                            <circle cx="57.998" cy="65.498" r="2"></circle>
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-left">
                            <circle cx="42" cy="65.498" r="2"></circle>
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-middle">
                            <circle cx="49.999" cy="65.498" r="2"></circle>
                          </g>
                          <g className="climacon_component climacon_component-stroke climacon_component-stroke_hailAlt climacon_component-stroke_hailAlt-right">
                            <circle cx="57.998" cy="65.498" r="2"></circle>
                          </g>
                        </g>
                        <g className="climacon_componentWrap climacon_componentWrap_cloud">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z"></path>
                          <path className="climacon_component climacon_component-fill climacon_component-fill_cloud" fill="#FFFFFF" d="M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bottom-whetherinfo">
                    <div className="row">
                      <div className="col-6">
                        <CloudDrizzle />
                      </div>
                      <div className="col-6">
                        <div className="whether-content"><span>India, Surat</span>
                          <h4 className="num mb-0">36°F</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 xl-50 col-sm-6">
            <div className="card">
              <div className="mobile-clock-widget">
                <div className="bg-svg">
                  <svg className="climacon climacon_cloudLightningMoon" id="cloudLightningMoon" version="1.1" viewBox="15 15 70 70">
                    <clippath id="moonCloudFillClipfill11">
                      <path d="M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"></path>
                    </clippath>
                    <clippath id="cloudFillClipfill19">
                      <path d="M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"></path>
                    </clippath>
                    <g className="climacon_iconWrap climacon_iconWrap-cloudLightningMoon">
                      <g clipPath="url(#cloudFillClip)">
                        <g className="climacon_wrapperComponent climacon_wrapperComponent-moon climacon_componentWrap-moon_cloud" clipPath="url(#moonCloudFillClip)">
                          <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" d="M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z"></path>
                        </g>
                      </g>
                      <g className="climacon_wrapperComponent climacon_wrapperComponent-lightning">
                        <polygon className="climacon_component climacon_component-stroke climacon_component-stroke_lightning" points="48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 "></polygon>
                      </g>
                      <g className="climacon_wrapperComponent climacon_wrapperComponent-cloud">
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.584-4.412c3.182-1.057,5.478-4.053,5.478-7.588c0-4.417-3.581-7.998-7.999-7.998c-1.602,0-3.083,0.48-4.333,1.29c-1.231-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.039,8.604,11.503l-1.349,3.777c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.338-0.205,2.033-0.205c6.627,0,11.999,5.371,11.999,11.999C71.999,60.268,66.626,65.641,59.999,65.641z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div>
                  <Clock
                    className={'clock'}
                    value={date.date}
                  />
                  <div id="date" className="date f-24 mb-2">
                    <span>{dateshow}</span>
                  </div>

                  <div>
                    <p className="m-0 f-14 text-light">kolkata, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 xl-50 col-lg-6">
            <div className="card social-widget-card">
              <div className="card-body">
                <div className="redial-social-widget radial-bar-70" data-label="50%">
                  <i className="fa fa-facebook font-primary"></i></div>
                <h5 className="b-b-light">Facebook</h5>
                <div className="row">
                  <div className="col text-center b-r-light"><span>Post</span>
                    <h4 className="counter mb-0">
                      <CountUp className="counter" end={6589} /></h4>
                  </div>
                  <div className="col text-center"><span>Like</span>
                    <h4 className="counter mb-0">
                      <CountUp className="counter" end={75269} /></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 xl-50 col-lg-6">
            <div className="card social-widget-card">
              <div className="card-body">
                <div className="redial-social-widget radial-bar-70" data-label="50%">
                  <i className="fa fa-twitter font-primary"></i></div>
                <h5 className="b-b-light">Twitter</h5>
                <div className="row">
                  <div className="col text-center b-r-light"><span>Post</span>
                    <h4 className="counter mb-0">
                      <CountUp className="counter" end={6589} />
                    </h4>
                  </div>
                  <div className="col text-center"><span>Follower</span>
                    <h4 className="counter mb-0">
                      <CountUp className="counter" end={75269} />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 xl-50 col-lg-6">
            <div className="card social-widget-card">
              <div className="card-body">
                <div className="redial-social-widget radial-bar-70" data-label="50%">
                  <i className="fa fa-linkedin font-primary"></i></div>
                <h5 className="b-b-light">linkedin</h5>
                <div className="row">
                  <div className="col text-center b-r-light"><span>Post</span>
                    <h4 className="counter mb-0">
                      <CountUp className="counter" end={1234} />
                    </h4>
                  </div>
                  <div className="col text-center"><span>linkedin</span>
                    <h4 className="counter mb-0">
                      <CountUp className="counter" end={4369} />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3 xl-50 col-lg-6">
            <div className="card social-widget-card">
              <div className="card-body">
                <div className="redial-social-widget radial-bar-70" data-label="50%">
                  <i className="fa fa-google-plus font-primary"></i></div>
                <h5 className="b-b-light">Google +</h5>
                <div className="row">
                  <div className="col text-center b-r-light"><span>Post</span>
                    <h4 className="counter mb-0">
                      <CountUp className="counter" end={369} /></h4>
                  </div>
                  <div className="col text-center"><span>Follower</span>
                    <h4 className="counter mb-0">
                      <CountUp className="counter" end={3458} />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card browser-widget">
              <div className="media card-body">
                <div className="media-img"><img src={require("../../assets/images/dashboard/chrome.png")} alt="" /></div>
                <div className="media-body align-self-center">
                  <div>
                    <p>Daily </p>
                    <h4><span className="counter">
                      <CountUp className="counter" end={36} /></span>%</h4>
                  </div>
                  <div>
                    <p>Month </p>
                    <h4><span className="counter">
                      <CountUp className="counter" end={96} /></span>%</h4>
                  </div>
                  <div>
                    <p>Week </p>
                    <h4><span className="counter">
                      <CountUp className="counter" end={46} /></span>%</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card browser-widget">
              <div className="media card-body">
                <div className="media-img"><img src={require("../../assets/images/dashboard/firefox.png")} alt="" /></div>
                <div className="media-body align-self-center">
                  <div>
                    <p>Daily </p>
                    <h4><span className="counter">
                      <CountUp className="counter" end={36} /></span>%</h4>
                  </div>
                  <div>
                    <p>Month </p>
                    <h4><span className="counter">
                      <CountUp className="counter" end={96} />
                    </span>%</h4>
                  </div>
                  <div>
                    <p>Week </p>
                    <h4><span className="counter">
                      <CountUp className="counter" end={46} /></span>%</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="card browser-widget">
              <div className="media card-body">
                <div className="media-img"><img src={require("../../assets/images/dashboard/safari.png")} alt="" /></div>
                <div className="media-body align-self-center">
                  <div>
                    <p>Daily </p>
                    <h4><span className="counter"><CountUp className="counter" end={36} /></span>%</h4>
                  </div>
                  <div>
                    <p>Month </p>
                    <h4><span className="counter"><CountUp className="counter" end={96} /></span>%</h4>
                  </div>
                  <div>
                    <p>Week </p>
                    <h4><span className="counter"><CountUp className="counter" end={46} /></span>%</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>PRODUCTS CART</h5>
              </div>
              <div className="card-body">
                <div className="user-status table-responsive">
                  <table className="table table-bordernone">
                    <thead>
                      <tr>
                        <th scope="col">Details</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Status</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Simply dummy text of the printing</td>
                        <td className="digits">1</td>
                        <td className="font-primary">Pending</td>
                        <td className="digits">$6523</td>
                      </tr>
                      <tr>
                        <td>Long established</td>
                        <td className="digits">5</td>
                        <td className="font-secondary">Cancle</td>
                        <td className="digits">$6523</td>
                      </tr>
                      <tr>
                        <td>sometimes by accident</td>
                        <td className="digits">10</td>
                        <td className="font-secondary">Cancle</td>
                        <td className="digits">$6523</td>
                      </tr>
                      <tr>
                        <td>Classical Latin literature</td>
                        <td className="digits">9</td>
                        <td className="font-primary">Return</td>
                        <td className="digits">$6523</td>
                      </tr>
                      <tr>
                        <td>keep the site on the Internet</td>
                        <td className="digits">8</td>
                        <td className="font-primary">Pending</td>
                        <td className="digits">$6523</td>
                      </tr>
                      <tr>
                        <td>Molestiae consequatur</td>
                        <td className="digits">3</td>
                        <td className="font-secondary">Cancle</td>
                        <td className="digits">$6523</td>
                      </tr>
                      <tr>
                        <td>Pain can procure</td>
                        <td className="digits">8</td>
                        <td className="font-primary">Return</td>
                        <td className="digits">$6523</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 xl-100">
            <div className="card">
              <div className="card-header">
                <h5>EMPLOYEE STATUS</h5>
              </div>
              <div className="card-body">
                <div className="user-status table-responsive">
                  <table className="table table-bordernone">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Designation</th>
                        <th scope="col">Skill Level</th>
                        <th scope="col">Experience</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bd-t-none u-s-tb">
                          <div className="align-middle image-sm-size">
                            <img className="img-radius align-top m-r-15 rounded-circle" src={require("../../assets/images/user/4.jpg")} alt="" />
                            <div className="d-inline-block">
                              <h6>John Deo <span className="text-muted digits">(14+ Online)</span></h6>
                            </div>
                          </div>
                        </td>
                        <td>Designer</td>
                        <td>
                          <div className="progress-showcase">
                            <div className="progress" style={{ height: "8px" }}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </td>
                        <td className="digits">2 Year</td>
                      </tr>
                      <tr>
                        <td className="bd-t-none u-s-tb">
                          <div className="align-middle image-sm-size">
                            <img className="img-radius align-top m-r-15 rounded-circle" src={require("../../assets/images/user/1.jpg")} alt="" />
                            <div className="d-inline-block">
                              <h6>Holio Mako <span className="text-muted digits">(250+ Online)</span></h6>
                            </div>
                          </div>
                        </td>
                        <td>Developer</td>
                        <td>
                          <div className="progress-showcase">
                            <div className="progress" style={{ height: "8px" }}>
                              <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "70%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </td>
                        <td className="digits">3 Year</td>
                      </tr>
                      <tr>
                        <td className="bd-t-none u-s-tb">
                          <div className="align-middle image-sm-size">
                            <img className="img-radius align-top m-r-15 rounded-circle" src={require("../../assets/images/user/5.jpg")} alt="" />
                            <div className="d-inline-block">
                              <h6>Mohsib lara<span className="text-muted digits">(99+ Online)</span></h6>
                            </div>
                          </div>
                        </td>
                        <td>Tester</td>
                        <td>
                          <div className="progress-showcase">
                            <div className="progress" style={{ height: "8px" }}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: "60%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </td>
                        <td className="digits">5 Month</td>
                      </tr>
                      <tr>
                        <td className="bd-t-none u-s-tb">
                          <div className="align-middle image-sm-size">
                            <img className="img-radius align-top m-r-15 rounded-circle" src={require("../../assets/images/user/6.jpg")} alt="" />
                            <div className="d-inline-block">
                              <h6>Hileri Soli <span className="text-muted digits">(150+ Online)</span></h6>
                            </div>
                          </div>
                        </td>
                        <td>Designer</td>
                        <td>
                          <div className="progress-showcase">
                            <div className="progress" style={{ height: "8px" }}>
                              <div className="progress-bar bg-secondary" role="progressbar" style={{ width: "30%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </td>
                        <td className="digits">3 Month</td>
                      </tr>
                      <tr>
                        <td className="bd-t-none u-s-tb">
                          <div className="align-middle image-sm-size">
                            <img className="img-radius align-top m-r-15 rounded-circle" src={require("../../assets/images/user/7.jpg")} alt="" />
                            <div className="d-inline-block">
                              <h6>Pusiz bia <span className="text-muted digits">(14+ Online)</span></h6>
                            </div>
                          </div>
                        </td>
                        <td>Designer</td>
                        <td>
                          <div className="progress-showcase">
                            <div className="progress" style={{ height: "8px" }}>
                              <div className="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </td>
                        <td className="digits">5 Year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 col-xl-4 xl-50 col-md-12">
            <div className="card height-equal">
              <div className="calender-widget">
                <div className="cal-img"></div>
                <div className="cal-date">
                  <h5>25<br />APRIL</h5>
                </div>
                <div className="cal-desc text-center card-body">
                  <h6 className="f-w-600">I must explain to you how all this mistaken idea truth</h6>
                  <p className="text-muted mt-3 mb-0">Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,Letraset sheets containing Lorem Ipsum passages.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 col-xl-8 xl-50 col-md-12">
            <div className="card height-equal">
              <div className="card-header">
                <h5>Contact Us</h5>
              </div>
              <div className="contact-form card-body">
                <form className="theme-form">
                  <div className="form-icon"><i className="icofont icofont-envelope-open"></i></div>
                  <div className="form-group">
                    <label htmlFor="exampleInputName">Your Name</label>
                    <input className="form-control" id="exampleInputName" type="text" placeholder="John Dio" />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="exampleInputEmail1">Email</label>
                    <input className="form-control" id="exampleInputEmail1" type="email" placeholder="Demo@gmail.com" />
                  </div>
                  <div className="form-group">
                    <label className="col-form-label" htmlFor="exampleInputEmail1">Message</label>
                    <textarea className="form-control textarea" rows="3" cols="50" placeholder="Your Message"></textarea>
                  </div>
                  <div className="text-sm-right">
                    <button className="btn btn-primary-gradien">SEND IT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-12">
            <div>
              <div className="card">
                <div className="card-header">
                  <h5 className="text-uppercase">Recent Activity</h5>
                </div>
                <div className="card-body">
                  <ul className="crm-activity">
                    <li className="media"><span className="mr-3 font-primary">E</span>
                      <div className="align-self-center media-body">
                        <h6 className="mt-0">Established fact that a reader will be distracted </h6>
                        <ul className="dates">
                          <li className="digits">25 July 2017</li>
                          <li className="digits">20 hours ago</li>
                        </ul>
                      </div>
                    </li>
                    <li className="media"><span className="mr-3 font-secondary">A</span>
                      <div className="align-self-center media-body">
                        <h6 className="mt-0">Any desktop publishing packages and web page editors.</h6>
                        <ul className="dates">
                          <li className="digits">25 July 2017</li>
                          <li className="digits">20 hours ago</li>
                        </ul>
                      </div>
                    </li>
                    <li className="media"><span className="mr-3 font-primary">T</span>
                      <div className="align-self-center media-body">
                        <h6 className="mt-0">There isn't anything embarrassing hidden.</h6>
                        <ul className="dates">
                          <li className="digits">25 July 2017</li>
                          <li className="digits">20 hours ago</li>
                        </ul>
                      </div>
                    </li>
                    <li className="media"><span className="mr-3 font-secondary">C</span>
                      <div className="align-self-center media-body">
                        <h6 className="mt-0">Contrary to popular belief, Lorem Ipsum is not simply. </h6>
                        <ul className="dates">
                          <li className="digits">25 July 2017</li>
                          <li className="digits">20 hours ago</li>
                        </ul>
                      </div>
                    </li>
                    <li className="media"><span className="mr-3 font-primary">H</span>
                      <div className="align-self-center media-body">
                        <h6 className="mt-0">H-Code - A premium portfolio template from ThemeZaa </h6>
                        <ul className="dates">
                          <li className="digits">25 July 2017</li>
                          <li className="digits">20 hours ago</li>
                        </ul>
                      </div>
                    </li>
                    <li className="media">
                      <div className="align-self-center media-body">
                        <ul className="dates">
                          <li className="digits">25 July 2017</li>
                          <li className="digits">20 hours ago</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card custom-card">
              <div className="card-header"><img className="img-fluid" src={require("../../assets/images/user-card/3.jpg")} alt="" /></div>
              <div className="card-profile"><img className="rounded-circle" src={require("../../assets/images/avtar/3.jpg")} alt="" /></div>
              <ul className="card-social">
                <li><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#javascript"><i className="fa fa-rss"></i></a></li>
              </ul>
              <div className="text-center profile-details">
                <h4>Mark Jecno</h4>
                <h6>Manager</h6>
              </div>
              <div className="card-footer row">
                <div className="col-4 col-sm-4">
                  <h6>Follower</h6>
                  <h3 className="counter">
                    <CountUp className="counter" end={9564} /></h3>
                </div>
                <div className="col-4 col-sm-4">
                  <h6>Following</h6>
                  <h3><span className="counter"><CountUp className="counter" end={49} /></span>K</h3>
                </div>
                <div className="col-4 col-sm-4">
                  <h6>Total Post</h6>
                  <h3><span className="counter"><CountUp className="counter" end={96} /></span>M</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card testimonial text-center">
              <div className="card-body">
                <Slider {...settings}>
                  <div className="item">
                    <i className="icon-quote-left"></i>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                    <img className="img-80" src={require("../../assets/images/dashboard/boy-2.png")} alt="" />
                    <h5 className="font-primary">Poio klot</h5><span>Developer</span>
                  </div>
                  <div className="item">
                    <i className="icon-quote-left"></i>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia</p>
                    <img className="img-80" src={require("../../assets/images/dashboard/boy-2.png")} alt="" />
                    <h5 className="font-primary">Poio klot</h5><span>Developer</span>
                  </div>
                </Slider>
              </div>
            </div>
            <div className="card xl-none">
              <div className="ecommerce-widget card-body">
                <div className="row">
                  <div className="col-6"><span>New Order</span>
                    <h3 className="total-num counter"><CountUp className="counter" end={25639} /></h3>
                  </div>
                  <div className="col-6">
                    <div className="text-md-right">
                      <ul>
                        <li>Profit<span className="product-stts font-primary ml-2">8989<i className="icon-angle-up f-12 ml-1"></i></span></li>
                        <li>Loss<span className="product-stts font-primary ml-2">2560<i className="icon-angle-down f-12 ml-1"></i></span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="progress-showcase">
                  <div className="progress lg-progress-bar">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default General;