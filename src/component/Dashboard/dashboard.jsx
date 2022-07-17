import React ,{useEffect, useState}from 'react';
import { ListItem,Paper,List, ListItemIcon} from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import './dashboard.css';
import Skills from './skills';
import Project from './project';
import Report from './report';
import Profile from './profile';
export default function Dashboard() {
    const [selected, setSelected] = useState('1');
    const item= [
        {
            id: '1',
            title: 'My Profile',
            component:<Profile></Profile>,
            icon: <AccountBoxIcon></AccountBoxIcon>
        },
        {
            id: '2',
            title: 'My Skills',
            component: <Skills></Skills>,
            icon: <ListAltIcon></ListAltIcon>
        },
        {
            id: '3',
            title: 'My Projects',
            component: <Project></Project>,
            icon:<CreditCardIcon></CreditCardIcon>
        },
        {
            id: '4',
            title: 'My Report',
            component: <Report></Report>,
            icon: <AssessmentIcon></AssessmentIcon>
        }

    ]
const changeSelect =(idx)=>{
    setSelected(idx);
    
}

useEffect(()=>{
    console.log(selected);
}, [selected])

  return  <div className='dashboard'>
       <Paper className='litem' elevation={3} >
            <List className='litem_list'>
                { item.map((data, index) => {
                    return (<div onClick={()=>{changeSelect(index)}} key={index}>
                    <ListItem key={index}  button selected= {index== selected? true:false}>
                    <ListItemIcon>
                        {data.icon}
                        </ListItemIcon>
                        {data.title}
                    </ListItem>
                </div>);
                })}
            </List>
       </Paper>
       <Paper className='ritem' elevation={3} >
            {item[selected].component}
       </Paper>
    </div>
}
