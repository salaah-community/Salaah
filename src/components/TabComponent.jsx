import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Company from '../pages/Company/Company';
import Defence from '../pages/Defence/Defence';
import Startup from '../pages/startup/Startup'
import { purple } from '@mui/material/colors';
import '../styles/TabComponent.css'

import Culture from '../pages/Culture/Culture';
import Hr from '../pages/hr/Hr';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function TabComponent() {
  const [value, setValue] = React.useState(0);
  const color = purple[50];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
    >
      <Tabs
        value={value}
        onChange={handleChange}
  indicatorColor="secondary"
  centered
      >
        <Tab sx={{color: 'white!important'}} label="Companies" {...a11yProps(0)} />
        <Tab sx={{color: 'white!important'}} label="Defence" {...a11yProps(1)} />
        <Tab sx={{color: 'white!important'}} label="Culture" {...a11yProps(2)} />
        <Tab sx={{color: 'white!important'}} label="HR" {...a11yProps(3)} />
        <Tab sx={{color: 'white!important'}} label="StartUp" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Company />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Defence />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Culture />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Hr />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Startup />
      </TabPanel>
    </Box>
  );
}