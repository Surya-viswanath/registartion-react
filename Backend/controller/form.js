
const form = require("../model/formschema");

const Createform = async (req, res) => {
    const {
        email,
        fullname,
        mothername,
        fathername,
        birthday,
        nationality,
        gender,
        residentcountry,
        address,
        maritalstatus,
        mobilenumber,
        secondnumber
    } = req.body

    const formdetails = await form.create({
        email,
        fullname,
        mothername,
        fathername,
        birthday,
        nationality,
        gender,
        residentcountry,
        address,
        maritalstatus,
        mobilenumber,
        secondnumber
    });

    res.json(formdetails);
};
module.exports= Createform;