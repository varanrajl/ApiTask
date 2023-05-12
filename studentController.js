
const empModel = require('../Models/student');
module.exports={
create: (req, res) => {
    let student = new empModel({
        title: req.body.title,
        description: req.body.description
        
     })
     student.save()
     .then(result => {
         res.json({ success: true, result: result})
     })
     .catch(err => {
          res.json({ success: false, result: err})
         })
},
update: (req, res) => {
    empModel.findByIdAndUpdate({_id: req.body._id}, req.body)
    .then(student => {
        res.send(student)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
},
delete: (req, res) => {
    empModel.findByIdAndRemove({ _id: req.body._id})
    .then(student => {
        if(!student) {
            return res.status(404).send({
                message: "student not found with id " + req.params._id
            });
        }
        res.send({message: "student deleted successfully!"});
    })
    .catch(err => res.json({success: false, result: err}))
},
retrieve: (req, res) => {
    empModel.find()
    .then(student => {
        res.send(student);
    })
    .catch(err => {
        res.json({ success: false, result: "No students found"})
    })
}

}