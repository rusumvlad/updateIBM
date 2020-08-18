import Axios from "axios"
import http from "./AxiosHTTP";

/*Api for exams */
const getExams = () => {
    return http.get("/exams");
};

const filterFaculty = faculty => {
    return http.get(`/students/${faculty}`)
}

const filterYearOfStudy = yearOfStudy => {
    return http.get(`/students/exams/${yearOfStudy}`)
}
const addExam = data => {
    return http.post('/addExam', data);
};

const updateExams = (id, data) => {
    return http.put(`/updateExam/${id}`, data);
};

const updateStatusExam = (id, data) => {
    return http.put(`/updateStatus/${id}`, data)
};

const removeExam = id => {
    return http.delete(`/deleteExam/${id}`)
};


function getter(url) {
    return Axios.get(url)
}

function putter(url, param) {
    return Axios.put(url, param)
}

function adder(url, param) {
    return Axios.post(url, param)
}


function deleter(url) {
    return Axios.delete(url)
}

export { getter, putter, adder, deleter }
export default {
    getExams,
    filterFaculty,
    filterYearOfStudy,
    addExam,
    updateExams,
    updateStatusExam,
    removeExam
}