import React, { useState } from 'react';
import logo from '../logo.svg';

import employeesdata from '../API/employeesdata';

function Home() {
    const [empData, setEmpData] = useState(employeesdata);
    const [empCheck, setEmpcheck] = useState(empData.employees[0].name);
    // console.log(empData.employees[0].name);
    console.log(employeesdata);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 bg-dark left_div">
                        {' '}
                        <img src={logo} className="App-logo" alt="logo" className="logo_img" />
                        <div className="emp_list">
                            {empData.employees.map((element) => {
                                const { name, colleagues } = element;
                                return (
                                    <>
                                        <ul>
                                            <li
                                                onClick={() => {
                                                    setEmpcheck(name);
                                                }}
                                            >
                                                {name}
                                                <ul>
                                                    <li style={{ color: 'white', fontWeight: 'normal' }}>{colleagues}</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-9 bg-light right_div">
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-9">
                                {empData.employees.map((element) => {
                                    const { name, biography, image } = element;

                                    if (empCheck == name) {
                                        return (
                                            <div className="details_section">
                                                {/* <img src={img} alt="img" /> */}
                                                <div className="row">
                                                    <div className="col-2">
                                                        {' '}
                                                        <img className="details_img" src={require(`../images/${image}`).default} alt="img" />
                                                    </div>
                                                    <div className="col-7">
                                                        {' '}
                                                        <h2 className="name">{name}</h2>
                                                    </div>
                                                </div>

                                                <div className="biodata">
                                                    <h4>Biography</h4>
                                                    {biography}
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
