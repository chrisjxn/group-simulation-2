module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;

        dbInstance.create_user([username, password])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send())
    }
}