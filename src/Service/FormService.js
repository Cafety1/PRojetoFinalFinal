import apiClient from "./ApiClient";

export default{
    getAllCoursesForm() {
        
        return apiClient.get('/CoursesForm');
    }
}