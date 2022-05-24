package com.cgi.CartService.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.cgi.CartService.model.Cart;


@Repository
public interface CartRepository extends MongoRepository<Cart, Integer> {

}
