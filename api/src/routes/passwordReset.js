const server = require('express').Router();

//                               \|||/
//                               (o o)
//                      ------ooO-(_)-Ooo------
//                               S-70

server.put("/:id/passwordReset", (req, res, next) => {
    try {
        const { id } = req.params;
        const { email, first_name, last_name, address, locality, state, admin } = req.body;
        User.update(
            {
                email,
                first_name,
                last_name,
                address,
                locality,
                state,
                password: req.body,
                admin
            },
            { where: { id } }
        ).then(() => {
            res.sendStatus(200);
        });
    } catch (error) {
        console.error(error.message);
    }
});