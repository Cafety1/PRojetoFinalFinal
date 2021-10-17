import apiClient from "./ApiClient";

export default{
    getAllCourses() {
        
        return apiClient.get('/Courses');
    }
}