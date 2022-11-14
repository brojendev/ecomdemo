import React from "react";
import Select from 'react-select';
const countryList = [
    { value: 'India', label: 'India' },
    { value: 'Nepal', label: 'Nepal' },
    { value: 'Bhutan', label: 'Bhutan' }
];

class CountryList extends React.Component {
    handleChange = value => {
        // this is going to call setFieldValue and manually update values.topcis
        this.props.onChange('topics', value);
    };

    handleBlur = () => {
        // this is going to call setFieldTouched and manually update touched.topcis
        this.props.onBlur('topics', true);
    };

    render() {
        return (
            <div style={{ margin: '1rem 0' }}>
                <label htmlFor="country">Country</label>
                <Select
                    id="country"
                    options={countryList}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.props.value}
                />
                {!!this.props.error &&
                    this.props.touched && (
                        <div style={{ color: 'red', marginTop: '.5rem' }}>{this.props.error}</div>
                    )}
            </div>
        );
    }
}

export default CountryList