package com.cgi.CartService.service;

import java.util.List;

import com.cgi.CartService.exceptions.CartWithTheIDAlreadyPresentException;
import com.cgi.CartService.exceptions.CartWithTheIdNotPresentException;
import com.cgi.CartService.model.Cart;



public interface CartService {
	
	
	Cart getCartById(int id) throws CartWithTheIdNotPresentException;
	Cart createNewCart(Cart cart) throws CartWithTheIDAlreadyPresentException;
	Cart deleteCart(int id) throws CartWithTheIdNotPresentException;
	Cart updateCart(Cart cart) throws CartWithTheIdNotPresentException;
}
