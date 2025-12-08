import promisePool from '../utils/database.js';

// selecting all users from database
const selectAllUsers = async () => {
  const [rows] = await promisePool.query(
    `SELECT user_id, username, email, created_at, user_level_id 
     FROM USERS`
  );
  console.log('selectAllUsers result', rows);
  return rows;
};

// selecting user by user id
const selectUserById = async (userId) => {
  try {
    const [rows] = await promisePool.query(
      `SELECT user_id, username, email, created_at, user_level_id 
       FROM USERS WHERE user_id = ?`,
      [userId]
    );
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// inserting a new user into database
const insertUser = async (user) => {
  try {
    const [result] = await promisePool.query(
      `INSERT INTO USERS (username, password, email, user_level_id) 
       VALUES (?, ?, ?, 2)`,
      [user.username, user.password, user.email, user.user_level_id]
    );
    console.log('insertUser', result);
    return result.insertId;
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// selecting a user by username and password
const selectUserByNameAndPassword = async (username, password) => {
  try {
    const [rows] = await promisePool.query(
      `SELECT user_id, username, email, created_at, user_level_id 
       FROM USERS WHERE username = ? AND password = ?`,
      [username, password]
    );
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

// selecting a user by username
const selectUserByUsername = async (username) => {
  try {
    const [rows] = await promisePool.query(
      `SELECT user_id, username, password, email, created_at, user_level_id 
       FROM USERS WHERE username = ?`,
      [username]
    );
    return rows[0];
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

const updateUser = async (id, fields) => {
  try {
    const updates = [];
    const values = [];

    for (const [key, value] of Object.entries(fields)) {
      updates.push(`${key} = ?`);
      values.push(value);
    }

    values.push(id);

    const [result] = await promisePool.query(
      `UPDATE USERS SET ${updates.join(', ')} WHERE user_id = ?`,
      values
    );

    return result;
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};


// deleting a user by id
const deleteUserById = async (id) => {
  try {
    const [result] = await promisePool.query(
      `DELETE FROM USERS WHERE user_id = ?`,
      [id]
    );

    console.log('Rows affected:', result.affectedRows);
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('database error');
  }
};

export {
  selectAllUsers,
  selectUserById,
  insertUser,
  selectUserByNameAndPassword,
  selectUserByUsername,
  updateUser,
  deleteUserById,
};
