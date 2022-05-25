package com.cgi.productservice.Controller;


import com.cgi.productservice.Exceptions.ProductWithTheIDAlreadyExistException;
import com.cgi.productservice.Exceptions.ProductWithTheIDDoesNotExistException;
import com.cgi.productservice.Model.Product;
import com.cgi.productservice.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(value = "/product")
    public ResponseEntity<List<Product>> getAllProducts(){
        ResponseEntity<List<Product>> responseEntity;

        List<Product> productList = productService.getAllProducts();
        responseEntity = new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("/product")
    public ResponseEntity<?> addProduct(@RequestBody Product product) {
        ResponseEntity<?> responseEntity;
        try {
            Product newProduct = productService.addProduct(product);
            responseEntity = new ResponseEntity<Product>(newProduct, HttpStatus.CREATED);
        } catch (ProductWithTheIDAlreadyExistException e){
            responseEntity = new ResponseEntity<String>("Failed to store the Product", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @GetMapping("product/{proId}")
    public ResponseEntity<?> getProductById(@PathVariable("proId") Long id) {
        ResponseEntity<?> responseEntity;
        try {
            Product product = productService.getProductById(id);
            responseEntity = new ResponseEntity<Product>(product, HttpStatus.OK);
        } catch (ProductWithTheIDDoesNotExistException e) {
            responseEntity = new ResponseEntity<String>("Failed to store the Product", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }



    @PutMapping("product/{proId}")
    public ResponseEntity<?> updateProduct(@RequestBody Product product, @PathVariable ("proId") Long id){
        ResponseEntity<?> responseEntity;
        try {
            product.setId(id);
            Product newProduct = productService.updateProduct(product);
            responseEntity = new ResponseEntity<Product>(newProduct, HttpStatus.OK);
        } catch (ProductWithTheIDAlreadyExistException e) {
            responseEntity = new ResponseEntity<String>("Failed to update the Product", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @DeleteMapping( "product/{proId}")
    public ResponseEntity<String> deleteProduct(@PathVariable("proId") Long id){

            ResponseEntity<String> responseEntity;
            try {
                productService.deleteProductById(id);
                responseEntity = new ResponseEntity<String>("Product Deleted", HttpStatus.OK);
            } catch(ProductWithTheIDDoesNotExistException e) {
                responseEntity = new ResponseEntity<String>("Product Not Found", HttpStatus.NOT_FOUND);
            }
            return responseEntity;
        }




}
