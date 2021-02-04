import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

import { propTypes } from "react-bootstrap/esm/Image";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";

import "../../styles/home.scss";

export const Cardplanets = props => {
	const { store, actions } = useContext(Context);

	return (
		<Card className="mb-2" style={{ width: "18rem" }}>
			<Card.Img className="cardTemplate" variant="top" src={props.src} />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>Oohh que planeta tan chulo.</Card.Text>
				<div className="d-flex justify-content-between">
					<Link to={"/planets/" + props.name.replace(" ", "_")}>
						<Button
							variant="primary"
							onClick={() => {
								props.url;
								actions.getUrl(props.index);
							}}>
							<p>LINK TO:</p>
						</Button>
					</Link>
					<button className="btn btn-success">
						<i className="far fa-heart" />
					</button>
				</div>
			</Card.Body>
		</Card>
	);
};
Cardplanets.propTypes = {
	name: PropTypes.string,
	src: PropTypes.string,
	onClick: PropTypes.any,
	url: PropTypes.string,
	index: PropTypes.number
};
