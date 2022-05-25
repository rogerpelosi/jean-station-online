package com.cgi.CartService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cgi.CartService.exceptions.CartWithTheIDAlreadyPresentException;
import com.cgi.CartService.exceptions.CartWithTheIdNotPresentException;
import com.cgi.CartService.model.Cart;
import com.cgi.CartService.service.CartService;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1")
public class CartController {
	
	@Autowired
	private CartService cartService;
	
	
	@PostMapping(value="/cart")
	public ResponseEntity<?> createNewCartHandler(@RequestBody Cart cart){
		
		ResponseEntity<?> responseEntity;
			
		try {
				Cart newCart;
				newCart = cartService.createNewCart(cart);
				responseEntity = new ResponseEntity<Cart>(newCart, HttpStatus.CREATED);
			} catch (CartWithTheIDAlreadyPresentException e) {
				// TODO Auto-generated catch block
				responseEntity = new ResponseEntity<String>("A cart with this ID cannot be found.", HttpStatus.NOT_FOUND);
			}
		
		return responseEntity;
	}
	
	
	
	@GetMapping(value="/cart/{cartId}")
	public ResponseEntity<?> getCartByIdHandler(@PathVariable("cartId") int id){
		
		ResponseEntity<?> responseEntity;
		
		try {
			Cart cart = cartService.getCartById(id);
			responseEntity = new ResponseEntity<Cart>(cart, HttpStatus.OK);	
		}catch(CartWithTheIdNotPresentException e) {
			
			responseEntity = new ResponseEntity<String>("Cart with ID not found", HttpStatus.NOT_FOUND);
		}
		
		return responseEntity;
	}
	
	
	
	@PutMapping(value="/cart/{cartId}")
	public ResponseEntity<?> updateCartHandler(@PathVariable("cartId") int id, @RequestBody Cart cart){
		
		ResponseEntity<?> responseEntity;
		
		try {
			cart.setCartId(id);
			Cart updateCart = cartService.updateCart(cart);
			responseEntity = new ResponseEntity<Cart>(updateCart, HttpStatus.OK);
		}catch(CartWithTheIdNotPresentException e) {
			
			responseEntity = new ResponseEntity<String>("Cart with ID not found", HttpStatus.NOT_FOUND);
		}
		
		return responseEntity;
	}
	
	@DeleteMapping(value="/cart/{cartId}")
	public ResponseEntity<?> deleteCartHandler(@PathVariable("cartId") int id){
		ResponseEntity<?> responseEntity;
		
		try {
			Cart deleteCart = cartService.deleteCart(id);
			responseEntity = new ResponseEntity<Cart>(deleteCart, HttpStatus.OK);
		}catch(CartWithTheIdNotPresentException e) {
			responseEntity = new ResponseEntity<String>("Cart with this ID is not found", HttpStatus.NOT_FOUND);
		}
		
		
		return responseEntity;
	}

}
