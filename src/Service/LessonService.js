import apiClient from "./ApiClient";

export default{
    getAllLessons() {
        
        return apiClient.get('/Lessons');
    }
}