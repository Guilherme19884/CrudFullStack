import { data } from "../database/data.js"

export const getUsers = (_, res)=> {
    const q = "SELECT * FROM user"

    data.query(q, (err, data) =>{
        if(err)return res.json(err)

        return res.status(200).json(data)
    })
}