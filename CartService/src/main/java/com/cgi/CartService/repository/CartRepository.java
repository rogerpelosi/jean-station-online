package com.cgi.CartService.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.cgi.CartService.model.Cart;


public interface CartRepository extends MongoRepository<Cart, Integer> {

}
