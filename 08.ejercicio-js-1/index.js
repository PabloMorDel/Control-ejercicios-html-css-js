'use strict';
const getUsers = async (numberOfUsers) => {
    try {
        const response = await fetch(
            `https://randomuser.me/api/?results=${numberOfUsers}`
        );
        const data = await response.json();
        console.log(data);
        const info = data.results;
        const users = info.map((user) => ({
            username: user.login.username,
            name: user.name.first,
            lastName: user.name.last,
            sex: user.gender,
            country: user.location.country,
            email: user.email,
            profilePic: user.picture.large,
        }));
        console.log(users);
    } catch (error) {
        console.warn('PROBLEMAS');
    }
};
getUsers(5);
