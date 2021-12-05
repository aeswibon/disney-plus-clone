import React, { useEffect } from 'react';
import { useDispatch, useSelector } from  'react-redux';
import { setMovies } from '../../features/movie/movieSlice';
import { selectUserName } from '../../features/user/userSlice';
import db from '../../firebase';

import { Container } from "./StyledHomeElements";

import ImgSlider from '../ImgSlider';
import Recommends from '../Recommends';
import Viewers from '../Viewers';
import NewDisney from '../Originals';
import Originals from '../NewDisney';
import Trending from '../Trending';


const HOME = () => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    useEffect(() => {
        db.collection('movies').onSnapshot(snapshot => {
            snapshot.docs.map(doc => {
                switch (doc.data().type) {
                    case "recommend":
                        recommends = [
                            ...recommends,
                            { id: doc.id, ...doc.data() },
                        ];
                        break;
                    case "new":
                        newDisneys = [
                            ...newDisneys,
                            { id: doc.id, ...doc.data() },
                        ];
                        break;
                    case "original":
                        originals= [...originals, { id: doc.id, ...doc.data() }];
                        break;
                    case "trending":
                        trending= [...trending, { id: doc.id, ...doc.data() }];
                        break;
                }
            });

            dispatch(
                setMovies({
                    recommend: recommends,
                    newDisney: newDisneys,
                    original: originals,
                    trending: trending,
                })
            );
        });
    }, [userName])

    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}

export default HOME;
