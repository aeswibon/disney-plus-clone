import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import {
    selectUserName,
    selectUserPhoto,
    setUserLoginDetails,
    setSignOutState,
} from "../../features/user/userSlice";

import {
    Login,
    Logo,
    Nav,
    NavMenu,
    UserImg,
    SignOut,
    DropDown,
} from "./StyledHeaderElement";

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                setUser(user);
                history.push('/home');
            }
        })
    },[userName])

    const handleAuth = () => {
        if(!userName) {
            auth
                .signInWithPopup(provider)
                .then(result => {
                    setUser(result.user);
                })
                .catch(error => {
                    alert(error.message);
                })
        } else if (userName) {
            auth
                .signOut()
                .then(() => {
                    dispatch(setSignOutState());
                    history.push("/");
                })
                .catch((error) => {
                    alert(error.message);
                });
        }
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )
    }

    return (
        <Nav>
            <Logo href="/home">
                <img src="/images/logo.svg" alt="Disney+" />
            </Logo>
            {!userName ? (
                <Login onClick={handleAuth}>Login</Login>
            ) : (
                <>
                    <NavMenu>
                        <a href="/home">
                            <img src="/images/home-icon.svg" alt="HOME" />
                            <span>HOME</span>
                        </a>
                        <a>
                            <img src="/images/search-icon.svg" alt="SEARCH" />
                            <span>SEARCH</span>
                        </a>
                        <a>
                            <img
                                src="/images/watchlist-icon.svg"
                                alt="WATCHLIST"
                            />
                            <span>WATCHLIST</span>
                        </a>
                        <a>
                            <img
                                src="/images/original-icon.svg"
                                alt="ORIGINALS"
                            />
                            <span>ORIGINALS</span>
                        </a>
                        <a>
                            <img src="/images/movie-icon.svg" alt="MOVIE" />
                            <span>MOVIE</span>
                        </a>
                        <a>
                            <img src="/images/series-icon.svg" alt="SERIES" />
                            <span>SERIES</span>
                        </a>
                    </NavMenu>
                    <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
                            <span onClick={handleAuth}>Sign out</span>
                        </DropDown>
                    </SignOut>
                </>
            )}
        </Nav>
    );
}

export default Header;
