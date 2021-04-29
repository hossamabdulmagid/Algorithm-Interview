import { useState, Fragment } from 'react';

import { Button } from 'react-bootstrap';



export const Like = () => {
    const [likeCounter, UpdatedLikeCounter] = useState(100);

    const [like, updatedLike] = useState(false);

    const [disLikeCounter, updateDislikeCounter] = useState(25);

    const [disLike, updatedDislike] = useState(false);


    const onLikeup = () => {
        UpdatedLikeCounter(likeCounter + 1);
        updatedLike(true);
        updatedDislike(false);
        updateDislikeCounter(25);

    }


    const onDislikeDown = () => {
        updateDislikeCounter(disLikeCounter + 1);
        updatedDislike(true);
        updatedLike(false);
        UpdatedLikeCounter(100);

    }


    return (
        <Fragment>
            <Button
                className="btn btn-primary"
                size='sm'
                onClick={onLikeup}
                style={{ marginRight: '12px' }}
                disabled={like ? 'disabled' : ''}
            >
                {likeCounter} | Like
                </Button>
            <Button
                className="btn btn-danger"
                size='sm'
                onClick={onDislikeDown}
                disabled={disLike ? 'disabled' : ""}
            >
                {disLikeCounter} | disLike
                </Button>
        </Fragment >
    )
}