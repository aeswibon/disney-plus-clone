import React from 'react';

import { useSelector } from "react-redux";
import { selectNewDisney } from "../../features/movie/movieSlice";

import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./StyledNewDisneyElements";

const Originals = () => {
    const movies = useSelector(selectNewDisney);

    return (
        <Container>
            <h4>New to Disney+</h4>
            <Content>
                {movies &&
                    movies.map((movie, key) => (
                        <Wrap key={key}>
                            {movie.id}
                            <Link to={"/detail/" + movie.id}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    );
}

export default Originals;
