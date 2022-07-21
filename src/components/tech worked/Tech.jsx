import React from 'react'
import "./tech.css";
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';

const Tech = () => {
    return (
        <div className='t'>
            <div className="t-container">
                <p className="t-title">
                    Tech I've Worked with
                </p>
                <div className="t-icons">
                    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                                <p>Python</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                                <p>HTML</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                                <p>CSS</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                                <p>JavaScript</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                                <p>React JS</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                                <p>Flask</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                                <p>MongoDB</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                                <p>Node JS</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                                <p>C++</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                                <p>C</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>

                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                                <p>Bootstrap</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/qt/qt-original.svg" />
                                <p>Qt</p>
                            </Item>
                        </Grid>
                        <Grid item xs={12}>
                            <Item className='t-grid-item'>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                                <p>Git</p>
                            </Item>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Tech