export default class Course {
    constructor(json) {
        this.id = 0;
        this.title  = ""
        this.description = ""
        this.teacher = {id: 0, name: ""}
        this.urlCover = null
        this.lessons = []
        // só para o prettier não reclamar json não usado
        console.log(json)
        //if(json != undefined && json != "") {
        //
        //}
    }
}