import apiClient from "./ApiClient";
export default {
    async saveImage(idImage, img){
        let ret;
        if(idImage >0) {
            ret = await apiClient.put('/Images', {id:idImage, image64: img})
        } else {
            ret = await apiClient.post('/Images', {id:0, image64: img})
        }
        console.log(ret)
        return ret.data.id;
    },
}