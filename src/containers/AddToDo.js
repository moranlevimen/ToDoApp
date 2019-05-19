import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import {connect} from 'react-redux';

class AddToDo extends Component {

    state={
        text:''
    }
    

    addToDo = (text) =>{
        //update redux store
        // this.props.dispatch({type:'ADD_TODO', text})
        this.props.dispatch(addToDo(text));
        this.setState({text:''})
    }
    
    render() {
        return (
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
            <TextInput
                onChangeText={(text) => this.setState({ text })}
                value={this.state.text}
                placeholder="add a reminder"
                style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, padding: 5 }}
            />
            <TouchableOpacity onPress={() => this.addToDo(this.state.text)}>
                <View style={{ height: 50, backgroundColor: '#eaeaea', alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Ionicons name="md-add" size={30} style={{ color: '#de9595', padding: 10 }} /> */}
                    <Text size={30} style={{ color: '#de9595', padding: 10 }}>  +  </Text>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
}
export default connect()(AddToDo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});