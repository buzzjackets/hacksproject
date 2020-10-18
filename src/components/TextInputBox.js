import React from 'react';
import {
    SafeAreaView,
    Text,
    Image,
    StyleSheet,
    View,
    ScrollView,
    ActivityIndicator,
    StatusBar,
  } from "react-native";

export default class TextInputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ' '};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        //Find a way to link this to the backend, take in the input data and transmit it to the backend to be used, the input can be accessed through the variable this.state.value
        alert('Submitted List: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div style={{background: 'linear-gradient(#f54260, #3bdbc9)', height: '650px', alignSelf: 'stretch'}}>
                <View style={{alignSelf: "center", paddingTop: 30,}}>
                    <label style={{alignSelf: "center",}}>
                        Enter List Below
                    </label>
                    <form style={{alignSelf: 'center'}} id='my_form' onSubmit={this.handleSubmit}>
                        <textarea style={{alignSelf: 'center'}} type="text" value={this.state.value} onChange={this.handleChange} />
                    </form>
                </View>
                <View style={{alignItems: "center", paddingTop: 10, paddingBottom: 30,}}>
                    <button form='my_form' type='submit'>Submit</button>
                </View>
            </div>
        );
    }
}