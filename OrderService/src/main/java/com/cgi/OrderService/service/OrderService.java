package com.cgi.OrderService.service;

import java.util.List;

import com.cgi.OrderService.exceptions.OrderWithIDExists;
import com.cgi.OrderService.exceptions.OrderWithIDNotFound;
import com.cgi.OrderService.models.Order;

public interface OrderService {
	
	List<Order> getAllOrders();
	Order getOrderByID(int orderId) throws OrderWithIDNotFound;
	Order addNewOrder(Order newOrder) throws OrderWithIDExists;
	Order editOrderByID(Order updatedOrder) throws OrderWithIDNotFound;
	void deleteOrderByID(int orderId) throws OrderWithIDNotFound;
	
	List<Order> getOrdersByDeliveryStatus(String deliveryStatus);
	List<Order> getOrderByUserId(int userId);

}
