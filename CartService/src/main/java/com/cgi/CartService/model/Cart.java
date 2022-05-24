package com.cgi.CartService.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "Cart")
public class Cart {
	
	
	
	@Id
	private int cartId;
	
	
	private int userId;
	private List<Product> products;
	
	
	public Cart() {}
	
	
	
	public Cart(int cartId, int userId, List<Product> products) {
		this.cartId = cartId;
		this.userId = userId;
		this.products = products;
	}


	public int getCartId() {
		return cartId;
	}
	public void setCartId(int cartId) {
		this.cartId = cartId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}



	@Override
	public String toString() {
		return "Cart [cartId=" + cartId + ", userId=" + userId + ", products=" + products + "]";
	}



	
	
	
	
	

}
