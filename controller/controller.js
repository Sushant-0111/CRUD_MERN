import User from '../model/userModel'




const create = async(req, res) => {
    try{
        const user = new User(req.bodys)

    }catch(e){
        res.status(500).json({e:"Internal Server ErrorS"});
    }
}




export const fetch = async(req, res) =>{
    try{
        return res.json("Hello World!");

    }
    catch(e){
        res.status(500).json({error:"Internal Server ErrorS"});

    }
}
