import './App.css';

import React, {useState} from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ResponsiveAppBar from './components/Appbar';
import {Grid, Card, TextField} from '@mui/material'

let globalID = 0

function App(){

    const [task, setTask] = useState("")
    const [todos, setTodos] = useState([])

    function createTodo(event){
        event.preventDefault()
        setTodos(oldTasks =>{
            setTask('')
            console.log(task)
            return [...oldTasks, {todo: task, id: globalID++}]
        })
    }

    function deleteItem(itemId){
        setTodos(oldTodos => oldTodos.filter(item => item.id!==itemId))
    }

    return (
        <div>
            <ResponsiveAppBar />
                <div className='myForm'>
                    <form onSubmit={createTodo} style={{display: 'inline-flex'}}>
                        <TextField id="outlined-basic" sx={{width: 500,maxWidth: '90%'}} className="inputRounded" label="Enter Something!" variant="outlined" value={task} 
                        onChange={event =>{
                            setTask(event.target.value)
                        }}/>
                        <Button variant="contained" type='Submit' size='medium' sx={{backgroundColor: 'black', borderTopRightRadius: '40px', borderBottomRightRadius: '40px'}}>Submit</Button>
                    </form>
                    <Grid container spacing={1} sx={{marginTop: '3rem', "display":"inline-flex","alignContent":"center","justifyContent":"center","alignItems":"center"}}>
                        {todos.map((item) => {
                            return (<div key={item.id} className='cover'>
                                    <Grid item xs={2} sm={4} md={10} sx={{minWidth: '100%'}}>
                                        <Card variant="outlined" sx={{margin: '20px 20px 20px 20px'}}>
                                        <React.Fragment>
                                            <CardContent>
                                                <Typography variant="h5" component="div" sx={{"overflowWrap":"break-word"}}>
                                                {item.todo}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" sx={{color: 'black'}} onClick={()=> deleteItem(item.id)}>Delete</Button>
                                            </CardActions>
                                        </React.Fragment>
                                        </Card>
                                    </Grid>
                                    </div>
                                )
                        })}
                    </Grid>
                </div>
        </div>
    )
}

export default App
