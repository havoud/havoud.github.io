class CoolButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            downloading: false
        }
    }

    render(){


        if(this.state.downloading){
            return (
                <>
                <h3 className="github">
                    {"The number of times Embed Github has been clicked: "+poi.valueOf()}
            </h3>
            { /* every other line needs another {} after this {} */
                <h3 className="notion">
                    {"The number of times Embed Notion has been clicked: "+not_poi.valueOf()}
                </h3>
            }

                </>
        )
        }

        return(
            <button onClick={()=> this.setState({downloading: true})}>
                {this.props.customText}
            </button>

        )
    }


}