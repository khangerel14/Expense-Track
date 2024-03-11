import { pool } from "../utils/db.js";

export const createCategory = async (req, res) => {
    console.log(req.body);
    const { name, description } = req.body;
    console.log( name, description );
    try {
        const queryText = "INSERT INTO category ( id, name, description) VALUES (gen_random_uuid(), $1, $2) RETURNING *"
        const response = await pool.query(queryText, [ name, description ])
        res.send(response.rows[0])  
    } catch (error) {
        console.error(error);
        res.send("error query")
    }
}

export const getAllCategory = async (req, res) => {
    try {
        const queryText = `SELECT * FROM category`;
        const response = await pool.query(queryText)
        res.send(response.rows)
    } catch (error) {
        console.error(error);
    }
}