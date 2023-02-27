export class ClassComp extends Reac.Component {
    constructor(props) {
        super(props)

        this.state = {
            h: 0,
            m:0,
            s:0,
            counter: 0
        }

        this.passSecond = ()=> {
            let time = {...this.state}
            time.s++;
            if(time.s == 60)  {
                time.s = 0
                time.m += 1
            }

            this.setState({...time, counter: this.state.counter + 1})
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.passSecond, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    shouldComponentUpdate(propsSuccessive, stateSuccessivo) {
        if(this.state.counter % 10 != 0){
            return false
        }
        return true
    }

    render(){
        

        
        return (<>
        {this.state.h} : {this.state.m} : {this.state.s}
        </>)

    }
}