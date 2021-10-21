const prisma = require("../../utils/db");

const createPatientWithAppointment = async (req, res) =>{
    // console.log("Body", req.body)
    // console.log("Params", req.params)

    const { firstName, lastName } = req.body;

    const result = await prisma.patient.create({
        data:{
            firstName,     
            lastName,     
            // dateOfBirth 
        },
    })


}

module.exports = { 
    createPatientWithAppointment
};