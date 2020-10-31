import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    dialect: 'postgres'
});

const models = {
    User: sequelize.import('./user'),
    Team: sequelize.import('./team'),
    Channel: sequelize.import('./channel'),
    Message: sequelize.import('./message'),
    // member: sequelize.import('./member')
}

Object.keys(models).forEach(modelname => {
    if('associate' in models[modelname]){
        models[modelname].associate(models)
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;