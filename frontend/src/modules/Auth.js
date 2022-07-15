export const setUser = (user) => {
    window.localStorage.setItem('user', JSON.stringify(user))
}

export const getUser = () => 
    window.localStorage.getItem('user')
    ? JSON.parse(window.localStorage.getItem('user'))
    : {}

export const isLogged = () => {
    const user = getUser()
    return !!user.jwt
}

export const getToken = () =>
{
    const user = getUser()
    return user.jwt
}

export const getID = () =>
{
    const user = getUser()
    return user.user.id
}

export const getUserName = () =>
{
    const user = getUser()
    return user.user.username
}