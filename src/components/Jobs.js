import React, { Component } from 'react';
import {JobList} from './JobList';
import {Card, CardBody, Button} from 'reactstrap';

export class Jobs extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            selected:[],
            selectedids:[]
        }
    }

    onclick=(event)=>
    { 
        if (this.state.selectedids.indexOf(parseInt(event.currentTarget.id))<0)
        {
        const data=this.state.selected;
        const ids=this.state.selectedids;
        data.push(JobList[event.currentTarget.id-1])
        ids.push(parseInt(event.currentTarget.id))
        this.setState({
            selected:data,
            selectedids:ids
        })
    }

    else
    {
        const data=this.state.selected;
        const ids=this.state.selectedids;
        const index1=data.indexOf(JobList[event.currentTarget.id-1]);
        const index2=ids.indexOf(parseInt(event.currentTarget.id));
        data.splice(index1,1);
        ids.splice(index2,1);
       
       this.setState({
           selected:data,
           selectedids:ids
       })
    }
       
    }

    onSubmit=()=>{
        console.log(this.state.selected)
    }

    render() { 
       
        let c=0;
        const displaycards=JobList.map((job)=>{
            c++;
            
            return(
                        <div className="col-sm-6" >
                        <Card className="jobcard" id={c} onClick={(id)=>{this.onclick(id)}} 
                        style={this.state.selectedids.indexOf(c)>-1?{backgroundColor:'#deeff5'}:{}}>
                    <CardBody>
                        <table style={{width:'100%'}}>
                            <tr>
                                <th>
                                {job.title}
                                </th>
                                <th>
                                <span className="fa fa-check-circle fa-lg"
                                style={this.state.selectedids.indexOf(c)>-1?{opacity:'1',float:'right',color:'blue'}:{opacity:'0'}}
                                ></span>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <span style={{color:'gray'}}>{job.desc}</span>
                                </th>
                                <th>
                                    <img src={job.image} style={{float:'right'}}/>
                                </th>
                            </tr>
                        </table>
                    </CardBody>
                </Card>
                        </div>
                    
               
              
            )
        })

        
        return (
            <div className="container jobs">
                <h1>Jobs Category</h1>

                <div className="row">

                {displaycards}

                    </div>

            <Button size="lg" onClick={()=>{this.onSubmit()}}>Save and update</Button>
                
            </div>
        )
    }
}

export default Jobs
