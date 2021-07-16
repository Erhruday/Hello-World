import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import TheatersIcon from '@material-ui/icons/Theaters';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CreateIcon from '@material-ui/icons/Create';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ListAltIcon from '@material-ui/icons/ListAlt';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import ExtensionIcon from '@material-ui/icons/Extension';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';
import PersonIcon from '@material-ui/icons/Person';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import Data from './Data';
import './CommonStyle.css';

function Task() {
    const [filter, setFilter] = useState('');
    const searchText = (event) => {
        setFilter(event.target.value);
    };
    console.log(filter);
    let dataSearch = Data.cardData.filter((item) => {
        return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()));
    });
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {' '}
                <u> TASK</u>
            </h1>

            <Container maxWidth="lg" style={{ marginTop: '20px' }}>
                <Grid container spacing={1} item className="main_section">
                    <Grid container spacing={1} item>
                        <Grid item container style={{ borderBottom: '2px solid rgb(185,181,181)', marginTop: '5px' }}>
                            <Grid item xs={1}>
                                <div>
                                    {' '}
                                    <h5>
                                        {' '}
                                        <b>
                                            {' '}
                                            <DeveloperBoardIcon style={{ fontSize: '60px', color: 'blue' }} />{' '}
                                        </b>
                                    </h5>{' '}
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div>
                                    <h5>
                                        <DashboardIcon /> Dashboard
                                    </h5>
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <div>
                                    <h5>
                                        <LocalLibraryIcon /> Library
                                    </h5>
                                </div>
                            </Grid>
                            <Grid item xs={2}>
                                <h5>
                                    <PersonIcon />
                                    My Profile
                                </h5>
                            </Grid>
                            <Grid item xs={2}>
                                <div>
                                    <h5>
                                        <DeviceHubIcon /> Resorces
                                    </h5>
                                </div>
                            </Grid>
                            <Grid item xs={3}>
                                <div style={{ float: 'right', marginRight: '12px' }}>
                                    <b>
                                        Stefans Dashboard <AccountCircleIcon />
                                    </b>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid xs={12}>
                            <Grid container spacing={1} item></Grid>

                            <input className="textfield_style" type="text" placeholder="Search" value={filter} onChange={searchText} />
                        </Grid>
                    </Grid>
                    {/* <Grid item style={{ borderRadius: '30px' }}> */}
                    <Grid item xs={3}>
                        <Paper elevation={0}>
                            <Paper className="paper_padding " elevation={0}>
                                <ClearAllIcon className="icon_style" />
                                All Products{' '}
                                <span style={{ float: 'right', marginRight: '10px', backgroundColor: '#74b9ff', color: '#273c75', borderRadius: '5px' }}>
                                    <b> 123 </b>
                                </span>
                            </Paper>
                            <Paper className="paper_padding " elevation={0}>
                                <TheatersIcon className="icon_style" />
                                Learning Path
                                <span style={{ float: 'right', marginRight: '10px', backgroundColor: '#74b9ff', color: '#273c75', borderRadius: '5px' }}>
                                    <b> 10</b>
                                </span>
                            </Paper>
                            <Paper className="paper_padding " elevation={0}>
                                <PlayArrowIcon className="icon_style" />
                                Courses
                                <span style={{ float: 'right', marginRight: '10px', backgroundColor: '#74b9ff', color: '#273c75', borderRadius: '5px' }}>
                                    {' '}
                                    <b> 145</b>
                                </span>
                            </Paper>
                            <Paper className="paper_padding " elevation={0}>
                                <GroupWorkIcon className="icon_style" />
                                Hands-on Labs
                                <span style={{ float: 'right', marginRight: '10px', backgroundColor: '#74b9ff', color: '#273c75', borderRadius: '5px' }}>
                                    {' '}
                                    <b> 13 </b>
                                </span>
                            </Paper>
                            <Paper className="paper_padding " elevation={0}>
                                <CheckBoxIcon className="icon_style" />
                                Quizz
                                <span style={{ float: 'right', marginRight: '10px', backgroundColor: '#74b9ff', color: '#273c75', borderRadius: '5px' }}>
                                    {' '}
                                    <b> 12 </b>
                                </span>
                            </Paper>
                            <Paper className="paper_padding " elevation={0}>
                                <BusinessCenterIcon className="icon_style" />
                                Exams
                                <span style={{ float: 'right', marginRight: '10px', backgroundColor: '#74b9ff', color: '#273c75', borderRadius: '5px' }}>
                                    {' '}
                                    <b> 8 </b>
                                </span>
                            </Paper>
                            <Paper className="paper_padding " elevation={0}>
                                <ListAltIcon className="icon_style" />
                                Resourses
                                <span style={{ float: 'right', marginRight: '10px', backgroundColor: '#74b9ff', color: '#273c75', borderRadius: '5px' }}>
                                    {' '}
                                    <b> 17 </b>
                                </span>
                            </Paper>
                            <Paper className="paper_padding " elevation={0}>
                                <CreateIcon className="icon_style" />
                                Blog
                                <span style={{ float: 'right', marginRight: '10px', backgroundColor: '#74b9ff', color: '#273c75', borderRadius: '5px' }}>
                                    {' '}
                                    <b> 112 </b>
                                </span>
                            </Paper>
                            <Paper className="paper_padding " elevation={0}>
                                <QuestionAnswerIcon className="icon_style" />
                                Question
                                <span style={{ float: 'right', marginRight: '10px', backgroundColor: '#74b9ff', color: '#273c75', borderRadius: '5px' }}>
                                    {' '}
                                    <b> 10 </b>
                                </span>
                            </Paper>

                            <Paper style={{ padding: '15px' }} elevation={0}>
                                Diffculty
                            </Paper>
                            <Paper elevation={0} style={{ padding: '15px' }}>
                                Domain
                            </Paper>
                            <Paper elevation={0} style={{ padding: '14px' }}>
                                Rating
                            </Paper>
                        </Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper elevation={0} className="right_section">
                            {dataSearch.map((item, index) => {
                                return (
                                    <Paper className="tiles_style" elevation={0}>
                                        <Grid container>
                                            <Grid item xs={2}>
                                                {item.title == 'Getting Started with Docker on Linux for Azure' ? (
                                                    <OutdoorGrillIcon className="tiles_icon1" />
                                                ) : item.title == 'Getting Started with Azure' ? (
                                                    <ExtensionIcon className="tiles_icon2" />
                                                ) : item.title == 'Introduction to Azure Resource Manager' ? (
                                                    <CastForEducationIcon className="tiles_icon3" />
                                                ) : null}
                                                {/* <div elevation={0}>
                                                    <OutdoorGrillIcon className="div_icon" />CastForEducationIcon
                                                </div> */}
                                            </Grid>
                                            <Grid item xs={7}>
                                                <div elevation={0} style={{ padding: '10px' }}>
                                                    <h5>
                                                        <span
                                                            style={{
                                                                color: 'blue',
                                                                fontSize: '10px',
                                                                backgroundColor: 'grey',
                                                                marginRight: '5px'
                                                            }}
                                                        >
                                                            <b> {item.contentBy}</b>
                                                        </span>
                                                        {item.title}
                                                    </h5>

                                                    <p>
                                                        <b>{item.rating}</b>
                                                        <StarIcon className="star_style" /> <StarIcon className="star_style" />{' '}
                                                        <StarIcon className="star_style" /> <StarIcon className="star_style" />
                                                        <StarHalfIcon className="star_style" />
                                                        Level: <b> Beginer </b>Time:<b> 1h 20m</b> Student :<b>{item.students}</b>
                                                    </p>

                                                    <p style={{ color: 'grey' }}>
                                                        In this lab you will <b> get</b> up and Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                                                        blanditiis rerum asperiores.
                                                    </p>
                                                    <p></p>
                                                    <p>
                                                        <span
                                                            style={{
                                                                padding: '3px',
                                                                color: 'blue',
                                                                fontSize: '10px',
                                                                backgroundColor: 'grey',
                                                                marginRight: '8px'
                                                            }}
                                                        >
                                                            Microsoft Azure
                                                        </span>
                                                        <span style={{ padding: '3px', fontSize: '10px', backgroundColor: 'grey', marginRight: '8px' }}>
                                                            Cloud Fundamental
                                                        </span>
                                                        <span style={{ padding: '3px', fontSize: '10px', backgroundColor: 'grey', marginRight: '5px' }}>
                                                            Development
                                                        </span>
                                                    </p>
                                                </div>
                                            </Grid>
                                            <Grid item xs={3} style={{ borderLeft: '2px solid #dfe6e9' }}>
                                                <Grid container item xs={12}>
                                                    <Grid xs={4}>
                                                        <img src={item.avtar} style={{ height: '60px', width: '60px', borderRadius: '50px', margin: '4px' }} />
                                                        {/* <AccountCircleIcon style={{ fontSize: '65px', color: 'black' }} /> */}
                                                    </Grid>
                                                    <Grid item xs={8}>
                                                        <div elevation={0}>
                                                            <p>
                                                                <b>{item.name}</b>
                                                            </p>
                                                            <span>{item.position}</span>
                                                            <p>
                                                                Progress <br /> <b>{item.progress}</b>
                                                            </p>
                                                        </div>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                );
                            })}
                        </Paper>
                    </Grid>

                    <Grid item xs={8}></Grid>
                </Grid>
                {/* </Grid> */}
            </Container>
        </div>
    );
}

export default Task;
