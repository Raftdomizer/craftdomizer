import React from "react";

const RadioButton = (props) => {
    const {
        optionValue,
        optionName,
        radioOption,
        onChange,
        labelName
    } = props

    return (
        <div>
            <label>
                <input
                    type="radio"
                    value={optionValue}
                    name={optionName}
                    checked={radioOption === optionValue}
                    onChange={(e) => onChange(e)}
                />
                {labelName}
            </label>
        </div>
    )
}

export default RadioButton;