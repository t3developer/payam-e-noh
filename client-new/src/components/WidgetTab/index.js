import React, {Fragment, useState} from 'react';
import {TabContent, TabPane, Nav, NavItem, Fade} from 'reactstrap';
import classnames from 'classnames';
import {Link} from "react-router-dom";

const WidgetTabPane = ({arr, a_id, id, dark}) => {
    return (
        <Fade in={id === a_id}>
            <div className="widget tab_widgets">
                {arr.map((item, i) => (
                    <Fragment key={i}>
                        <div className="single_post widgets_small">
                            <div className="post_img">
                                <div className="img_wrap">
                                    <Link to="/">
                                        <img src={item.image} alt="thumb"/>
                                    </Link>
                                </div>
                            </div>
                            <div className="single_post_text">
                                <div className="meta2 meta_separator1"><Link to="#">{item.category_id.name}</Link>
                                    <Link to="#">{item.submitDate}</Link>
                                </div>
                                <h4><Link to="/post1">{item.title}</Link></h4>
                            </div>
                        </div>
                        <div className="space-15"/>
                        {dark ? <div className="border_white"/> : <div className="border_black"/>}
                        <div className="space-15"/>
                    </Fragment>
                ))}
            </div>
        </Fade>
    )
};

const WidgetTab = ({className, dark, data}) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <div className={`widget_tab md-mt-30 ${className}`}>
            <Nav tabs>
                <NavItem>
                    <Link
                        to="/"
                        className={classnames({active: activeTab === '1'})}
                        onClick={() => {
                            toggle('1');
                        }}
                    >
                        RELATED
                    </Link>
                </NavItem>
                <NavItem>
                    <Link
                        to="/"
                        className={classnames({active: activeTab === '2'})}
                        onClick={() => {
                            toggle('2');
                        }}
                    >
                        LATEST
                    </Link>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId='1'><WidgetTabPane dark={dark} a_id={activeTab} id="1" arr={data.related}/></TabPane>
                <TabPane tabId='2'><WidgetTabPane dark={dark} a_id={activeTab} id="2" arr={data.latest}/></TabPane>
            </TabContent>
        </div>
    );
};

export default WidgetTab;
