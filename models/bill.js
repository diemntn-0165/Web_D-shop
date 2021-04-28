const Sequelize = require('sequelize');
const sequelize = require('../databases/database').sequelize;
const Op = require('../databases/database').Op;
const coupon = require('./coupon');
const users = require('./users');

const bill = sequelize.define('bill',{
    bill_id:{
        type: Sequelize.CHAR,
        primaryKey: true
    },
    user_id:{
        type: Sequelize.CHAR
    },
    coupon_id:{
        type: Sequelize.CHAR
        
    },
    bill_date:{
        type: Sequelize.CHAR
    },
    total_due:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false,
}
    );
    bill.belongsTo(coupon,{foreignKey: 'fk_billid_couponid', targetKey:'coupon_id'});
    coupon.hasMany(bill,{foreignKey: 'fk_billid_couponid', sourceKey:'coupon_id'});
    users.hasMany(bill,{foreignKey: 'fk_billid_userid', sourceKey:'user_id'});

    bill.belongsTo(users,{foreignKey: 'fk_billid_userid', targetKey:'user_id'});
    module.exports = bill;