import React, {Component} from 'react'

class hesErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {
            hesError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hesError:true})
    }
    render(){
        if (this.state.hesError){
            return <h1>Opsss.. this souldnt have happend</h1>
        } 
            
                
        return this.props.children
                
    
    }
}

export default hesErrorBoundary;