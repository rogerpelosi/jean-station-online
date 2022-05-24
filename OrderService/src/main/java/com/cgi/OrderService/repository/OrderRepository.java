package com.cgi.OrderService.repository;

import org.springframework.stereotype.Repository;

import com.cgi.OrderService.models.Order;

import org.springframework.data.mongodb.repository.MongoRepository;


@Repository
public interface OrderRepository extends MongoRepository<Order, Integer> {

}
