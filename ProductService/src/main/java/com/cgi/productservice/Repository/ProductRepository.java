package com.cgi.productservice.Repository;


import com.cgi.productservice.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.Optional;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<Product, Long> {
Optional<Product> findByIdAndTitle(Long id, String title);
}


