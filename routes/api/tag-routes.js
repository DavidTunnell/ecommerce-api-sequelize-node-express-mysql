const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
    // find all tags
    try {
        const tagData = await Tag.findAll({
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
            }]
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async(req, res) => {
    // find a single tag by its `id`
    try {
        const tagData = await Tag.findByPk(req.params.id, {
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
            }]
        });
        if (!tagData) {
            res.status(404).json({
                message: "No tag with this ID exists."
            });
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async(req, res) => {
    /* Example JSON:
      {
        "tag_name": "TEST 123"
      }
    */
    // create a new tag
    try {
        const tagData = await Tag.create(req.body);
        res.status(201).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async(req, res) => {
    /* Example JSON:
      {
        "tag_name": "TEST ***((()))!!!^^^"
      }
    */
    // update a tag's name by its `id` value
    try {
        const tagData = await Tag.update({
            //example mapping (not necessary here)
            tag_name: req.body.tag_name
        }, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async(req, res) => {
    // delete on tag by its `id` value
    try {
        const tagData = await Tag.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;