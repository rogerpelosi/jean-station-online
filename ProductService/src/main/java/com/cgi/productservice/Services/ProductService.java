package com.cgi.productservice.Services;

import com.cgi.productservice.Exceptions.ProductWithTheIDAlreadyExistException;
import com.cgi.productservice.Exceptions.ProductWithTheIDDoesNotExistException;
import com.cgi.productservice.Model.Product;


import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product getProductById(Long id) throws ProductWithTheIDDoesNotExistException;
    Product addProduct(Product product) throws ProductWithTheIDAlreadyExistException;
    void deleteProductById(Long id) throws ProductWithTheIDDoesNotExistException;
    Product updateProduct(Product product) throws ProductWithTheIDAlreadyExistException;

}
