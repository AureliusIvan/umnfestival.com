import "./DivisionNav.scss"
// import { DivisionData } from "../../../User/Division/DivisionData";
// import { useSelector } from "react-redux";
// import { selectPage } from "../../../../Redux/features/page/pageSlice";

function DivisionNavCard(props) {
    return (<>
        <div className="DivisionNavCard"
            onClick={props.onClick}>
            <p>{props.Title} - {props.subTitle}</p>
        </div>
    </>)
}

export default function DivisionNav(props) {
    const page = useSelector(selectPage);
    return (<>
        <div className="DivisionNav">
            {DivisionData.filter((data) => data.id !== 0).map((filtered, index) => {
                return <DivisionNavCard
                    key={filtered.id}
                    color={page === "about" ? "red" : "white"}
                    className="DivisionNav"
                    subTitle={filtered.name}
                    Title={filtered.division}
                    onClick={() => { props.handleClick(filtered.division); }}
                />
            }
            )}
        </div>
    </>)
}

