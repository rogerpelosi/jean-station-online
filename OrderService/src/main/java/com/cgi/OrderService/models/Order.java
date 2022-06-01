package com.cgi.OrderService.models;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Order {
	
//	@Transient
//    public static final String SEQUENCE_NAME = "orders_sequence";
	
	@Id
	private int orderNo;
	
	private int userId;
	private String deliveryAddress;
	private String deliveryStatus;
	private List<Product> products;
	
	public int getOrderNo() {return orderNo;}
	public void setOrderNo(int orderNo) {this.orderNo = orderNo;}
	
	public int getUserId() {return userId;}
	public void setUserId(int userId) {this.userId = userId;}
	
	public String getDeliveryAddress() {return deliveryAddress;}
	public void setDeliveryAddress(String deliveryAddress) {this.deliveryAddress = deliveryAddress;}
	
	public String getDeliveryStatus() {return deliveryStatus;}
	public void setDeliveryStatus(String deliveryStatus) {this.deliveryStatus = deliveryStatus;}
	
	public List<Product> getProducts() {return products;}
	public void setProducts(List<Product> products) {this.products = products;}
	
	public Order(int orderNo, int userId, String deliveryAddress, String deliveryStatus, List<Product> products) {
		super();
		this.orderNo = orderNo;
		this.userId = userId;
		this.deliveryAddress = deliveryAddress;
		this.deliveryStatus = deliveryStatus;
		this.products = products;
	}
	
	public Order() {}
	
	@Override
	public String toString() {
		return "Order [orderNo=" + orderNo + ", userId=" + userId + ", deliveryAddress=" + deliveryAddress
				+ ", deliveryStatus=" + deliveryStatus + ", products=" + products + "]";
	}
	
}
