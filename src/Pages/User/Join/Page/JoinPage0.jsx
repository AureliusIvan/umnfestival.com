import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import './JoinPage0.scss';

const CustomListItemText = styled(ListItemText)(({ theme }) => ({
    margin: "10px",
}));

const CustomList = styled(List)(({ theme }) => ({
    background: "rgb(0 0 0 0)"
}));



const title1 = <p className='title'>Third COVID-19 Vaccine Certificate</p>;
const title2 = <p className='title'>Portofolio (for Visual and Documentation Division)</p>;
const desc1 = <p className='desc'>Third COVID-19 vaccine certificate, in jpg or png format. Maks size is 1 MB.</p>


export default function JoinPage0() {
    return (
        <div className='JoinPage0'>
            <p><strong>Before we start, prepare :</strong></p>
            <Divider />
            <CustomList >
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "green" }}>1</Avatar>
                    </ListItemAvatar>
                    <CustomListItemText
                        primary={title1}
                        secondary={desc1}
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "green" }}>2</Avatar>
                    </ListItemAvatar>
                    <CustomListItemText
                        primary={title2}
                        secondary={
                            <p className='desc'>
                                {"Specifically for the Visual and Documentation division. "}
                                {"Portfolio is uploaded to Google Drive. Make sure the link is publicly accessible."}
                            </p>
                        }
                    />
                </ListItem>
            </CustomList>
        </div>
    );
}