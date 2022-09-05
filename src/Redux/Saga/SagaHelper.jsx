import Axios from 'axios';
// import Axios from '../../helper/Axios';

const JsonHeaders = {
    "Accept":"/",
    "Content-Type":"application/json"
}
const HtmlHeaders = {
    "Accept":"/",
    "Content-Type":"text/html"
}
/**
  + #### Axios Request Handler Middleware
  + AxiosRequestHandler({ type : 'json' , url: 'GET' })
  @param {String} method - GET, POST, PUT, DELETE
  @param {String} URL_OR_API
  @param {Object} Data
  @param {String} type - json, html
  @returns Axios.request({ method , url , data , JsonHeaders })
 */
export async function AxiosRequestHandler({ method, url, body , type }) {


    if(type === 'json' || type === 0)
        {
            const Request = {
                url:url,
                method:method,
                body
            }
            const Response = await Axios.request(Request);
            return Response;
        }
    else if(type === 'html' || type === 1)
        {
            const Request = {
                url:url,
                method:method,
                headers: HtmlHeaders,
                body
            }
            const Response = await Axios.request(Request);
            return Response;
        }
    else
        {
            throw new Error('Invalid Type of AxiosRequestHandler()');
        }
}
export function* Import_Type_Axios_Get(url)  
    {
        return yield AxiosRequestHandler({ type : 'json' , url: 'GET' })
    }
export function* Import_Type_Axios_Post(url , body)  
{
        return yield AxiosRequestHandler({ type : 'json' , url: url , method : 'POST' , body })
    }