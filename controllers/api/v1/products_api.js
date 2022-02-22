const Product = require('../../../models/products');


//getting all products data
module.exports.index = async function(req, res){


    let products = await Product.find({});

    return res.json(200, {
        message: "Response:  All products data",
        data:{
            products: products
        }
       
    })
}

//creating new product using api
module.exports.create = async function(req, res){

    try{
        console.log(req.body);
        let product = await Product.create(req.body,function(err, created_product){
            if(err){
                console.log("Error in creating procuct using api in try block",err);
                return res.json(500, {
            message: "Internal Server Error"
        });
            }
            else{
                return res.json(200, {
                    message: 'Response: Your product is added to Database',
                    data:{
                        product: created_product,
                    }
                });
            }
        });

       

    }catch(err){
        console.log('Error in creating product using api', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}

//updating existing product details using api
module.exports.update = async function(req, res){

    try{
        console.log(req.query);
        console.log(req.params);
        // let product = await Product.find({product_id:req.params.id});
        // console.log(product)
        let updated_product = await Product.findOneAndUpdate({product_id:req.params.id}, { $inc: { "quantity" : req.query.number} },
        function (err) {
                if (err){
                    console.log(err)
                }
            });

        return res.json(200, {
                message: "product quantity updated successfully!",
                data:{
                    product: updated_product
                }
        });
        

    }catch(err){
        console.log('Unable to update product', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
    
}


//deleting product using api
module.exports.delete = async function(req, res){

    try{

        console.log(req.params.id);

        await Product.findOneAndDelete({product_id: req.params.id }, function (err) {
            if (err){
                console.log("Error in deleting product",err)
            }
        });

        return res.json(200,{
            data:{
                message: "product updated successfully!",
            }
        });
      
    }catch(err){
        console.log('Error in deleting product', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
    
}