var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
})
.get('/index_main', function(req, res, next) {
  res.render('index_main');
})
.get('/login', function(req, res, next) {
  res.render('login');
})
.get('/authority_Area', function(req, res, next) {              
  res.render('authority_Area');
})
.get('/authority_Users', function(req, res, next) {             
  res.render('authority_Users');
})
.get('/debt_assetsDetail', function(req, res, next) {             
  res.render('debt_assetsDetail');
})
.get('/debt_assetsList', function(req, res, next) {             
  res.render('debt_assetsList');
})
.get('/debt_claimDetail', function(req, res, next) {             
  res.render('debt_claimDetail');
})
.get('/debt_claimList', function(req, res, next) {             
  res.render('debt_claimList');
})
.get('/debt_createDebt', function(req, res, next) {             
  res.render('debt_createDebt');
})
.get('/debt_examine', function(req, res, next) {             
  res.render('debt_examine');
})
.get('/debt_examineDebt', function(req, res, next) {            
  res.render('debt_examineDebt');
})
.get('/debt_examineDebt', function(req, res, next) {            
  res.render('debt_examineDebt');
})
.get('/debt_examineDebtassets', function(req, res, next) {            
  res.render('debt_examineDebtassets');
})
.get('/debt_examineDebtdetail', function(req, res, next) {            
  res.render('debt_examineDebtdetail');
})
.get('/debt_examineRight', function(req, res, next) {            
  res.render('debt_examineRight');
})
.get('/debt_examineRightdetail', function(req, res, next) {            
  res.render('debt_examineRightdetail');
})
.get('/debt_management', function(req, res, next) {            
  res.render('debt_management');
})
.get('/debt_quota', function(req, res, next) {            
  res.render('debt_quota');
})
.get('/debt_related', function(req, res, next) {            
  res.render('debt_related');
})
.get('/debt_relatedFile', function(req, res, next) {            
  res.render('debt_relatedFile');
})
.get('/debt_relatedRecord', function(req, res, next) {            
  res.render('debt_relatedRecord');
})
.get('/finance_Edebt', function(req, res, next) {            
  res.render('finance_Edebt');
})
.get('/finance_Flowdetail', function(req, res, next) {            
  res.render('finance_Flowdetail');
})
.get('/finance_Orderdetails', function(req, res, next) {            
  res.render('finance_Orderdetails');
})
.get('/finance_Platform', function(req, res, next) {            
  res.render('finance_Platform');
})
.get('/finance_Transferaccounts', function(req, res, next) {            
  res.render('finance_Transferaccounts');
})
.get('/finance_Userquery', function(req, res, next) {            
  res.render('finance_Userquery');
})
.get('/finance_Userwithdraw', function(req, res, next) {            
  res.render('finance_Userwithdraw');
})
.get('/finance_Withdrawals', function(req, res, next) {            
  res.render('finance_Withdrawals');
})
.get('/operate_Commodityaudit', function(req, res, next) {            
  res.render('operate_Commodityaudit');
})
.get('/operate_Noticepush', function(req, res, next) {            
  res.render('operate_Noticepush');
})
.get('/operate_Releasenotice', function(req, res, next) {            
  res.render('operate_Releasenotice');
})
.get('/operate_Releasetext', function(req, res, next) {            
  res.render('operate_Releasetext');
})
.get('/operate_textList', function(req, res, next) {            
  res.render('operate_textList');
})
.get('/supply_activityType', function(req, res, next) {            
  res.render('supply_activityType');
})
.get('/supply_classification', function(req, res, next) {            
  res.render('supply_classification');
})
.get('/supply_companyDetail', function(req, res, next) {            
  res.render('supply_companyDetail');
})
.get('/supply_createAccount', function(req, res, next) {            
  res.render('supply_createAccount');
})
.get('/supply_createcompanyAccount', function(req, res, next) {            
  res.render('supply_createcompanyAccount');
})
.get('/supply_createpersonalAccount', function(req, res, next) {            
  res.render('supply_createpersonalAccount');
})
.get('/supply_deliverGoods', function(req, res, next) {            
  res.render('supply_deliverGoods');
})
.get('/supply_goodsManagement', function(req, res, next) {            
  res.render('supply_goodsManagement');
})
.get('/supply_goodsRelease', function(req, res, next) {            
  res.render('supply_goodsRelease');
})
.get('/supply_goodsReleasecar', function(req, res, next) {            
  res.render('supply_goodsReleasecar');
})
.get('/supply_goodsReleasehouse', function(req, res, next) {            
  res.render('supply_goodsReleasehouse');
})
.get('/supply_goodsReleaseothers', function(req, res, next) {            
  res.render('supply_goodsReleaseothers');
})
.get('/supply_merchantList', function(req, res, next) {            
  res.render('supply_merchantList');
})
.get('/supply_movableCommodity', function(req, res, next) {            
  res.render('supply_movableCommodity');
})
.get('/supply_personalDetail', function(req, res, next) {            
  res.render('supply_personalDetail');
})
.get('/supply_refinedGoods', function(req, res, next) {            
  res.render('supply_refinedGoods');
})
.get('/supply_returnGoods', function(req, res, next) {            
  res.render('supply_returnGoods');
})
.get('/supply_selectedActivities', function(req, res, next) {            
  res.render('supply_selectedActivities');
})
.get('/supply_tradingOrder', function(req, res, next) {            
  res.render('supply_tradingOrder');
})
.get('/user_Certification', function(req, res, next) {            
  res.render('user_Certification');
})
.get('/user_Enterprise', function(req, res, next) {            
  res.render('user_Enterprise');
})
.get('/user_Usersdetail', function(req, res, next) {            
  res.render('user_Usersdetail');
})
.get('/user_Usersedit', function(req, res, next) {            
  res.render('user_Usersedit');
})
.get('/user_Userslist', function(req, res, next) {            
  res.render('user_Userslist');
})

module.exports = router;
