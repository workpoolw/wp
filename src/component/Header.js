import { useState } from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    const [closeMenu, setCloseMenu] = useState(false);

    const toggleMenu = () => {
        setCloseMenu(!closeMenu);
    };

    return (
        <>
            <div className="header">
                <div className="inner">
                    <MenuIcon onClick={ toggleMenu } />
                    <h1><span>재미있는 재_능 플랫폼</span><b>WorKpool</b></h1>
                </div>
            </div>
            <Nav event={ toggleMenu } value={ closeMenu } />
        </>
    );
}

function Nav(props) {
    return (
        <div className={ props.value ? "nav off" : "nav on"}>
            <div className="black"></div>
            <ul>
                <li><CloseIcon onClick={ props.event } /></li>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/cate/design">디자인</Link></li>
                <li><Link to="/cate/it">개발</Link></li>
                <li><Link to="/cate/document">문서</Link></li>
                <li><Link to="/cate/art">영상/사진</Link></li>
                <li className="login"><Link to="/login">로그인</Link></li>
            </ul>
        </div>
    );
};

export default Header;