import db from '../config/db.js';

export const getDoctors = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM doctors');
    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
