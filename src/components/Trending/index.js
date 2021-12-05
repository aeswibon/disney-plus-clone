import React from 'react';

import { useSelector } from "react-redux";
import { selectTrending } from "../../features/movie/movieSlice";

import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./StyledTrendingElements";

const Trending = () => {
    const movies = useSelector(selectTrending);

    return (
        <Container>
            <h4>Recommended for You</h4>
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

export default Trending;
