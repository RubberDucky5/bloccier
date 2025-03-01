import "./SessionCard.css"

export function SessionCard (props) {
    return (
        <div className="card">
            <p className="card__title">{props.data.type}</p>
            <hr/>
            <div className="card__body">
                <div className="card__content">
                    {formatClimbs(props.data.climbs)}
                </div>
                <div className="card__content">
                    <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )
}

function formatClimbs(climbs) {
    climbs.map((c) => <div class="card__climb"><p>{c}</p></div>);

    return climbs;
}