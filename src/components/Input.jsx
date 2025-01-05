import PropTypes from "prop-types";

Input.prototype = {
    passwordSize: PropTypes.number.isRequired,
    setPasswordSize: PropTypes.func.isRequired
}

export default function Input(props) {

    return (
        <input
            type="number"
            id="passwordSize"
            min={1}
            value={props.passwordSize}
            onChange={(ev) => props.setPasswordSize(+ev.target.value)}/>
    )
}
