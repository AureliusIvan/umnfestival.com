import "./Feature.scss"

function ResponseCard(props) {
    return (<>
        <div className="FeatureCard">
            <div className="VStack">
                <p className="Heading">
                    {props.content}
                </p>
            </div>

        </div>
    </>)
}



function AnnouncementCard(props) {
    return (<>
        <div className="FeatureCard">
            {props.content}
        </div>
    </>)
}


export default function Feature(props) {
    return (<>
        <div className="Feature">
            <ResponseCard content="Turn OFF/ON Response" />
            <AnnouncementCard content="Announcement" />
        </div>
    </>)
}