import * as healthService from "../services/health.js";


const errorhandler = (message, response) => {
    response.status(500);
    response.json({error: message});
};

const setSuccessResponse = (response) => {
    response.status(200);
    
};

export const index = async (request, response) => {
    try {
    
    setSuccessResponse(response);

    } catch(e){
        errorhandler(e.message, response);
    }
    
};