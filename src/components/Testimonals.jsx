import React from "react";
import classes from "./Testimonals.module.css";
import image1 from "../images/image-jennie.jpg";
import image2 from "../images/image-emily.jpg";
import image3 from "../images/image-thomas.jpg";
const Testimonals = () => {
    return (
        <div>
            <h1 className={classes.title}>CLIENT TESTIMONALS</h1>
            <div className={classes.testimonals}>
                <div className={classes.item}>
                    <img src={image2} alt="" className={classes.img} />
                    <p className={classes.text}>
                        We put our trust in Sunnyside and they delivered, making
                        sure our needs were met and deadlines were always hit.
                    </p>
                    <div className={classes.about}>
                        <span className={classes.name}>Emily R.</span>
                        <span className={classes.desg}>EMarketing Director</span>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={image3} alt="" className={classes.img} />
                    <p className={classes.text}>
                        Sunnyside’s enthusiasm coupled with their keen interest
                        in our brand’s success made it a satisfying and
                        enjoyable experience.
                    </p>
                    <div className={classes.about}>
                        <span className={classes.name}>Thomas S.</span>
                        <span className={classes.desg}>Chief Operating Officer</span>
                    </div>
                </div>
                <div className={classes.item}>
                    <img src={image1} alt="" className={classes.img} />
                    <p className={classes.text}>
                        Incredible end result! Our sales increased over 400%
                        when we worked with Sunnyside. Highly recommended! About
                        Services Projects Contact
                    </p>
                    <div className={classes.about}>
                        <span className={classes.name}>Jennie F.</span>
                        <span className={classes.desg}>Business Owner</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonals;
