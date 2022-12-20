import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
<li className={css.item}>
            <span className={isOnline ? `${css.status} ${css.statusOnline}` : `${css.status} ${css.statusOffline}`} ></span>
    <img className={css.avatar} src={avatar} alt={`${name} avatar`} width="48" />
    <p className={css.name}>{ name }</p>
</li>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


// {css.status},