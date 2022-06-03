package com.cgi.CartService.model;




public class Product {
	
	
	private int productId;
	
	private String title;
	
	private float price;
	
	private int quantity;
	

	public Product() {}


	public Product(int productId, String title, float price, int quantity) {
		super();
		this.productId = productId;
		this.title = title;
		this.price = price;
		this.quantity = quantity;
	}


	public int getProductId() {
		return productId;
	}


	public void setProductId(int productId) {
		this.productId = productId;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}
	
	
	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	@Override
	public String toString() {
		return "Product [productId=" + productId + ", title=" + title + ", price=" + price + ", quantity=" + quantity
				+ "]";
	}

}
