
import { Suspense, useEffect, useState, lazy } from "react";
import "./Database.scss";
import { GridToolbar } from "../../../Reusable/MaterialUICoreLazy/MaterialX"
import { getRequest } from "../../../Reusable/Service/AxiosClient";

const CustomGridLazy = lazy(() =>
    import("./CustomGrid").then((module) => ({
        default: module.CustomGrid,
    }))
);



const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Nama', width: 130, editable: true },
    { field: 'jurusan', headerName: 'Jurusan', width: 130, editable: true },
    { field: 'angkatan', headerName: 'Angkatan', width: 130, editable: true },
    { field: 'nim', headerName: 'NIM', width: 130, editable: true },
    { field: 'email', headerName: 'Email', width: 130, editable: true },
    { field: 'divisi', headerName: 'Divisi', width: 130, editable: true },
    { field: 'divisialt', headerName: 'Divisi Alternatif', width: 130, editable: true },
    { field: 'status', headerName: 'Status', width: 130, editable: true },
    { field: 'id_line', headerName: 'Line', width: 130, editable: true },
    { field: 'created_at', headerName: 'Action', width: 130, editable: true },
];

export default function Database(props) {
    const [userData, SetuserData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await getRequest('panitia')
            SetuserData(result.data.data);
        }
        fetchData();
    }, []);
    return (
        <div className="database">
            <Suspense fallback={"Loading. . ."}>
                <CustomGridLazy
                    rowHeight={30}
                    rows={
                        userData.map((post, index) => {
                            let status = "";
                            if (post.is_accepted === 1) {
                                status = "Di Terima"
                            } else {
                                status = "Di Tolak"
                            }
                            return (
                                {
                                    id: index,
                                    name: post.name,
                                    jurusan: post.program_studi,
                                    angkatan: post.angkatan,
                                    nim: post.nim,
                                    email: post.email,
                                    divisi: post.division_1,
                                    divisialt: post.division_2,
                                    status: status,
                                    id_line: post.id_line,
                                    created_at: post.created_at,
                                }
                            )
                        })
                    }
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                >

                </CustomGridLazy>
            </Suspense>
        </div>)
}



