package com.cgi.productservice.Services;

import com.cgi.productservice.Exceptions.ProductWithTheIDAlreadyExistException;
import com.cgi.productservice.Exceptions.ProductWithTheIDDoesNotExistException;
import com.cgi.productservice.Model.Product;
import com.cgi.productservice.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;


    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    @Override
    public Product getProductById(Long id) throws ProductWithTheIDDoesNotExistException {
        Optional<Product> optional = productRepository.findById(id);
        if(optional.isPresent()){
            return optional.get();
        }
        throw new ProductWithTheIDDoesNotExistException();
    }

    @Override
    public Product addProduct(Product product) throws ProductWithTheIDAlreadyExistException {
        Optional<Product> optional = productRepository.findByIdAndTitle(product.getId(), product.getTitle());
        if(optional.isEmpty()){
            productRepository.save(product);
            return product;
        }
        throw new ProductWithTheIDAlreadyExistException();
    }

    @Override
    public void deleteProductById(Long id) throws ProductWithTheIDDoesNotExistException {
        Optional<Product> optional = productRepository.findById(id);
        if(optional.isPresent()){
            productRepository.deleteById(id);
        } else {
        throw new ProductWithTheIDDoesNotExistException();
        }
    }

    @Override
    public Product updateProduct(Product product)throws ProductWithTheIDAlreadyExistException {
        Optional<Product> optional = productRepository.findById(product.getId());
        if(optional.isPresent()){
            productRepository.save(product);
            return optional.get();
        }
        throw new ProductWithTheIDAlreadyExistException();
    }


}
