const FormData = require('form-data');
const axios = require('axios');

class LeadsController{
    
    
    // get all Leads
    static async GetAllLeads(req,res){
        const allLeads = await axios.get('https://www.zohoapis.in/crm/v2/functions/getallleads/actions/execute?auth_type=apikey&zapikey=1003.24f88a6aee4a4196cdceb9b336d2e57b.5ddbe33affbd11cee48f657f927a4e1d');
        res.send(allLeads.data.details.output);
    }

    // Inserting New Lead
    static InsertNewLead(req,res,next){
        console.log(req.body);
        var input = new FormData();
        input.append("firstName",req.body.firstName);
        input.append("lastName",req.body.lastName);
        input.append("company",req.body.company);
        input.append("country",req.body.country);
        
        var megaInput = new FormData();
        megaInput.append("arguments",input);
        
        axios.post("https://www.zohoapis.in/crm/v2/functions/insertnewlead/actions/execute?auth_type=apikey&zapikey=1003.24f88a6aee4a4196cdceb9b336d2e57b.5ddbe33affbd11cee48f657f927a4e1d")
        .then(data => res.send(data))
        .catch(err => next(err));
    }

    // Getting Particular Lead Details
    static GetLead(req,res){
        res.send("from controller!");
    }

    // Updating Existing Lead
    static UpdateLead(req,res){
        res.send("from controller!");
    }

}

module.exports = LeadsController;