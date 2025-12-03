import Joi from 'joi';

const schemas = {
    createPost: Joi.object( {
        title: Joi.string().required(),
        content: Joi.string().required(),
        tags: Joi.array().items( Joi.string() )
    } ),
    addComment: Joi.object( {
        message: Joi.string().required()
    }),
    updatePost: Joi.object( {
        title: Joi.string(),
        content: Joi.string(),
        tags: Joi.array().items( Joi.string() )
    }),
    dateFormat: Joi.object({
        dateFrom: Joi.date().iso().required(),
        dateTo: Joi.date().iso().required()
    }),
    registerUser: Joi.object({
        login: Joi.string().required(),
        password: Joi.string().min(8).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
    }),
    updateUser: Joi.object({
        login: Joi.string(),
        password: Joi.string().min(8),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        roles: Joi.array().items(Joi.string())
    }),
    changeRoles: Joi.object({
        isAddRole: Joi.boolean().required()
    }),
    changePassword: Joi.object({
        password: Joi.string().min(8).required()
    })
}
const validate = (schemaName, target = 'body') => (req, res, next) => {
    const schema = schemas[schemaName];

    if (!schema) {
        return next( new Error( `Schema ${schemaName} is not found` ) )
    }
    console.log(req[target]);
    const {error} = schema.validate( req [target] );
    if (error) {
        return res.status( 400 ).send( {
            message: error.details[0].message,
            code: 400,
            status: 'bed request',
            path: req.path
        } )
    }
    return next();
};
export default validate;