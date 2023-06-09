import axios from 'axios';

export function ApiGet(url, setState)
{
    axios.get(url).then(res => {
        setState(res.data);
    }).catch((error) =>
    {
        console.log(error);
    })
};

export function ApiPost(url, data, setState)
{
    axios.post(url, data).then(res => {
        setState(res.data.message);
    }).catch((error) =>
    {
        console.log(error);
    })
};

export function ApiPut(url, data, setState)
{
    axios.put(url, data).then(res => {
        setState(res.data.message);
    }).catch((error) =>
    {
        console.log(error);
    })
};

export function ApiDelete(url, setState)
{
    axios.delete(url).then(res => {
        setState(res.data.message);
    }).catch((error) =>
    {
        console.log(error);
    })
};