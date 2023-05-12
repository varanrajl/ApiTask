const mongoose = require('mongoose');


const studentSchema=mongoose.Schema({
title:String,
description:String
});

module.exports=mongoose.model('student',studentSchema);