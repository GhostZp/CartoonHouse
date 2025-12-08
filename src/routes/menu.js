import express from 'express';
import db from '../utils/database.js';

const router = express.Router();

// GET all food with images + allergens
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        f.food_id,
        f.title,
        f.price,
        f.category_id,
        fi.image_url AS image,
        GROUP_CONCAT(
          CASE
            WHEN a.nuts = 1 THEN 'nuts'
            WHEN a.dairy = 1 THEN 'dairy'
            WHEN a.gluten = 1 THEN 'gluten'
          END
          SEPARATOR ', '
        ) AS allergens
      FROM food AS f
      LEFT JOIN food_images AS fi
        ON f.food_id = fi.food_id
      LEFT JOIN food_ing AS fing
        ON f.food_id = fing.food_id
      LEFT JOIN ingredients AS ing
        ON fing.ingredient_id = ing.ingredient_id
      LEFT JOIN allergens AS a
        ON ing.allergen_id = a.allergen_id
      GROUP BY f.food_id;
    `);

    res.json(rows);

  } catch (err) {
    console.error("MYSQL ERROR:", err);
    res.status(500).json({ error: "Failed to fetch menu items" });
  }
});

export default router;
