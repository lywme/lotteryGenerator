import React,{Component} from 'react';
import Ball from './Ball';
import './Lottery.css';

class Lottery extends Component{
    static defaultProps={
        title:"Lottery",
        numballs:6,
        maxnum:10
    };

    constructor(props)
    {
        super(props);
        this.state={balls:Array.from({length:this.props.numballs})};
    }

    // componentDidMount(){
    //     this.generateResult();
    // }

    generateResult=()=>{
        let result=[];
        const numballs=this.props.numballs;
        const maxnum=this.props.maxnum;
        // console.log(numballs);
        // console.log(maxnum);
        for(let i=0;i<numballs;i++)
        {
            let numgen=Math.floor(Math.random()*maxnum)+1;
            while(result.includes(numgen))
            {
                numgen=Math.floor(Math.random()*maxnum)+1;
            }
            result.push(numgen);
        }
        //console.log(result);
        result=result.sort((a,b)=>a-b);
        this.setState({balls:result});
    }

    render(){
        const listresult=this.state.balls.map((item,index)=>
            <Ball key={index} num={item}/>
        )

        return (
            <div className="lottery">
                <h1>{this.props.title}</h1>
                <div className="lotteryBall">
                    {listresult}
                </div>
                <br />
                <button onClick={this.generateResult}>generate</button>
                <br />
            </div>
        );
    }
}

export default Lottery;