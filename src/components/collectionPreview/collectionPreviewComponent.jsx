import React from "react";

import CollectionItemComponent from "../collectionItem/collectionItemComponent";

import "./collectionPreviewStyle.scss";

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, index) => index < 4)
				.map(({ id, ...collectionItemProps }) => (
					<CollectionItemComponent key={id} {...collectionItemProps} />
				))}
		</div>
	</div>
);

export default CollectionPreview;
