import "./SessionCard.css"

export function SessionCard (props) {
    return (
        <div className="card">
            <div class="card__title">
                <p className="card__session">{props.data.type}</p>
                <p className="card__date">{ new Intl.DateTimeFormat('default', {month: '2-digit', day: '2-digit', year: '2-digit'}).format(new Date(props.data.date))}</p>
            </div>
            <hr/>
            <div className="card__body">
                <div className="card__content">
                    {formatClimbs(props.data.climbs)}
                </div>
                <div className="card__content">
                    <p>{props.data.notes}</p>
                </div>
            </div>
        </div>
    )
}

function formatClimbs(climbs) {
    climbs.map((c) => <div class="card__climb"><p>{c}</p></div>);

    return climbs;
}