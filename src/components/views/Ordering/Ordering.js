import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import { spacing } from '@material-ui/system';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const theme = {
    spacing: 8,
  }

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
  rootOrder: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Ordering() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box m={5}>
      <Container maxWidth='sm'>
        <div className={classes.root}>
          <AppBar position='static' color='default'>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor='primary'
              textColor='primary'
              variant='fullWidth'
              aria-label='full width tabs example'
            >
              <Tab label='Table 1' {...a11yProps(0)} />
              <Tab label='Table 2' {...a11yProps(1)} />
              <Tab label='Table 3' {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            
            <TabPanel value={value} index={0} dir={theme.direction}>

            <Button variant='contained' color='secondary' href='./ordering/:id'>New Order</Button>
              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                className={classes.rootOrder}
              >
                <ListItem button onClick={handleClick}>
                  <ListItemText primary='Order 1' secondary='Ready!' />
                  {open}
                </ListItem>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary='Pizza' secondary='ingredients'/>
                      <Button variant='contained' color='secondary'>Delivered</Button>
                    </ListItem>
                  </List>
                </Collapse>
              </List>

              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                className={classes.rootOrder}
              >
                <ListItem button onClick={handleClick}>
                  <ListItemText primary='Order 2' secondary='Not ready yet.' />
                  {open}
                </ListItem>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary='Coffee' secondary='Latte'/>
                      <Button variant='contained' color='secondary' disabled>Delivered</Button>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
            <Button variant='contained' color='secondary' href="./ordering/:id">New Order</Button>
              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                className={classes.rootOrder}
              >
                <ListItem button onClick={handleClick}>
                  <ListItemText primary='Order 1' secondary='Ready!' />
                  {open}
                </ListItem>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary='Donut' secondary=''/>
                      <Button variant='contained' color='secondary'>Delivered</Button>
                    </ListItem>
                  </List>
                </Collapse>
              </List>

        </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            <Button variant='contained' color='secondary' href='./ordering/:id'>New Order</Button>
              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                className={classes.rootOrder}
              >
                <ListItem button onClick={handleClick}>
                  <ListItemText primary='Order 1' secondary='Not ready yet.' />
                  {open}
                </ListItem>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary='Pizza' secondary='ingredients'/>
                      <Button variant='contained' color='secondary' disabled>Delivered</Button>
                    </ListItem>
                  </List>
                </Collapse>
              </List>

              <List
                component='nav'
                aria-labelledby='nested-list-subheader'
                className={classes.rootOrder}
              >
                <ListItem button onClick={handleClick}>
                  <ListItemText primary='Order 2' secondary='Not ready yet' />
                  {open}
                </ListItem>
                <Collapse in={open} timeout='auto' unmountOnExit>
                  <List component='div' disablePadding>
                    <ListItem button className={classes.nested}>
                      <ListItemText primary='Coffee' secondary='Latte'/>
                      <Button variant='contained' color='secondary' disabled>Delivered</Button>
                    </ListItem>
                  </List>
                </Collapse>
              </List>
        </TabPanel>
          </SwipeableViews>
        </div>
      </Container>
    </Box>
  );
}

export default Ordering;
