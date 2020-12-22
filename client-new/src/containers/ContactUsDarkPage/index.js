import React, {Fragment, Component} from 'react';
import BannerSection from "../../components/BannerSection";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import NewsLetter from "../../components/NewsLetter";
import FollowUs from "../../components/FollowUs";
import SimpleReactValidator from 'simple-react-validator';
import {toast} from "react-toastify";

import scrollIcon from '../../doc/img/icon/scroll.png';
import phone4 from '../../doc/img/icon/phone4.png';

class ContactUsDarkPage extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator();
    }

    state = {
        name: '',
        subject: '',
        email: '',
        phone: '',
        message: '',
    };
    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    submitHandler = async e => {
        e.preventDefault();
        if (this.validator.allValid()) {
            const res = await fetch('/api/v1/add-feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name.trim(),
                    subject: this.state.subject.trim(),
                    email: this.state.email.trim(),
                    phone: this.state.phone.trim(),
                    message: this.state.message.trim(),
                }),
            });
            let json = await res.json();

            if (!json.error) {
                toast.success('You submitted the form and stuff!')
                this.setState({
                    name: '',
                    subject: '',
                    email: '',
                    phone: '',
                    message: '',
                });
                this.validator.hideMessages()
            } else {
                toast.error('Error in submitting feedback.');
            }
        } else {
            toast.error('Please fill the input');
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }
    };

    render() {
        const {name, subject, email, phone, message} = this.state;
        return (
            <Fragment>
                <div className="inner inner_bg inner_overlay">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="title_inner">
                                        <h6>CONTACT US</h6>
                                        <h1>let's Contact</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="inner_scroll">
                                <div className="scrollIcon">
                                    <img src={scrollIcon} alt="scrollIcon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*contact form area*/}
                <div className="contact_form">
                    <div className="container">
                        <div className="space-50"/>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="cotact_form">
                                    <div className="row">
                                        <div className="col-12">
                                            <h3>Let’s work together! <br/> Fill out the form.</h3>
                                        </div>
                                        <div className="col-12">
                                            <form onSubmit={this.submitHandler}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <input name="name" value={name} onChange={this.changeHandler}
                                                               type="text"
                                                               placeholder="Full Name"/>
                                                        {this.validator.message('Full Name', name, 'required')}
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input name="subject" value={subject}
                                                               onChange={this.changeHandler} type="text"
                                                               placeholder="Subject"/>
                                                        {this.validator.message('Subject', subject, 'required')}
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input name="email" value={email} onChange={this.changeHandler}
                                                               type="email"
                                                               placeholder="Email Adress"/>
                                                        {this.validator.message('Email', email, 'required|email')}
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <input name="phone" value={phone} onChange={this.changeHandler}
                                                               type="number"
                                                               placeholder="Phone Number"/>
                                                        {this.validator.message('Phone', phone, 'required')}
                                                    </div>
                                                    <div className="col-12">
                                                    <textarea name="message"
                                                              value={message}
                                                              onChange={this.changeHandler}
                                                              id="message"
                                                              cols="30" rows="5"
                                                              placeholder="Tell us about your message…"/>
                                                        {this.validator.message('Message', message, 'required')}
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="space-20"/>
                                                        <button className="cbtn1" type="submit">Sent Messege</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="col-lg-4">*/}
                            {/*    <FollowUs title="Follow Us"/>*/}
                            {/*    <NewsLetter/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <BannerSection className="parimay_bg padding5050"/>
            </Fragment>
        )
    }
}

export default ContactUsDarkPage;
