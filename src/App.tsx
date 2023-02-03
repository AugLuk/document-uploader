import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Home, InsertDriveFile, Circle } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Collapse, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Stack } from '@mui/material';
import DropzoneCard from './DropzoneCard';

const drawerWidth = 240;

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography>
            Toolbar
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItemButton selected={true}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Upload" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <InsertDriveFile />
            </ListItemIcon>
            <ListItemText primary="Documents" />
          </ListItemButton>
          <Collapse in={true}>
            <List sx={{ listStyleType: "disc", pl: 8 }}>
              {["Inbox", "Sent", "Drafts"].map((item) => (
                <ListItemButton key={item} sx={{ display: 'list-item' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, height: "100vh", p: 3, background: "linear-gradient(135deg, rgba(254,235,255,1) 0%, rgba(247,110,255,1) 100%)" }}
      >
        <Toolbar />
        <Paper sx={{ p: 4, height: "90%", borderRadius: 8 }}>
          <Grid container spacing={4}>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card variant='outlined'>
                  <CardContent>
                    <FormControl>
                      <FormLabel id="demo-radio-buttons-group-label">Type of Document</FormLabel>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="PDF"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel value="PDF" control={<Radio />} label="PDF" />
                        <FormControlLabel value="Other formats" control={<Radio />} label="Other formats" />
                      </RadioGroup>
                    </FormControl>
                  </CardContent>
                </Card>
                <Card variant='outlined'>
                  <CardContent>
                    <Typography>
                      List of uploads
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Stack spacing={2}>
                <DropzoneCard />
                <Card variant='outlined'>
                  <CardContent>
                    <Typography>
                      Preview uploaded files
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>
  );
}

