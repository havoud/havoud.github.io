

class WelcomeBack extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'there',
            apppVersion: '1'
        }
    }

    render(){
        return(
            <>
                <h2>Hello {this.state.name || 'Friend'}! Welcome Back.</h2>
                {
                    this.state.apppVersion && this.state.apppVersion < 2
                        ? <p>This app helps you to see the statistics of the number of times which every component of your app has been clicked.</p>
                        : ''
                }
                <CoolButton  customText={this.state.apppVersion && this.state.apppVersion < 2 ? 'Download Views' : 'Download'} />
            </>
        )
    }


}

