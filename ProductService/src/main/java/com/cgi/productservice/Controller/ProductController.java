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
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    private ProductService productService;



    @GetMapping(value = "/Product")
    public ResponseEntity<List<Product>> getAllProducts(){
        ResponseEntity<List<Product>> responseEntity;

        List<Product> productList = productService.getAllProducts();
        responseEntity = new ResponseEntity<List<Product>>(productList, HttpStatus.OK);
        return responseEntity;
    }

    @PostMapping("/Product")
    public ResponseEntity<?> addProduct(@RequestBody Product Product) {
        ResponseEntity<?> responseEntity;
        try {
            Product newProduct = productService.addProduct(Product);
            responseEntity = new ResponseEntity<Product>(newProduct, HttpStatus.CREATED);
        } catch (ProductWithTheIDAlreadyExistException e){
            responseEntity = new ResponseEntity<String>("Failed to store the Product", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }

    @GetMapping("Product/{empId}")
    public ResponseEntity<?> getProductById(@PathVariable("empId") Long id) {
        ResponseEntity<?> responseEntity;
        try {
            Product product = productService.getProductById(id);
            responseEntity = new ResponseEntity<Product>(product, HttpStatus.OK);
        } catch (ProductWithTheIDDoesNotExistException e) {
            responseEntity = new ResponseEntity<String>("Failed to store the Product", HttpStatus.CONFLICT);
        }
        return responseEntity;
    }



    @PutMapping("Product/{empId}")
    public ResponseEntity<?> updateProduct(@RequestBody Product product, @PathVariable ("empId") Long id){
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

    @DeleteMapping(value = "Product/{empId}")
    public ResponseEntity<Long> deleteProduct(@PathVariable("empId") Long id){
          try {
              productService.deleteProductById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(id, HttpStatus.OK);
        }
    }


}
