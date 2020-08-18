import Axios from "axios"

function getter(url) 
{
     return Axios.get(url)
}

function putter(url,param)
{
    return Axios.put(url,param)
}

function adder(url,param)
{
    return Axios.post(url,param)
}


function deleter(url)
{
    return Axios.delete(url)
}

export {getter,putter,adder,deleter}