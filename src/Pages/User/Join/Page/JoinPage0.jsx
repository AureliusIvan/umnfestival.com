import './JoinPage0.scss';
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';

const CustomListItemText = styled(ListItemText)(({theme}) => ({
  margin: "10px",
}));

const CustomList = styled(List)(({theme}) => ({
  background: "rgb(0 0 0 0)"
}));

export default function JoinPage0() {
  return (
      <div id='JoinPage0'>

        <div className='subtitle'>
          <strong>
            Before we start, prepare :
          </strong>
        </div>

        <Divider/>
        <CustomList>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar sx={{bgcolor: "green"}}>1</Avatar>
            </ListItemAvatar>
            <CustomListItemText
                primary={"Portofolio (for Visual and Documentation Division)"}
                secondary={
                  <p className='desc'>
                    {"Specifically for the Visual and Documentation division. "}
                    {"Portfolio is uploaded to Google Drive. Make sure the link is publicly accessible."}
                  </p>}
            />
          </ListItem>
        </CustomList>
      </div>
  );
}