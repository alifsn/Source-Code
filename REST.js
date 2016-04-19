var mysql   = require("mysql");

function REST_ROUTER(router,connection) {
    var self = this;
    self.handleRoutes(router,connection);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection) {
    var self = this;
    router.get('/',function(req,res){
        res.json({"Message":"Server status is RUNNING !!!"});
    });

    router.get('/cart',function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["cart_item"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Message" : "Error executing MySQL query"});
            } else {
                res.json({"cartList" : rows});
            }
        });

    });

/**
    @param
    name
    size
    color
    price
    discount
    **/
    router.post('/cart',function(req,res){
        var query = "INSERT INTO ??(??,??,??,??,??) VALUES (?,?,?,?,?)";
        var table = ["cart_item","product_name","product_size","product_color","product_price","discount",req.body.name,req.body.size,req.body.color,req.body.price,req.body.discount];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Message" : "Error executing MySQL query"});
            } else {
                res.json({"Message" : "Data Added Successfully"});
            }
        });

    });

/**
    @param
    id
    **/
    router.delete('/cart',function(req,res){
        var query = "DELETE from ?? WHERE ??=?";
        var id = req.body.id;
        var table = ["cart_item","id",id];
        query = mysql.format(query,table);

        var data = {"Items":""};
        var bool;
        var checkExist = "SELECT * from ?? WHERE ??=?";
        checkExist = mysql.format(checkExist,table);
        connection.query(checkExist,function(err,rows){
            data["Items"] = rows;
            var obj = data.Items;           
            if(obj.length>0){
                bool = true;
            }else{
                bool = false;
            }
        });

        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Message" : "Error executing MySQL query"});
            } else if(bool) {
                res.json({"Message" : "Delete data with id "+id});
            }else{
                res.json({"Message" : "Data not found"});
            }
        });


    });


    router.get('/total-purchase',function(req,res){
        var data = {"Items":""};
        var psum = 0;
        var query = "SELECT * FROM ??";
        var table = ["cart_item"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            data["Items"] = rows;
            var obj = data.Items;
            for (var i = 0; i < obj.length; i++) {
                var disc = obj[i].discount;
                var price = obj[i].product_price;               
                if(disc!=null){
                    disc = disc.substr(0,disc.length-1);
                    var nt = 0;
                    nt = disc;                  
                }
                if(nt > 0){
                    var rprice = (nt/100) * price;
                    price = price - rprice;
                    psum=psum+price;
                    console.log("hrga stlh diskon : " + price);
                    console.log("total semua stlh diskon : " + psum);
                    continue;
                }
                psum=psum+price;
                console.log("total semua : " + psum);                               
            };
            if(err) {
                res.json({"Message" : "Error executing MySQL query"});
            } else {
                res.json({"Total Purchase" : psum});
            }
        });
    });
}

module.exports = REST_ROUTER;
