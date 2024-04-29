const axios = require('axios');

const getProfile = async (req, res, next) => {
    try {
        const url = "http://localhost:8000/profile"
        const response = await axios.get(url)
        res.status(200).json({
            msg:"Get profile succeed",
            data:response.data
        })

    } catch(error){
        next(error)
    }
}

module.exports = {getProfile} //大括号里可以添加多个method