/* eslint-disable no-undef */
import React from "react";
import {Accordion,AccordionDetails,AccordionSummary,Table,TableCell,TableRow,TableBody,TableHead,CircularProgress,Snackbar,MenuItem,Select,TextField,Paper,Avatar,Tabs,Tab,Drawer,List,ListItem, AppBar,Toolbar,Grid,CssBaseline,Container,Card,CardContent,CardMedia,Typography,Button,Box } from "@mui/material";

function App(){
  return(
    <>
    <CssBaseline/>
      <Container maxWidth='sm' sx={{mt:8, textAlign:'center'}}>
        <Card sx={{borderRadius:3,boxShadow:10,p:2}}>
            <CardMedia component='img' height={200} image="https://images.pexels.com/photos/34482317/pexels-photo-34482317.jpeg"/>

          <CardContent>
            <Typography variant="h5" gutterBottom>
              Omakar Khot
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Frontend Developer | Loves React & MUI

            </Typography>
            {/* Box helps group elements and apply flex styling */}
            <Box sx={{mt:3,display:"flex",justifyContent:'center',gap:2}}>
              <Button variant="contained" color="primary">Follow</Button>
              <Button variant="outlined" color="secondary">Message</Button>
            </Box>
          </CardContent>
        </Card>
        <Container maxWidth="md"> 
  <h1>Dashboard</h1>
</Container>

<Box sx={{ display: 'flex', justifyContent: 'center', p: 2,backgroundColor:'rebeccapurple' }}>
  <Button>Click</Button>
</Box>

<Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={4}>
    <Card />
  </Grid>
</Grid>

<AppBar position="static">
  <Toolbar>
    <Typography variant="h6">MyApp</Typography>
  </Toolbar>
</AppBar>

<Drawer variant="permanent" anchor="left" open>
  <List>
    <ListItem>Dashboard</ListItem>
    <ListItem>Settings</ListItem>
  </List>
</Drawer>

<Tabs  >
  <Tab label="Posts" />
  <Tab label="Settings" />
</Tabs>
<Avatar src="/profile.jpg" alt="User" />

<Paper elevation={3} sx={{ p: 3 }}>
  <Typography>Panel Content</Typography>
</Paper>

<TextField label="Email" variant="outlined" />

<Select >
  <MenuItem >Ten</MenuItem>
</Select>



<Snackbar  message="Profile updated!" />

<CircularProgress color="secondary" />

<Table>
  <TableHead><TableRow><TableCell>Name</TableCell></TableRow></TableHead>
  <TableBody><TableRow><TableCell>Omkar</TableCell></TableRow></TableBody>
</Table>

<Accordion>
  <AccordionSummary>Question 1</AccordionSummary>
  <AccordionDetails>Answer 1</AccordionDetails>
</Accordion>


<List>
  <ListItem>Home</ListItem>
  <ListItem>Profile</ListItem>
</List>


      </Container>
    
    </>
  )
}

export default App;