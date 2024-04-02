const db = require('../persistence');

module.exports = async (req, res) => {
    const items = await db.getItems();
    for (let i = 0; i < items.length; i++) {
        console.log(`items: ${items[i]} | id: ${items[i]['id']} | name:  ${items[i]['name']} | completed: ${items[i]['completed']}`);
    }

    res.send(items);
};
