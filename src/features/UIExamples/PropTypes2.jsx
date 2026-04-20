/* Function App 1 */


import PropTypes from "prop-types"

export default function UserGreeting(props) {

    const welcomeMsg = <h2 className="welcomeMsg">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="loginPrompt">Please log in user</h2>

    return (props.isLoggedIn ? welcomeMsg : loginPrompt)
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}