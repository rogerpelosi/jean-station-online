package com.cgi.CartService.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cgi.CartService.exceptions.CartWithTheIDAlreadyPresentException;
import com.cgi.CartService.exceptions.CartWithTheIdNotPresentException;
import com.cgi.CartService.model.Cart;
import com.cgi.CartService.repository.CartRepository;


@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepository cartRepository;
	
	
	@Override
	public Cart getCartById(int id) throws CartWithTheIdNotPresentException {
		Optional<Cart> optional = cartRepository.findById(id);
		
		if(optional.isPresent()) {
			
			return optional.get();
		}
		throw new CartWithTheIdNotPresentException();
	}

	@Override
	public Cart createNewCart(Cart cart) throws CartWithTheIDAlreadyPresentException {
		Optional<Cart> optional = cartRepository.findById(cart.getCartId());
		
		if(optional.isEmpty()) {
			cartRepository.save(cart);
			return cart;
		}
		throw new CartWithTheIDAlreadyPresentException();
	}

	
	@Override
	public Cart deleteCart(int id) throws CartWithTheIdNotPresentException {
		Optional<Cart> optional = cartRepository.findById(id);
		
		if(optional.isPresent()) {
			cartRepository.delete(optional.get());
			return optional.get();
		} else {
		throw new CartWithTheIdNotPresentException();
		}
	}

	
	
	@Override
	public Cart updateCart(Cart cart) throws CartWithTheIdNotPresentException {
		Optional<Cart> optional = cartRepository.findById(cart.getCartId());
		
		if(optional.isPresent()) {
			cartRepository.save(cart);
			return cart;
		}
		throw new CartWithTheIdNotPresentException();
	}

}
