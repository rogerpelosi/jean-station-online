package com.cgi.CartService.model;




public class Product {
	
	
	private int productId;
	
	private String title;
	
	
	private float price;
	

	public Product() {}


	public Product(int productId, String title, float price) {
		this.productId = productId;
		this.title = title;
		this.price = price;
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


	@Override
	public String toString() {
		return "Product [productId=" + productId + ", title=" + title + ", price=" + price + "]";
	}
	
	
	
	
	
	
	
	
	

}
