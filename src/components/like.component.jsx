import { useState, Fragment } from 'react';

import { Button } from 'react-bootstrap';
import { AiTwotoneDislike, AiFillLike } from "react-icons/ai";



export const Like = () => {
    const [likeCounter, UpdatedLikeCounter] = useState(100);

    const [like, updatedLike] = useState(false);

    const [disLikeCounter, updateDislikeCounter] = useState(25);

    const [disLike, updatedDislike] = useState(false);

    const removeLike = () => {
        UpdatedLikeCounter(likeCounter - 1);
        updatedLike(false);

    }


    const addLike = () => {
        UpdatedLikeCounter(likeCounter + 1);
        updatedLike(true);

    }



    const addDislike = () => {
        updatedDislike(true);
        updateDislikeCounter(disLikeCounter + 1)
    }


    const removeDislike = () => {
        updatedDislike(false);
        updateDislikeCounter(disLikeCounter - 1)

    }
    const onLikeup = () => {
        if (like) {
            removeLike();
        } else {
            if (disLike) {
                addLike();
                removeDislike()
            } else {
                addLike();
            }
        }
    }

    const onDislikeDown = () => {
        if (disLike) {
            removeDislike();
        } else {
            if (like) {
                removeLike();
                addDislike();
            } else {
                addDislike()
            }
        }
    }

    return (
        <Fragment>
            <Button
                variant={like ? 'outline-success' : "success"}
                size='sm'
                onClick={onLikeup}
                style={{ marginRight: '12px' }}
            //            disabled={like ? 'disabled' : ''}
            >
                {likeCounter} | <AiFillLike />
            </Button>
            <Button
                variant={disLike ? 'outline-info' : 'info'}
                size='sm'
                onClick={onDislikeDown}
            //          disabled={disLike ? 'disabled' : ""}
            >
                {disLikeCounter} | <AiTwotoneDislike />
            </Button>
        </Fragment>
    )
}