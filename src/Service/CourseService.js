import apiClient from "./ApiClient";

export default{
    getAllCourses() {
        
        return apiClient.get('/Courses');
    },
    async saveCourse(course){
        let ret;
        if (course.id == 0) {
            ret = await apiClient.post('/Courses', course)
        } else {
            ret = await apiClient.put('/Courses', course)
            console.log("retorno do put")
            console.log(ret)
        }
        return ret;
    },
    async deleteCourse(idCourse){
        let ret;
        ret = await apiClient.delete('/Courses/'+idCourse+"?confirm=Yes")
            console.log("retorno do delete")
            console.log(ret)
        return ret;
    },
    getAllTeachers() {
        return apiClient.get('/Teachers');
    }
}