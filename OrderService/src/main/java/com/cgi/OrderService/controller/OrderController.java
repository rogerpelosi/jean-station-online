package com.cgi.OrderService.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.cgi.OrderService.exceptions.OrderWithIDNotFound;
import com.cgi.OrderService.models.Order;
import com.cgi.OrderService.repository.OrderRepository;
import com.cgi.OrderService.service.OrderService;

@RestController
@RequestMapping("/api/v1")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	@GetMapping("/orders")
	public ResponseEntity<List<Order>> getAllOrdersHandler(){
		ResponseEntity<List<Order>> responseEntity;
		List<Order> orders = orderService.getAllOrders();
		responseEntity = new ResponseEntity<List<Order>>(orders, HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("/orders/{orderId}")
	public ResponseEntity<?> getOrderById(@PathVariable("orderId") int id){
		ResponseEntity<?> responseEntity;
		try {
			Order order = orderService.getOrderByID(id);
			responseEntity = new ResponseEntity<Order>(order, HttpStatus.OK);
		} catch(OrderWithIDNotFound e) {
			responseEntity = new ResponseEntity<String>("Order Not Found", HttpStatus.NOT_FOUND);
		}
		return responseEntity;
	}

}
