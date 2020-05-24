import originAxios from 'axios';
export function axios(option){
    const instance = originAxios.create({
        // baseURL:'http://106.54.54.237:8000/api/v1'
        // baseURL:'http://123.207.32.32:8000/api/w1'
        baseURL:"http://123.207.32.32:8000/api/m3" 
    })


    //请求拦截
    instance.interceptors.request.use(config=>{
        return config
    },err =>{
        return err
    });


    //响应拦截
    instance.interceptors.response.use(config=>{
        return config
    },err =>{
        return err
    });

    return instance(option);
}
