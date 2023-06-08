import { client } from '../db.js';

export const get = async (req, res) => {
    try {
        const [rows] = await client.query(
            'SELECT Id, Name, Salary FROM Employee'
        );
        res.json(rows);
    } catch {
        return res.status(500).json({
            Message: 'Something went Wrong...',
        });
    }
};

export const getById = async (req, res) => {
    try {
        const [rows] = await client.query(
            'SELECT * FROM Employee WHERE Id = ?',
            req.params.id
        );

        if (rows.length <= 0) {
            return res.status(404).json({
                message: 'Employee not Found',
            });
        }

        res.json(rows[0]);
    } catch {
        return res.status(500).json({
            Message: 'Something went Wrong...',
        });
    }
};

export const create = async (req, res) => {
    try {
        const { name, salary } = req.body;
        const [rows] = await client.query(
            'INSERT INTO Employee (Name, Salary) VALUES (?, ?)',
            [name, salary]
        );
        res.send({
            id: rows.insertId,
            name,
            salary,
        });
    } catch {
        return res.status(500).json({
            Message: 'Something went Wrong...',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const [result] = await client.query(
            'DELETE FROM Employee WHERE Id = ?',
            req.params.id
        );

        if (result.affectedRows <= 0) {
            return res.status(404).json({
                message: 'Employee not Found',
            });
        }

        res.sendStatus(204);
    } catch {
        return res.status(500).json({
            Message: 'Something went Wrong...',
        });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, salary } = req.body;

        const [result] = await client.query(
            'UPDATE Employee SET Name = IFNULL(?, Name), Salary = IFNULL(?, Salary) WHERE Id = ?',
            [name, salary, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({
                message: 'Employee not Found',
            });
        }

        const [rows] = await client.query(
            'SELECT * FROM Employee WHERE Id = ?',
            req.params.id
        );

        res.json(rows);
    } catch {
        return res.status(500).json({
            Message: 'Something went Wrong...',
        });
    }
};
