import Cookies from 'js-cookie';


export const GetCookies = (name) =>{

    return Cookies.get(name);
}

export const SetCookie = (name, value) =>
{
    var data = GetCookies(name);
    if(data.contains(value))
    {
        data.replace(value,'');//remove
    }
    else{
        data = {...data, value };
    }
    Cookies.set(name, data, { expires: 180 });
}