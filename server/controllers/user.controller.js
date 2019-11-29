import User from '../models/user.model';
import _ from 'lodash';
import errorHandler from '../helpers/dbErrorHandler';

const create = (req, res, next) => {
    const user = new User(req.body);
    user.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            });
        }
        res.status(200).json({
            message: "Successfully signed up",
            data: result
        });
    });
};
const list = (req, res) => {};
const userById = (req, res, next) => {};
const read = (req, res) => {};
const update = (req, res, next) => {};
const remove = (req, res, next) => {};

export default {create, userById, read, list, remove, update};