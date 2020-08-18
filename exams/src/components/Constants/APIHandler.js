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
/* Api Students */
const getStudents = () => {
    return http.get("/students");
};

const addStudent = data => {
    return http.post('/addStudent', data);
};

const updateStudent = (id, data) => {
    return http.put(`/updateStudents/${id}`, data);
};

const removeStudent = id => {
    return http.delete(`/deleteStudent/${id}`)
};

/* Api Users */

const getUsers = () => {
    return http.get("/login/users");
};

const addUser = data => {
    return http.post('/login/addUser', data);
};

const updateUser = (id, data) => {
    return http.put(`/updateUser/${id}`, data);
};

const removeUser = id => {
    return http.delete(`/deleteUser/${id}`)
};



export default {
    getExams,
    filterFaculty,
    filterYearOfStudy,
    addExam,
    updateExams,
    updateStatusExam,
    removeExam,
    getStudents,
    addStudent,
    updateStudent,
    removeStudent,
    getUsers,
    addUser,
    updateUser,
    removeUser
}