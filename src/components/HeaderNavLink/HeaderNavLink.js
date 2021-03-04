import { NavLink } from 'react-router-dom';
import './HeaderNavLink.css';

function HeaderNavLink(props) {
    return (
        <NavLink to={props.to} exact activeClassName="App-link-active" className="App-link">{props.text}</NavLink>
    );
}

export default HeaderNavLink;