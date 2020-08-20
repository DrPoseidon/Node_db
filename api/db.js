const { Sequelize, INTEGER, DataTypes} = require('sequelize')

const sequelize = new Sequelize('test_db','postgres','Converse2020',{
 host: 'localhost',
 dialect: 'postgres'
});

//   (async() => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }
// })();

const Users = sequelize.define("Users",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    login:{
        type: DataTypes.STRING,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

// Users.create({
//     login: "DrPoseidon",
//     name: "Anton Popov"
// }).then(res =>{
//     console.log(res)
// }).catch(err=>console.log(err))

Users.findAll({raw:true}).then(users=>{
    console.log(users);
  }).catch(err=>console.log(err));