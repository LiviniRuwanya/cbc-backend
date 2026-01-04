import Student from '../models/students.js';



export function getStudents(req,res){
    
    Student.find().then(
        (studentlist)=>{(
            res.json({
                list: studentlist
            })
        )}
    )
}

export function createStudent(req, res){
    const student = new Student(req.body);
    student.save().then(() => {
            res.json({
                message: "Student created"
            });
        })
        .catch(() => {
            res.json({
                message: "Student not created"
            });
        });
};

export function deleteStudent(req,res){
    Student.deleteOne({name : req.body.name}).then(
        ()=>{
            res.json(
                {
                    message:"Student deleted successfully"
                }
            )
        }
    )
}    