import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--img">
                <img className="card-img--style" src={props.imageUrl} alt={props.title} />
            </div>
            <div>
                <img className="card-icon--location" src="./icons/location.svg" alt="Icon location" />
                <span className="card--place">{props.location}</span>
                <a className="card--link" href={props.googleMapsUrl}>View on Google Maps</a>
                <div className="card--info">
                    <h1 className="card--title">{props.title}</h1>
                    <p><span className="card--date">{props.startDate}</span> - <span className="card--date">{props.endDate}</span></p>
                    <p className="card--description">{props.description}</p>
                </div>
            </div>

        </div>
    )
}