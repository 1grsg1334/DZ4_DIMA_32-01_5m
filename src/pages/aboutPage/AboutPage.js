import React from 'react';
import {useSelector} from "react-redux";
import ChangeAboutTitle from "../../components/ChangeAboutTitle";

const AboutPage = () => {

    const aboutTitle = useSelector(state => state.aboutTitle)

    return (
        <div>
            <h1> {aboutTitle} </h1>
            <ChangeAboutTitle/>
        </div>
    );
};

export default AboutPage;