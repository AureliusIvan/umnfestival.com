import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Table } from '../../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';
import { TableBody } from '../../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';
import { TableCell } from '../../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';
import { TableContainer } from '../../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';
import { TableHead } from '../../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';
import { TableRow } from '../../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';
import { Paper } from '../../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';
import { Button } from '../../../../Reusable/MaterialUICoreLazy/MaterialUICoreLazy';

// URL
import { getRequest } from '../../../../Reusable/Service/AxiosClient';
import { Modal } from '@mui/material';
import "./DivisionMenuDetail.scss";
import CustomButton from '../../../../Reusable/CustomComponent/CustomButton';

function DetailModal({ status, props }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <CustomButton onClick={handleOpen}>Detail</CustomButton>
            <Modal
                sx={{
                }}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='Modal'>
                    <div className='Name'>
                        {props.name} ({props.nim})
                    </div>
                    <div className='biodata'>
                        <div className=''>
                            Jurusan : {props.program_studi}
                        </div>
                        <div className=''>
                            Angkatan : {props.angkatan}
                        </div>
                        <div className=''>

                            Email : {props.email}
                        </div>
                        <div className=''>
                            Domisili : {props.city}
                        </div>

                        <div className=''>
                            Divisi 1 : {props.division_1}
                        </div>
                        <div className=''>
                            Divisi 2 : {props.division_2}
                        </div>

                    </div>
                    <div className='section reason_1'>
                        <span className='question'>Apa yang kamu ketahui tentang UFEST? </span> &ldquo;{props.reason_1}&rdquo;
                        <br />
                    </div>
                    <div className='section reason_2'>

                        {props.reason_2}
                    </div>
                    <br />
                    <div className='section'>
                        <div className='link Instagram'>
                            <a href={props.instagram_account} >Instagram Link</a>
                        </div>
                        <div className='link portfolio'>
                            <a href={props.portofolio}>Link Portofolio</a>
                        </div>
                        <div className='link line'>
                            {/* <a href={props.instagram_account} >Instagram Link</a> */}
                            {props.id_line}
                        </div>
                    </div>
                    <div className='accept'>
                        <Button onClick={handleClose}>
                            {props.is_accepted === 1 ? 'Di terima' : "Di tolak"}
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

function Row({ status, props }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow>
                <TableCell align="left">{props.id}</TableCell>
                <TableCell align="left">{props.name}</TableCell>
                <TableCell align="left">{props.email}</TableCell>
                <TableCell align="left">{status}</TableCell>
                {/* <TableCell align="left">{props.division_1}</TableCell> */}
                <TableCell align="left">
                    <DetailModal props={props} status={status} />
                </TableCell>
            </TableRow>

        </>
    );
}



export default function DivisionMenu(props) {
    // const token = useSelector(selectuserToken);
    const [userData, SetuserData] = useState([]);
    useEffect(() => {
        // await getRequest
        async function getData() {
            try {
                await getRequest('panitia')
                    .then((result) => {
                        console.log(props.name);
                        console.log(result.data.data);
                        SetuserData(result.data.data);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }
            catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);
    return (
        <TableContainer component={Paper} className="DivisionMenu">
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow
                        className='TableRow'
                        sx={{
                            backgroundColor: '#829fff',
                        }}
                    >
                        <TableCell align="left">ID</TableCell>
                        <TableCell align="left">Nama</TableCell>
                        <TableCell align="left">email</TableCell>
                        <TableCell align="left">status</TableCell>
                        <TableCell align="left">function</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {userData.filter((row) => row.division_1 === props.name).map((row) => {
                        let status = "";
                        if (row.is_accepted === 1) {
                            status = "Di Terima"
                        } else {
                            status = "Di Tolak"
                        }
                        return (<Row key={row.id} props={row} status={status} />)
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
