import React ,{useEffect, useState}from 'react';
import { ListItem,Paper,List, ListItemIcon, Grid} from '@material-ui/core';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ListAltIcon from '@material-ui/icons/ListAlt';
import './dashboard.css';
import Skills from '../Dashboard/skills/skills';
import Project from './Project/projects';
import Report from './report';
import Profile from './profile/profile';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
export default function Dashboard() {
    const [selected, setSelected] = useState('0');
    const {currentUser} = useContext(AuthContext);
    const item= [
        {
            id: '0',
            title: 'My Profile',
            component:<Profile></Profile>,
            icon: <AccountBoxIcon></AccountBoxIcon>
        },
        {
            id: '1',
            title: 'My Skills',
            component: <Skills></Skills>,
            icon: <ListAltIcon></ListAltIcon>
        },
        {
            id: '2',
            title: 'My Projects',
            component: <Project></Project>,
            icon:<CreditCardIcon></CreditCardIcon>
        },
        {
            id: '3',
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
    console.log(currentUser);
}, [selected])

  return <Grid container spacing={2}>
       <Grid item xs={8}>
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
       </Grid>
       <Grid item xs={8}>
            {item[selected].component}
       </Grid>
    </Grid>
}
